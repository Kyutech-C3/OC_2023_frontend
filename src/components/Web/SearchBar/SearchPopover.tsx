import { useDebounceSearch } from "@/hooks/web";
import { GetTag } from "@/types/common";
import { SearchPopoverProps } from "@/types/web";
import { Grid, Popover, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { CategorySelect } from "./CategorySelect";
import { SuggestTags } from "./SuggestTags";
import { SelectedTags } from "./SelectedTags";

export const SearchPopover = ({
    isOpen,
    closePopover,
    anchorEl,
}: SearchPopoverProps) => {
    const router = useRouter();
    const [selectedDepartment, setSelectedDepartment] = useState<string[]>([]);
    const [tagInput, setTagInput] = useState("");
    const [tagSuggest, setTagSuggest] = useState<GetTag[]>([]);
    const [searchTag, setSearchTag] = useState<GetTag[]>([]);
    const [selectedTag, setSelectedTag] = useState<number>(0);
    const { debouncedKeyword } = useDebounceSearch({
        keyword: tagInput,
        timeOutMillSec: 500,
    });
    const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key == "ArrowUp") {
            setSelectedTag(selectedTag > 0 ? selectedTag - 1 : selectedTag);
        } else if (e.key == "ArrowDown") {
            setSelectedTag(
                selectedTag <
                    tagSuggest.filter((tag) => !searchTag.includes(tag))
                        .length -
                        1
                    ? selectedTag + 1
                    : selectedTag
            );
        } else if (e.key == "Enter") {
            setSearchTag([
                ...searchTag,
                tagSuggest.filter((tag) => !searchTag.includes(tag))[
                    selectedTag
                ],
            ]);
        } else if (e.key == "Backspace" && tagInput == "") {
            setSearchTag((searchTag) => {
                const newTag = [...searchTag];
                newTag.pop();
                return newTag;
            });
        }
    };
    const handleCheckboxChange = (label: string) => {
        let newLabel = [...selectedDepartment];
        if (newLabel.includes(label)) {
            newLabel = newLabel.filter((item) => item !== label);
        } else {
            newLabel.push(label);
        }
        setSelectedDepartment(newLabel);
        const labelsQuery = newLabel.join(",");
        router.replace({ query: { selectedDepartment: labelsQuery } });
    };
    const getTagSuggest = async () => {
        try {
            const response = await axios.get(
                `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/tags?w=${tagInput}`
            );
            setTagSuggest(response.data);
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        getTagSuggest();
    }, [debouncedKeyword]);
    return (
        <Popover
            open={isOpen}
            anchorEl={anchorEl}
            onClose={closePopover}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
        >
            <Stack spacing={2} padding={3}>
                <Stack
                    direction="row"
                    spacing={0.5}
                    sx={{
                        border: "1px solid #dddddd",
                        borderRadius: "100px",
                        width: "400px",
                    }}
                >
                    <SelectedTags
                        searchTag={searchTag}
                        setSearchTag={setSearchTag}
                    />
                    <Grid item padding={0} flexGrow={1}>
                        <TextField
                            onChange={(e: ChangeEvent<HTMLInputElement>) => {
                                setTagInput(e.target.value);
                            }}
                            sx={{
                                padding: 0,
                                width: "100%",
                                "& fieldset": { border: "none" },
                            }}
                            autoComplete="off"
                            onKeyDown={handleKeyDown}
                        />
                    </Grid>
                </Stack>
                <Stack direction="row" spacing={5}>
                    <SuggestTags
                        selectedTag={selectedTag}
                        tagSuggest={tagSuggest}
                        searchTag={searchTag}
                        setSearchTag={setSearchTag}
                    />
                    <CategorySelect
                        handleCheckboxChange={handleCheckboxChange}
                    />
                </Stack>
            </Stack>
        </Popover>
    );
};

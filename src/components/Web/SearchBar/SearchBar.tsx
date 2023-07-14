import { useDebounceSearch } from "@/hooks/web";
import FilterListIcon from "@mui/icons-material/FilterList";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Divider, Stack, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SearchPopover } from "./SearchPopover";

export const SearchBar = () => {
    const router = useRouter();
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const [searchWord, setSearchWord] = useState("");
    const openPopover = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const closePopover = () => {
        setAnchorEl(null);
    };
    const { debouncedKeyword } = useDebounceSearch({
        keyword: searchWord,
        timeOutMillSec: 500,
    });
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchWord(event.target.value);
    };
    useEffect(() => {
        router.replace({
            query: { ...router.query, searchWord: debouncedKeyword },
        });
    }, [debouncedKeyword]);
    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{ border: "1.2px solid #dddddd" }}
        >
            <Stack
                direction="row"
                component="div"
                sx={{
                    borderRadius: "5px",
                    flexGrow: 1,
                }}
            >
                <Box component="div" sx={{ alignSelf: "center", px: 1 }}>
                    <SearchIcon sx={{ color: "#FFD233", fontSize: "40px" }} />
                </Box>
                <Divider orientation="vertical" />
                <TextField
                    onChange={handleChange}
                    sx={{
                        flexGrow: 1,
                        caretColor: "#64F161",
                        "& fieldset": { border: "none" },
                    }}
                    defaultValue={router.query.searchWord ?? ""}
                />
                <Divider orientation="vertical" />
            </Stack>
            <Box component="div" alignSelf="center">
                <Button
                    startIcon={<FilterListIcon />}
                    onClick={openPopover}
                    sx={{
                        color: "white",
                        backgroundColor: "#77C700",
                        ":hover": {
                            backgroundColor: "#87D710",
                        },
                        paddingY: 0.5,
                        paddingX: 1.5,
                    }}
                >
                    検索フィルター
                </Button>
            </Box>

            <SearchPopover
                isOpen={anchorEl != null}
                closePopover={closePopover}
                anchorEl={anchorEl}
            />
        </Stack>
    );
};

import { SelectedTagsProps } from "@/types/web";
import { Box, Button, Divider, ListItem, Stack } from "@mui/material";
import { useEffect, useRef } from "react";

export const SuggestTags = ({
    selectedTag,
    tagSuggest,
    searchTag,
    setSearchTag,
}: SelectedTagsProps) => {
    const tagContainerRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        const scrollAmount = -30 + selectedTag * 25;
        tagContainerRef?.current?.scrollTo({
            top: scrollAmount,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        handleScroll();
    }, [selectedTag]);
    return (
        <Box
            component="div"
            ref={tagContainerRef}
            sx={{ maxHeight: "300px", overflow: "auto" }}
        >
            {tagSuggest
                .filter((tag) => !searchTag.includes(tag))
                ?.map(({ id, name, color }, index) => (
                    <ListItem sx={{ padding: 0 }} key={id}>
                        <Stack sx={{ width: "100%" }}>
                            <Button
                                sx={{
                                    border: "none",
                                    backgroundColor:
                                        index == selectedTag
                                            ? "#FFA50033"
                                            : "transparent",
                                    padding: 0,
                                    color:
                                        index == selectedTag
                                            ? "#FFA500"
                                            : "#888888",
                                    ":hover": {
                                        backgroundColor:
                                            index == selectedTag
                                                ? "#FFA50033"
                                                : "transparent",
                                    },
                                }}
                                onClick={() =>
                                    setSearchTag([
                                        ...searchTag,
                                        { id, name, color },
                                    ])
                                }
                            >
                                {name}
                            </Button>
                            <Divider />
                        </Stack>
                    </ListItem>
                ))}
        </Box>
    );
};

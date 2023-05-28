import { SuggestTagsProps } from "@/types/web";
import { Box, Button, Stack } from "@mui/material";

export const SelectedTags = ({ searchTag, setSearchTag }: SuggestTagsProps) => {
    const removeItemById = (id: string) => {
        setSearchTag(searchTag.filter((item) => item.id !== id));
    };
    return (
        <Stack
            direction="row"
            spacing={1}
            sx={{
                paddingX: 1.5,
                alignItems: "center",
                flexShrink: 0,
                maxWidth: "250px",
                whiteSpace: "nowrap",
                overflowX: "scroll",
            }}
        >
            {searchTag?.map(({ id, name, color }) => (
                <Box component="div" key={id}>
                    <Button
                        sx={{
                            borderColor: color,
                            border: "1px solid",
                            padding: 0,
                        }}
                        color="secondary"
                        onClick={() => removeItemById(id)}
                    >
                        {name}
                    </Button>
                </Box>
            ))}
        </Stack>
    );
};

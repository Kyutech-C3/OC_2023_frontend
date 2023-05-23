import { GetTag } from "@/types/common";
import { Games } from "@mui/icons-material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import FunctionsIcon from "@mui/icons-material/Functions";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ShapeLineIcon from "@mui/icons-material/ShapeLine";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Box, Stack, Typography } from "@mui/material";

import ImageIcon from "./ImageIcon";

const tag2icon = {
    イラスト: <ColorLensIcon />,
    C3公式グッズデザイン案: <ImageIcon src="/images/icons/C3logo.png" />,
    GWクリエイタソン: "",
    cg: <SettingsSuggestIcon />,
    Unity: <ImageIcon src="/image/icon/unity.png" />,
    モデル_3D: <ImageIcon src="/image/icon/3d_model.png" />,
    モデル_2D: <ShapeLineIcon />,
    ToyBox: <ImageIcon src="/image/icon/ToyBoxIcon.png" />,
    hack: <TerminalIcon />,
    game: <Games />,
    関数アート: <FunctionsIcon />,
    blender: <ImageIcon src="/image/icon/blender.png" />,
};

export function WorkTag({ name }: GetTag) {
    return (
        <>
            <Box sx={{ width: "fit-content" }}>
                <Stack
                    direction="row"
                    sx={{
                        border: "1px solid black",
                        borderRadius: "999px",
                        display: "flex",
                        padding: "0px 12px",
                    }}
                    spacing={1}
                >
                    {tag2icon[name]}
                    <Typography>{name}</Typography>
                </Stack>
            </Box>
        </>
    );
}

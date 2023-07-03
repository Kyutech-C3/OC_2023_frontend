import { GetTag } from "@/types/common";
import { Games } from "@mui/icons-material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import FunctionsIcon from "@mui/icons-material/Functions";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ShapeLineIcon from "@mui/icons-material/ShapeLine";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Box, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

import CategoryIcon from '@mui/icons-material/Category';
import LocalOfferOutlinedIcon from "@mui/icons-material/LocalOfferOutlined";
import ImageIcon from "./ImageIcon";

const defaultIcon: React.ReactNode = <LocalOfferOutlinedIcon />;
const tag2icon: Record<string, React.ReactNode | undefined> = {
    イラスト: <ColorLensIcon />,
    C3公式グッズデザイン案: <ImageIcon src="/image/icon/C3logo.jpg" />,
    GWクリエイタソン: <CategoryIcon />,
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
    const iconComponent = tag2icon[name] || defaultIcon;
    const isDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    return (
        <>
            <Box component="div" sx={{ width: "fit-content" }}>
                <Stack
                    direction="row"
                    sx={{
                        backgroundColor: isDarkMode ? "#ffffff22" : "#00000022",
                        border: `2px solid ${isDarkMode ? "#00000055" : "#ffffffaa"}`,
                        borderRadius: "999px",
                        display: "flex",
                        padding: "0px 12px",
                        alignItems: "center"
                    }}
                    spacing={1}
                >
                    {iconComponent}
                    <Typography>{name}</Typography>
                </Stack>
            </Box>
        </>
    );
}

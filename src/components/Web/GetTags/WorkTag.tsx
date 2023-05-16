import { GetTag } from "@/types/common";
import { Games } from "@mui/icons-material";
import ColorLensIcon from "@mui/icons-material/ColorLens";
import FunctionsIcon from "@mui/icons-material/Functions";
import SettingsSuggestIcon from "@mui/icons-material/SettingsSuggest";
import ShapeLineIcon from "@mui/icons-material/ShapeLine";
import TerminalIcon from "@mui/icons-material/Terminal";
import { Box, Stack, Typography } from "@mui/material";

import Image from "next/legacy/image";

export function WorkTag({ name }: GetTag) {
    const tag2icon = {
        イラスト: <ColorLensIcon />,
        C3公式グッズデザイン案: (
            <Image
                src="/images/icons/C3logo.png"
                alt="/images/icons/C3logo.png"
            />
        ),
        GWクリエイタソン: "",
        cg: <SettingsSuggestIcon />,
        Unity: "/image/icon/unity.png",
        モデル_3D: "/image/icon/3d_model.png",
        モデル_2D: <ShapeLineIcon />,
        ToyBox: "/image/icon/ToyBoxIcon.png",
        hack: <TerminalIcon />,
        game: <Games />,
        関数アート: <FunctionsIcon />,
        blender: "/image/icon/blender.png",
    };

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
                    {typeof tag2icon[name] === "string" ? (
                        <Image
                            src={tag2icon[name] as string}
                            alt={tag2icon[name] as string}
                            width={20}
                            height={20}
                            quality={100}
                            objectFit="contain"
                            objectPosition="center"
                        />
                    ) : (
                        <span>{tag2icon[name]}</span>
                    )}
                    <Typography>{name}</Typography>
                </Stack>
            </Box>
        </>
    );
}

import { Twitter, Widgets } from "@mui/icons-material";
import GamepadIcon from "@mui/icons-material/Gamepad";
import MapIcon from "@mui/icons-material/Map";
import WebIcon from "@mui/icons-material/Web";
import MenuIcon from "@mui/icons-material/Menu";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import PaletteIcon from "@mui/icons-material/Palette";
import PieChartIcon from "@mui/icons-material/PieChart";
import PublicIcon from "@mui/icons-material/Public";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import WorkspacesIcon from "@mui/icons-material/Workspaces";
import YouTube from "@mui/icons-material/YouTube";
import { Box, Button, Drawer, IconButton, Stack } from "@mui/material";
import { useState } from "react";
import { useRouter } from "next/router";
export const NavigationBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    return (
        <Box component="div">
            <IconButton onClick={() => setIsOpen(true)} sx={{ py: 2 }}>
                <MenuIcon sx={{ color: "text.primary", fontSize: "2vw" }} />
            </IconButton>
            <Drawer open={isOpen} onClose={() => setIsOpen(false)}>
                <Stack
                    sx={{
                        width: "300px",
                        display: "flex",
                        alignItems: "start",
                        backgroundColor: "gray",
                        color: "white",
                        height: "100%",
                    }}
                >
                    {router.pathname == "/map" ? (
                        <Button
                            href="/web"
                            sx={{ color: "white" }}
                            startIcon={
                                <>
                                    <NavigateBeforeIcon
                                        sx={{ rotate: "-45deg" }}
                                    />
                                    <WebIcon />
                                </>
                            }
                        >
                            ウェブ
                        </Button>
                    ) : (
                        <Button
                            href="/map"
                            sx={{ color: "white" }}
                            startIcon={
                                <>
                                    <NavigateBeforeIcon
                                        sx={{ rotate: "-45deg" }}
                                    />
                                    <MapIcon />
                                </>
                            }
                        >
                            マップ
                        </Button>
                    )}
                    <Stack>
                        <Button
                            sx={{ color: "white", alignSelf: "start" }}
                            href="/web"
                            startIcon={
                                <>
                                    <NavigateBeforeIcon
                                        sx={{ rotate: "-45deg" }}
                                    />
                                    <WorkspacesIcon />
                                </>
                            }
                        >
                            トップページ
                        </Button>
                        <Stack sx={{ pl: 4 }}>
                            <Button
                                sx={{ color: "white" }}
                                href="/web/artifact"
                                startIcon={
                                    <>
                                        <NavigateBeforeIcon
                                            sx={{ rotate: "-45deg" }}
                                        />
                                        <PieChartIcon />
                                    </>
                                }
                            >
                                制作物一覧
                            </Button>
                            <Stack sx={{ pl: 4 }}>
                                <Button
                                    sx={{ color: "white" }}
                                    href="/web/artifact/hack"
                                    startIcon={
                                        <>
                                            <NavigateBeforeIcon
                                                sx={{ rotate: "-45deg" }}
                                            />
                                            <SubtitlesIcon />
                                        </>
                                    }
                                >
                                    HACK
                                </Button>
                                <Button
                                    sx={{ color: "white" }}
                                    href="/web/artifact/game"
                                    startIcon={
                                        <>
                                            <NavigateBeforeIcon
                                                sx={{ rotate: "-45deg" }}
                                            />
                                            <GamepadIcon />
                                        </>
                                    }
                                >
                                    GAME
                                </Button>
                                <Button
                                    sx={{ color: "white" }}
                                    href="/web/artifact/2dcg"
                                    startIcon={
                                        <>
                                            <NavigateBeforeIcon
                                                sx={{ rotate: "-45deg" }}
                                            />
                                            <PaletteIcon />
                                        </>
                                    }
                                >
                                    2DCG
                                </Button>
                                <Button
                                    sx={{ color: "white" }}
                                    href="/web/artifact/3dcg"
                                    startIcon={
                                        <>
                                            <NavigateBeforeIcon
                                                sx={{ rotate: "-45deg" }}
                                            />
                                            <SensorOccupiedIcon />
                                        </>
                                    }
                                >
                                    3DCG
                                </Button>
                                <Button
                                    sx={{ color: "white" }}
                                    href="/web/artifact/music"
                                    startIcon={
                                        <>
                                            <NavigateBeforeIcon
                                                sx={{ rotate: "-45deg" }}
                                            />
                                            <MusicNoteIcon />
                                        </>
                                    }
                                >
                                    MUSIC
                                </Button>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack>
                        <Button
                            sx={{ color: "white" }}
                            href="https://compositecomputer.club"
                            startIcon={
                                <>
                                    <NavigateBeforeIcon
                                        sx={{ rotate: "-45deg" }}
                                    />
                                    <PublicIcon />
                                </>
                            }
                        >
                            Official
                        </Button>
                        <Button
                            sx={{ color: "white" }}
                            href="https://twitter.com/c3_kyutech"
                            startIcon={
                                <>
                                    <NavigateBeforeIcon
                                        sx={{ rotate: "-45deg" }}
                                    />
                                    <Twitter />
                                </>
                            }
                        >
                            Twitter
                        </Button>
                        <Button
                            sx={{ color: "white" }}
                            href="https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw"
                            startIcon={
                                <>
                                    <NavigateBeforeIcon
                                        sx={{ rotate: "-45deg" }}
                                    />
                                    <YouTube />
                                </>
                            }
                        >
                            Youtube
                        </Button>
                        <Button
                            sx={{ color: "white" }}
                            href="https://toybox.compositecomputer.club/"
                            startIcon={
                                <>
                                    <NavigateBeforeIcon
                                        sx={{ rotate: "-45deg" }}
                                    />
                                    <Widgets />
                                </>
                            }
                        >
                            Toybox
                        </Button>
                    </Stack>
                </Stack>
            </Drawer>
        </Box>
    );
};

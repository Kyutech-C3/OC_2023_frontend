import Date from "@/components/Common/Date/Date";
import { Assets } from "@/components/Web/Asset/Assets/Assets";
import { MarkdownViewer } from "@/components/Web/MarkdownViewer/MarkdownViewer";
import { TweetButton } from "@/components/Common/TweetButton/TweetButton";
import { UserCard } from "@/components/Web/User/UserCard";
import { useTopLoading } from "@/hooks/common";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Button, Slide, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
const ArtifactDetail = () => {
    const router = useRouter();
    const { artifactId, category } = router.query;
    const [isOpen, setIsOpen] = useState(true);
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/works/${artifactId}`,
        fetcher
    );
    useTopLoading({ isLoading: isLoading, message: "読み込み中" });
    return (
        <Box
            component="div"
            sx={{
                width: "100vw",
                height: "100vh",
                backgroundImage: `url(${data?.thumbnail?.url})`,
            }}
        >
            <Button
                sx={{
                    width: "60vw",
                    height: "100vh",
                    zIndex: 100,
                    backgroundColor: "transparent",
                    position: "absolute",
                    left: 0,
                    clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 70% 100%)",
                }}
                onClick={() => setIsOpen(!isOpen)}
            />
            <Assets
                isOpen={isOpen}
                closeModal={() => setIsOpen(true)}
                assets={data?.assets}
            />
            <Slide in={isOpen} direction="left">
                <Box
                    component="div"
                    sx={{
                        paddingLeft: "8vw",
                        width: "60vw",
                        height: "100vh",
                        position: "absolute",
                        right: 0,
                        opacity: 0.9,
                        clipPath:
                            "polygon(0% 100%, 30% 0%, 100% 0%, 100% 100%)",
                    }}
                    bgcolor={`${category}.dark`}
                >
                    <Stack>
                        <Stack
                            component="div"
                            alignSelf="end"
                            paddingX={10}
                            paddingTop={3}
                            direction="row"
                            spacing={3}
                        >
                            <Button
                                variant="contained"
                                onClick={() => router.back()}
                                startIcon={<KeyboardReturnIcon />}
                                sx={{ borderRadius: "100px" }}
                                color="secondary"
                            >
                                戻る
                            </Button>
                            <TweetButton
                                size="small"
                                text={`${process.env.NEXT_PUBLIC_FRONT_END_URL}${router.asPath}`}
                            />
                        </Stack>
                        <Stack
                            spacing={10}
                            mt={10}
                            color={`${category}.contrastText`}
                        >
                            <Stack
                                direction="row"
                                sx={{ alignItems: "center" }}
                            >
                                <Typography variant="h5" pl={30}>
                                    製作者:
                                </Typography>
                                <UserCard {...data?.user} size="medium" />
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{ alignItems: "center" }}
                            >
                                <Typography variant="h5" pl={26}>
                                    投稿日:
                                </Typography>
                                <Date dateString={data?.created_at ?? ""} />
                            </Stack>
                            <Typography
                                variant="h5"
                                pl={22}
                                sx={{ alignItems: "center" }}
                            >
                                分野:{category}
                            </Typography>
                            <Box
                                component="div"
                                sx={{ overflow: "auto", height: "300px" }}
                                pl={18}
                            >
                                <MarkdownViewer rawText={data?.description} />
                            </Box>
                        </Stack>
                    </Stack>
                </Box>
            </Slide>
        </Box>
    );
};

export default ArtifactDetail;

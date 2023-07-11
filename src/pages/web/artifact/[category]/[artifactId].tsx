import Date from "@/components/Common/Date/Date";
import { TweetButton } from "@/components/Common/TweetButton/TweetButton";
import { Assets, AssetsModal } from "@/components/Web/Asset/Assets/Assets";
import { Favorite } from "@/components/Web/Favorite/Favorite";
import { MarkdownViewer } from "@/components/Web/MarkdownViewer/MarkdownViewer";
import { UserCard } from "@/components/Web/User/UserCard";
import { useTopLoading } from "@/hooks/common";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import { Box, Button, Slide, Stack, Typography, useMediaQuery } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
const ArtifactDetail = () => {
    const router = useRouter();
    const isSmall = useMediaQuery("(min-width:800px)");

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
                height: isSmall ? "100vh" : "calc(120vh + 500px)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${data?.thumbnail?.url})`,
            }}
        >
            {isSmall && <Button
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
            />}
            {isSmall && <AssetsModal
                isOpen={isOpen && isSmall}
                closeModal={() => setIsOpen(true)}
                assets={data?.assets}
            />}

            <Slide in={isOpen} direction="left">
                <Box
                    component="div"
                    sx={{
                        p: "3vw",
                        width: isSmall ? "60vw" : "100vw",
                        height: isSmall ? "100vh" : "calc(120vh + 500px)",
                        position: "absolute",
                        right: 0,
                        opacity: isSmall ? 0.9 : 1,
                        clipPath:
                            isSmall ? "polygon(0% 100%, 30% 0%, 100% 0%, 100% 100%)" : "",
                    }}
                    bgcolor={`${category}.dark`}
                >
                    <Stack >
                        <Stack
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
                                sx={{ borderRadius: "100px", fontSize: isSmall ? "12px" : "1.5vw", textWrap: "nowrap" }}
                                color="secondary"
                            >
                                戻る
                            </Button>
                            <TweetButton
                                size="small"
                                text={`${process.env.NEXT_PUBLIC_FRONT_END_URL}${router.asPath}`}
                            />
                            {/* TODO:バックエンドが変更されたらlikesを渡す */}
                            <Favorite workId={typeof (artifactId!) == "string" ? artifactId ?? "" : (artifactId ?? [""])[0]} favoriteUsersProps={[""]} />
                        </Stack>
                        {!isSmall && <Box component="div" sx={{ height: "500px", overflow: "auto", opacity: 1, backgroundColor: "white", textAlign: "-webkit-center", borderRadius: "20px" }}>
                            <Assets assets={data?.assets} />
                        </Box>}
                        <Stack
                            spacing={10}
                            mt={10}
                            sx={{ height: "80vh", backgroundColor: isSmall ? "" : `${category}.light`, borderRadius: isSmall ? "" : "20px", p: isSmall ? "" : 3 }}
                            color={`${category}.contrastText`}
                        >
                            <Stack
                                direction="row"
                                sx={{ alignItems: "center" }}
                            >
                                <Typography variant="h5" pl={isSmall ? 30 : 0}>
                                    製作者:
                                </Typography>
                                <UserCard {...data?.user} size="medium" />
                            </Stack>
                            <Stack
                                direction="row"
                                sx={{ alignItems: "center" }}
                            >
                                <Typography variant="h5" pl={isSmall ? 26 : 0}>
                                    投稿日:
                                </Typography>
                                <Date dateString={data?.created_at ?? ""} size="l" />
                            </Stack>
                            <Typography
                                variant="h5"
                                pl={isSmall ? 22 : 0}
                                sx={{ alignItems: "center" }}
                            >
                                分野:{category}
                            </Typography>
                            <Box
                                component="div"
                                sx={{
                                    overflow: "auto",
                                }}
                                pl={isSmall ? 18 : 0}
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

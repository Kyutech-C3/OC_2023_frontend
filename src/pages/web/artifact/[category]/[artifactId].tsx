import Date from "@/components/Common/Date/Date";
import { TweetButton } from "@/components/Common/TweetButton/TweetButton";
import { Assets, AssetsModal } from "@/components/Web/Asset/Assets/Assets";
import { Comments } from "@/components/Web/Comments/Comments";
import { CreateComment } from "@/components/Web/CreateComment/CreateComment";
import { Favorite } from "@/components/Web/Favorite/Favorite";
import { MarkdownViewer } from "@/components/Web/MarkdownViewer/MarkdownViewer";
import { UserCard } from "@/components/Web/User/UserCard";
import { useTopLoading } from "@/hooks/common";
import KeyboardReturnIcon from "@mui/icons-material/KeyboardReturn";
import {
    Box,
    Button,
    Grid,
    Slide,
    Stack,
    Typography,
    useMediaQuery,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWR from "swr";
const ArtifactDetail = () => {
    const router = useRouter();
    const isSmall = useMediaQuery("(min-width:800px)");

    const { category } = router.query;
    const artifactId = router.query.artifactId?.toString() || "";
    const [isOpen, setIsOpen] = useState(true);
    const [commentIsOpen, setCommentIsOpen] = useState(false);
    const fetcher = (url: string) => fetch(url).then((res) => res.json());
    const { data, isLoading } = useSWR(
        `${process.env.NEXT_PUBLIC_BACKEND_API}/api/v1/works/${artifactId}`,
        fetcher
    );
    useTopLoading({ isLoading: isLoading, message: "読み込み中" });
    if (isLoading) {
        return <></>;
    }
    return (
        <Box
            component="div"
            sx={{
                width: "100%",
                height: isSmall ? "100vh" : "",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundImage: `url(${data?.thumbnail?.url})`,
                overflow: "none",
            }}
        >
            <Slide in={commentIsOpen} direction="right">
                <Stack
                    spacing={1}
                    sx={{
                        pr: "3vw",
                        width: "60vw",
                        position: "absolute",
                        height: "100%",
                        right: 0,
                        zIndex: 1000,
                        clipPath: isSmall
                            ? "polygon(0% 100%, 30% 0%, 100% 0%, 100% 100%)"
                            : "",
                        pl: "20vw",
                    }}
                    bgcolor={`${category}.dark`}
                >
                    <Box component="div" sx={{ mt: 10, alignSelf: "end" }}>
                        <Button
                            onClick={() => setCommentIsOpen(false)}
                            variant="contained"
                            sx={{ borderRadius: "999px" }}
                        >
                            閉じる
                        </Button>
                    </Box>

                    <CreateComment
                        workId={
                            typeof artifactId !== "string"
                                ? artifactId![0]
                                : artifactId!
                        }
                    />
                    <Comments comments={data?.comments} />
                </Stack>
            </Slide>
            {isSmall && (
                <Button
                    sx={{
                        width: "60vw",
                        height: "100%",
                        zIndex: 100,
                        backgroundColor: "transparent",
                        position: "absolute",
                        left: 0,
                        clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 70% 100%)",
                    }}
                    onClick={() => setIsOpen(!isOpen)}
                />
            )}
            {isSmall && (
                <AssetsModal
                    isOpen={isOpen && isSmall}
                    closeModal={() => setIsOpen(true)}
                    assets={data?.assets}
                />
            )}

            <Slide in={isOpen && !commentIsOpen} direction="right">
                <Box
                    component="div"
                    sx={{
                        p: "3vw",
                        width: isSmall ? "60vw" : "100vw",
                        position: "absolute",
                        right: 0,
                        height: isSmall ? "100%" : "100",
                        opacity: isSmall ? 0.9 : 1,
                        clipPath: isSmall
                            ? "polygon(0% 100%, 30% 0%, 100% 0%, 100% 100%)"
                            : "",
                    }}
                    bgcolor={`${category}.dark`}
                >
                    <Stack spacing={2}>
                        <Grid
                            container
                            alignSelf="end"
                            paddingTop={3}
                            direction="row"
                            justifyContent="flex-end"
                            spacing={1}
                            sx={{ width: isSmall ? "40vw" : "60vw" }}
                            alignItems="center"
                        >
                            <Grid item>
                                <Button
                                    variant="contained"
                                    onClick={() => router.back()}
                                    startIcon={<KeyboardReturnIcon />}
                                    sx={{
                                        borderRadius: "100px",
                                        fontSize: isSmall ? "12px" : "1.5vw",
                                        textWrap: "nowrap",
                                    }}
                                    color="secondary"
                                >
                                    戻る
                                </Button>
                            </Grid>
                            <Grid item>
                                <TweetButton
                                    size="small"
                                    text={`${process.env.NEXT_PUBLIC_FRONT_END_URL}${router.asPath}`}
                                />
                            </Grid>

                            {isSmall && (
                                <Grid item>
                                    <Button
                                        onClick={() => setCommentIsOpen(true)}
                                        variant="contained"
                                        sx={{ borderRadius: "999px" }}
                                    >
                                        コメントを見る
                                    </Button>
                                </Grid>
                            )}
                            <Grid item>
                                <Favorite
                                    workId={
                                        typeof artifactId! == "string"
                                            ? artifactId ?? ""
                                            : (artifactId ?? [""])[0]
                                    }
                                    favoriteUsersProps={data?.likes}
                                />
                            </Grid>
                        </Grid>
                        {!isSmall && (
                            <Box
                                component="div"
                                sx={{
                                    height: "500px",
                                    overflow: "auto",
                                    opacity: 1,
                                    backgroundColor: "white",
                                    textAlign: "-webkit-center",
                                    borderRadius: "20px",
                                }}
                            >
                                <Assets assets={data?.assets} />
                            </Box>
                        )}
                        <Stack
                            spacing={10}
                            mt={10}
                            sx={{
                                height: "80vh",
                                backgroundColor: isSmall
                                    ? ""
                                    : `${category}.light`,
                                borderRadius: isSmall ? "" : "20px",
                                p: isSmall ? "" : 3,
                            }}
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
                                <Date
                                    dateString={data?.created_at ?? ""}
                                    size="l"
                                />
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
                        {!isSmall && (
                            <Stack spacing={1}>
                                <CreateComment
                                    workId={
                                        typeof artifactId !== "string"
                                            ? artifactId![0]
                                            : artifactId!
                                    }
                                />
                                <Comments comments={data?.comments} />
                            </Stack>
                        )}
                    </Stack>
                </Box>
            </Slide>
        </Box>
    );
};

export default ArtifactDetail;

import { Asset } from "@/types/common";
import { AssetsProps } from "@/types/web";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, List, ListItem, Modal } from "@mui/material";
import Image from "next/legacy/image";
import { Downloader } from "../Downloader/Downloader";
import { ModelViewer } from "../ModelViewer/ModelViewer";
import { Player } from "../Player/Player";
export const Assets = ({ isOpen, closeModal, assets }: AssetsProps) => {
    return (
        <Modal
            open={!isOpen}
            onClose={() => closeModal()}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Box sx={{ position: "relative" }} component="div">
                <IconButton
                    sx={{
                        position: "absolute",
                        right: -30,
                        color: "white",
                        ":hover": {
                            backgroundColor: "yellow",
                            color: "black",
                        },
                    }}
                    onClick={() => closeModal()}
                >
                    <CloseIcon />
                </IconButton>
                <List sx={{ overflow: "auto", maxHeight: "90vh" }}>
                    {assets?.map((asset: Asset, index: number) => (
                        <ListItem
                            key={index}
                            sx={{
                                justifyContent: "center",
                                minWidth: "600px",
                                minHeight: "600px",
                            }}
                        >
                            {asset.asset_type == "video" ||
                            asset.asset_type == "music" ? (
                                <Box component="div">
                                    <Player {...asset} />
                                </Box>
                            ) : asset.asset_type == "image" ? (
                                <Box
                                    component="div"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <Image
                                        quality={100}
                                        layout="fill"
                                        objectFit="contain"
                                        objectPosition="center"
                                        alt={asset?.url}
                                        src={asset?.url}
                                    />
                                </Box>
                            ) : asset.asset_type == "zip" ? (
                                <Box component="div">
                                    <Downloader {...asset} />
                                </Box>
                            ) : asset.asset_type == "model" ? (
                                <Box
                                    component="div"
                                    sx={{
                                        width: "100%",
                                        height: "100%",
                                    }}
                                >
                                    <ModelViewer {...asset} />
                                </Box>
                            ) : (
                                <></>
                            )}
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Modal>
    );
};

import { Asset } from "@/types/common";
import { AssetsModalProps } from "@/types/web";
import CloseIcon from "@mui/icons-material/Close";
import { Box, IconButton, List, ListItem, Modal } from "@mui/material";
import Image from "next/legacy/image";
import { Downloader } from "../Downloader/Downloader";
import { ModelViewer } from "../ModelViewer/ModelViewer";
import { Player } from "../Player/Player";
export const Assets = ({ assets }: Pick<AssetsModalProps, "assets">) => {
    return (

        <List sx={{ overflow: "auto", width: "90%", height: "90vh" }}>
            {assets?.map((asset: Asset, index: number) => (
                <ListItem
                    key={index}
                    sx={{
                        justifyContent: "center",
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
                                minHeight: "50vh"
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
    );
};

export const AssetsModal = ({ isOpen, closeModal, assets }: AssetsModalProps) => {
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
            <Box sx={{ position: "relative", width: "80vw" }} component="div">
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

                <Assets assets={assets} />
            </Box>
        </Modal>)
}
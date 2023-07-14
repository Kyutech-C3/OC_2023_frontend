import { useEffect, useState } from "react";
import { Socket } from "@/components/Map/Socket/Socket";
import { UnityData } from "@/components/Map/UnityData/UnityData";
import { Box } from "@mui/material";
import { Header } from "@/components/Common/Header/Header";

const Map = () => {
    return (
        <>
            <Box
                component="div"
                sx={{
                    position: "relative",
                    height: "100vh",
                    width: "100vw",
                    p: 0,
                    m: 0,
                    overflow: "hidden",
                }}
            >
                <Header />
                <UnityData />
            </Box>
            <Socket />
        </>
    );
};

export default Map;

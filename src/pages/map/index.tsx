import { useEffect, useState } from "react";
import { Socket } from "@/components/Map/Socket/Socket";
import { UnityData } from "@/components/Map/UnityData/UnityData";
import { Box } from "@mui/material";

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
                }}
            >
                <UnityData />
            </Box>
            <Socket />
        </>
    );
};

export default Map;

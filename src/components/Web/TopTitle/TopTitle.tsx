import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Box, Stack, Typography } from "@mui/material";

export const TopTitle = () => {
    return (
        <Stack spacing={3} sx={{ color: "text.primary", opacity: "0.7" }}>
            <Box component="div">
                <Typography fontWeight="bold" sx={{ fontSize: "5vmax" }}>
                    C3 Open Campus 2023
                </Typography>
            </Box>
            <Stack sx={{ pl: 3 }} spacing={1} direction="row">
                <Typography fontWeight="bold" sx={{ fontSize: "5vmax" }}>
                    July
                </Typography>
                <Stack direction="row">
                    <Typography
                        letterSpacing={-3}
                        fontWeight="bold"
                        sx={{ pr: 0.5, fontSize: "5vmax" }}
                    >
                        15
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1.6vmax",
                            textOrientation: "mixed",
                            writingMode: "vertical-lr",
                            textAlign: "center",
                        }}
                    >
                        Sat
                    </Typography>
                    <Stack direction="row" spacing={-1.6} alignSelf="center">
                        <ArrowForwardIosIcon
                            fontSize="large"
                            sx={{ opacity: "0.5" }}
                        />
                        <ArrowForwardIosIcon fontSize="large" />
                    </Stack>
                    <Typography
                        letterSpacing={-3}
                        fontWeight="bold"
                        sx={{ pr: 0.5, fontSize: "5vmax" }}
                    >
                        16
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "1.6vmax",
                            textOrientation: "mixed",
                            writingMode: "vertical-lr",
                            textAlign: "center",
                        }}
                    >
                        Sun
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    );
};

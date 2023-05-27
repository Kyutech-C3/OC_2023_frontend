import { Box, Stack, Typography } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export const TopTitle = () => {
    return (
        <Stack spacing={3}>
            <Box component="div">
                <Typography fontWeight="bold" variant="h3">
                    C3 Open Campus 2023
                </Typography>
            </Box>
            <Stack sx={{ pl: 3 }} spacing={1} direction="row">
                <Typography fontWeight="bold" variant="h3">
                    July
                </Typography>
                <Stack direction="row">
                    <Typography
                        letterSpacing={-3}
                        fontWeight="bold"
                        variant="h3"
                        sx={{ pr: 0.5 }}
                    >
                        15
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
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
                        variant="h3"
                        sx={{ pr: 0.5 }}
                    >
                        16
                    </Typography>
                    <Typography
                        variant="h5"
                        sx={{
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

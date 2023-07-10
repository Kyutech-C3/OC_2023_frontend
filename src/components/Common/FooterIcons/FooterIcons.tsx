import { FooterButtonType } from "@/types/web";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import TwitterIcon from "@mui/icons-material/Twitter";
import WidgetsIcon from "@mui/icons-material/Widgets";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Box, Button, Stack, Typography, useMediaQuery } from "@mui/material";

const FooterIcon = ({ name, iconElement, linkPath }: FooterButtonType) => {
    const isSmall = useMediaQuery("(min-width:600px)");

    return (
        <Button href={linkPath}>
            <Stack spacing={0.3} sx={{ alignItems: "center" }}>
                {iconElement}
                {isSmall && <Typography
                    sx={{
                        fontSize: "1vw",
                        fontWeight: "bold",
                        color: "text.primary",
                    }}
                >
                    {name}
                </Typography>}
            </Stack>
        </Button>
    );
};

export const FooterIcons = () => {
    const footerButtons: FooterButtonType[] = [
        {
            name: "Twitter",
            iconElement: (
                <TwitterIcon sx={{ fontSize: "5vmax", color: "#1da1f2" }} />
            ),
            linkPath: "https://twitter.com/c3_kyutech?s=20",
        },
        {
            name: "YouTube",
            iconElement: (
                <YouTubeIcon sx={{ fontSize: "5vmax", color: "#c4302b" }} />
            ),
            linkPath:
                "https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw",
        },
        {
            name: "ToyBox",
            iconElement: (
                <WidgetsIcon sx={{ fontSize: "5vmax", color: "text.primary" }} />
            ),
            linkPath: "https://toybox.compositecomputer.club/",
        },
        {
            name: "C3 Official Site",
            iconElement: (
                <PublicIcon sx={{ fontSize: "5vmax", color: "text.primary" }} />
            ),
            linkPath: "https://compositecomputer.club/",
        },
        {
            name: "情報工学部",
            iconElement: (
                <SchoolIcon sx={{ fontSize: "5vmax", color: "text.primary" }} />
            ),
            linkPath: "https://www.iizuka.kyutech.ac.jp/",
        },
    ];
    return (
        <Stack direction="row" spacing={1} sx={{ justifyContent: "center" }}>
            {footerButtons.map((footerButton) => (
                <Box component="div" key={footerButton.linkPath}>
                    <FooterIcon {...footerButton} />
                </Box>
            ))}
        </Stack>
    );
};

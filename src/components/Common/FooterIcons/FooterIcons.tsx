import { FooterButtonType } from "@/types/web";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import TwitterIcon from "@mui/icons-material/Twitter";
import WidgetsIcon from "@mui/icons-material/Widgets";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Button, Grid, Stack, Typography } from "@mui/material";

const FooterIcon = ({ name, iconElement, linkPath }: FooterButtonType) => {
    return (
        <Button href={linkPath} sx={{ width: 110 }}>
            <Stack spacing={0.5} sx={{ alignItems: "center" }}>
                {iconElement}
                <Typography
                    sx={{
                        fontSize: 70 / (name.length > 10 ? name.length : 20),
                        fontWeight: "bold",
                        color: "text.primary",
                    }}
                    variant="caption"
                >
                    {name}
                </Typography>
            </Stack>
        </Button>
    );
};

export const FooterIcons = () => {
    const footerButtons: FooterButtonType[] = [
        {
            name: "Twitter",
            iconElement: (
                <TwitterIcon sx={{ fontSize: 50, color: "#1da1f2" }} />
            ),
            linkPath: "https://twitter.com/c3_kyutech?s=20",
        },
        {
            name: "YouTube",
            iconElement: (
                <YouTubeIcon sx={{ fontSize: 50, color: "#c4302b" }} />
            ),
            linkPath:
                "https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw",
        },
        {
            name: "ToyBox",
            iconElement: (
                <WidgetsIcon sx={{ fontSize: 50, color: "text.primary" }} />
            ),
            linkPath: "https://toybox.compositecomputer.club/",
        },
        {
            name: "C3 Official Site",
            iconElement: (
                <PublicIcon sx={{ fontSize: 50, color: "text.primary" }} />
            ),
            linkPath: "https://compositecomputer.club/",
        },
        {
            name: "情報工学部",
            iconElement: (
                <SchoolIcon sx={{ fontSize: 50, color: "text.primary" }} />
            ),
            linkPath: "https://www.iizuka.kyutech.ac.jp/",
        },
    ];
    return (
        <Grid container direction="row" spacing={1}>
            {footerButtons.map((footerButton, index) => (
                <Grid item>
                    <FooterIcon key={index} {...footerButton} />
                </Grid>
            ))}
        </Grid>
    );
};

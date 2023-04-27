import { FooterButtonType } from "@/types/web";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WidgetsIcon from "@mui/icons-material/Widgets";
import PublicIcon from "@mui/icons-material/Public";
import SchoolIcon from "@mui/icons-material/School";
import { Button, Grid, Stack, Typography, colors } from "@mui/material";
import Image from "next/image";

const FooterIcon = ({ name, iconElement, linkPath }: FooterButtonType) => {
    return (
        <Button href={linkPath} sx={{ width: 110 }}>
            <Stack spacing={0.5} sx={{ alignItems: "center" }}>
                {iconElement}
                <Typography
                    sx={{
                        fontSize: 70 / (name.length > 10 ? name.length : 20),
                        fontWeight: "bold",
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
    const buttons: FooterButtonType[] = [
        {
            name: "Twitter",
            iconElement: <TwitterIcon sx={{ fontSize: 50 }} />,
            linkPath: "https://twitter.com/c3_kyutech?s=20",
        },
        {
            name: "YouTube",
            iconElement: <YouTubeIcon sx={{ fontSize: 50 }} />,
            linkPath:
                "https://www.youtube.com/channel/UCeRY2jujVBYRqmilrCZytFw",
        },
        {
            name: "ToyBox",
            iconElement: <WidgetsIcon sx={{ fontSize: 50 }} />,
            linkPath: "https://toybox.compositecomputer.club/",
        },
        {
            name: "C3 Official Site",
            iconElement: <PublicIcon sx={{ fontSize: 50 }} />,
            linkPath: "https://compositecomputer.club/",
        },
        {
            name: "情報工学部",
            iconElement: <SchoolIcon sx={{ fontSize: 50 }} />,
            linkPath: "https://www.iizuka.kyutech.ac.jp/",
        },
    ];
    return (
        <Grid container direction="row" spacing={1}>
            {buttons.map((button, index) => (
                <Grid item>
                    <FooterIcon
                        key={index}
                        name={button.name}
                        iconElement={button.iconElement}
                        linkPath={button.linkPath}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

import { surveyLink } from "@/constants/links";
import ArticleIcon from "@mui/icons-material/Article";
import { Button } from "@mui/material";
export const SurveyLink = () => {
    return (
        <Button
            href={surveyLink}
            startIcon={<ArticleIcon />}
            variant="contained"
            color="secondary"
            sx={{
                height: "46px",
                width: "250px",
                borderRadius: "999px",
                textShadow: "-0.5px 0.5px 1px white",
                overflow: "hidden",
                border: "rgba(255,255,255,0.7) solid",
                ":before": {
                    content: '""',
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: 0,
                    height: "100%",
                    background: "rgba(255, 255, 255, 0.3)",
                    transition: "width 0.4s ease",
                },
                ":hover": {
                    ":before": {
                        width: "100%",
                    },
                },
            }}
        >
            アンケート実施中!
        </Button>
    );
};

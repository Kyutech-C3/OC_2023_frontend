import { Typography } from "@mui/material";
import { format, parseISO } from "date-fns";

const Date = ({ dateString }: { dateString: string }) => {
    const date = parseISO(dateString);
    return (
        <Typography
            variant="caption"
            sx={{ placeSelf: "center" }}
            color="text.secondary"
        >
            {dateString != "" ? format(date, "yyyy/MM/dd HH:mm") : ""}
        </Typography>
    );
};
export default Date;

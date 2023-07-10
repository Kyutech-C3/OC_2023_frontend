import { DateProps } from "@/types/common";
import { Typography } from "@mui/material";
import { format, parseISO } from "date-fns";

const Date = ({ dateString, size }: DateProps) => {
    const date = parseISO(dateString);
    return (
        <Typography sx={{ placeSelf: "center", fontSize: size == "s" ? "12px" : size == "m" ? "16px" : "20px" }}>
            {dateString != "" ? format(date, "yyyy/MM/dd HH:mm") : ""}
        </Typography>
    );
};
export default Date;

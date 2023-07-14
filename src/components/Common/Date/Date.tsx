import { DateProps } from "@/types/common";
import { Typography } from "@mui/material";
import { format, parseISO } from "date-fns";

const Date = ({ dateString, size }: DateProps) => {
    const date = parseISO(dateString);
    return (
        <Typography
            sx={{
                placeSelf: "center",
                fontSize: size == "s" ? "12px" : size == "m" ? "16px" : "20px",
            }}
        >
            {dateString != ""
                ? format(
                      date.setTime(date.getTime() - 9 * 60 * 60 * 1000),
                      "yyyy/MM/dd HH:mm"
                  )
                : ""}
        </Typography>
    );
};
export default Date;

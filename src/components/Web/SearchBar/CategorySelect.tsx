import { CategorySelectProps } from "@/types/web";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import GamepadIcon from "@mui/icons-material/Gamepad";
import GamepadOutlinedIcon from "@mui/icons-material/GamepadOutlined";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicNoteOutlinedIcon from "@mui/icons-material/MusicNoteOutlined";
import PaletteIcon from "@mui/icons-material/Palette";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import SensorOccupiedOutlinedIcon from "@mui/icons-material/SensorOccupiedOutlined";
import SubtitlesIcon from "@mui/icons-material/Subtitles";
import SubtitlesOutlinedIcon from "@mui/icons-material/SubtitlesOutlined";
import { Checkbox, FormControlLabel, Stack } from "@mui/material";
import { useRouter } from "next/router";
export const CategorySelect = ({
    handleCheckboxChange,
}: CategorySelectProps) => {
    const router = useRouter();
    const { selectedDepartment } = router.query;
    const splitDepartment = String(selectedDepartment ?? "").split(",");
    const checkButtons = [
        {
            title: "hack",
            unCheckedIcon: (
                <SubtitlesOutlinedIcon sx={{ color: "hack.main" }} />
            ),
            checkedIcon: <SubtitlesIcon sx={{ color: "hack.main" }} />,
        },
        {
            title: "game",
            unCheckedIcon: <GamepadOutlinedIcon sx={{ color: "game.main" }} />,
            checkedIcon: <GamepadIcon sx={{ color: "game.main" }} />,
        },
        {
            title: "music",
            unCheckedIcon: (
                <MusicNoteOutlinedIcon sx={{ color: "music.main" }} />
            ),
            checkedIcon: <MusicNoteIcon sx={{ color: "music.main" }} />,
        },
        {
            title: "cg2d",
            unCheckedIcon: (
                <ColorLensOutlinedIcon sx={{ color: "cg2d.main" }} />
            ),
            checkedIcon: <PaletteIcon sx={{ color: "cg2d.main" }} />,
        },
        {
            title: "cg3d",
            unCheckedIcon: (
                <SensorOccupiedOutlinedIcon sx={{ color: "cg3d.main" }} />
            ),
            checkedIcon: <SensorOccupiedIcon sx={{ color: "cg3d.main" }} />,
        },
    ];
    return (
        <Stack spacing={2}>
            {checkButtons.map(({ title, unCheckedIcon, checkedIcon }) => (
                <Stack direction="row" key={title}>
                    <FormControlLabel
                        onChange={() => handleCheckboxChange(title)}
                        control={
                            <Checkbox
                                checked={splitDepartment.includes(title)}
                                icon={unCheckedIcon}
                                checkedIcon={checkedIcon}
                            />
                        }
                        sx={{ color: "text.primary" }}
                        label={title}
                    />
                </Stack>
            ))}
        </Stack>
    );
};

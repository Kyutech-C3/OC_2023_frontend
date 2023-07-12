import { ModalProps } from "@/types/web";
import { Delete } from "@mui/icons-material";
import { Button, Grid, Modal, Paper, Stack, Typography } from "@mui/material";

export const ConfirmModal = ({ isOpen, closeModal, handleConfirm }: ModalProps) => {
    return (
        <Modal open={isOpen} onClose={closeModal}>
            <Paper sx={{ minWidth: "300px", p: 2, width: "40vw" }}>
                <Stack spacing={2}>
                    <Typography>本当に削除しますか？</Typography>
                    <Grid
                        container
                        justifyContent="space-between"
                        direction="row"
                    >
                        <Button variant="contained" color="hack" onClick={closeModal}>
                            やっぱやめる
                        </Button>
                        <Button
                            variant="contained"
                            color="error"
                            startIcon={<Delete />}
                            onClick={handleConfirm}
                        >
                            削除する
                        </Button>
                    </Grid>
                </Stack>
            </Paper>
        </Modal>
    );
};

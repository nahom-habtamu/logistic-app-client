import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Alert, Button } from '@mui/material';
import AddProduct from './AddProduct';
import AddWareHouse from './AddWareHouse';
import AddSupplier from './AddSupplier';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const CustomModal = (props) => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <div style={{ width: '50%', margin: '15px auto', display: 'flex', gap: '14px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <Alert>Please Press This Button To Add Items</Alert>
                <Button
                    onClick={handleOpen}
                    variant="contained">
                    Add Items
                </Button>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Add Item {props.label}
                    </Typography>

                    {
                        props.label === "Product" ?
                            <AddProduct />
                            : props.label === "Warehouse" ?
                                <AddWareHouse />
                                :
                                <AddSupplier />
                    }

                </Box>
            </Modal>
        </>

    );
}

export default CustomModal;
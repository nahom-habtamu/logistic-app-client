import React, { useState, useContext } from 'react';
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { addSupplier } from '../api/repository';
import { CircularProgress } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

const AddSupplier = (props) => {

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(false);

    const { state } = useContext(AuthContext);



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const result = await addSupplier({ name, address }, state?.loggedInUser?.api_token);
        setLoading(false);
        props.onSupplierAdded(result);
        props.closeModal();
    }

    return (
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
                onChange={(e) => setName(e.target.value)}
                autoFocus
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="address"
                label="Address"
                type="address"
                id="address"
                onChange={(e) => setAddress(e.target.value)}
                autoComplete="address"
            />
            {
                loading ? <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </div> :
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Add Supplier
                    </Button>
            }

        </Box>
    )
}

export default AddSupplier
import React from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from 'react';

const AddWareHouse = () => {

    const [name, setName] = useState("");
    const [supplierId, setSupplierId] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name, supplierId, address
        });
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
                id="supplier-id"
                label="Supplier Id"
                name="supplier-id"
                autoComplete="supplier-id"
                onChange={(e) => setSupplierId(e.target.value)}
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
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Add WareHouse
            </Button>
        </Box>
    )
}

export default AddWareHouse
import React, { useState } from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const AddProduct = () => {
    const [name, setName] = useState("");
    const [wareHouseId, setWareHouseId] = useState("");
    const [price, setPrice] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({
            name, wareHouseId, price
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
                id="ware-house-id"
                label="Ware House Id"
                name="ware-house-id"
                autoComplete="ware-house-id"
                onChange={(e) => setWareHouseId(e.target.value)}
                autoFocus
            />

            <TextField
                margin="normal"
                required
                fullWidth
                name="price"
                label="Price"
                type="price"
                id="price"
                onChange={(e) => setPrice(e.target.value)}
                autoComplete="price"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
            >
                Add Product
            </Button>
        </Box>
    )
}

export default AddProduct
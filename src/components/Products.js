import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomModal from './CustomModal';

const Products = (props) => {

    return (
        <>
            <CustomModal label="Product" />
            <TableContainer component={Paper} style={{ border: '1px solid red', width: '50%', margin: '0 auto' }}>
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Warehouse Id</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.products.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.name[0].toUpperCase() + row.name.slice(1, row.name.length)}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row['warehouse-id']}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Products;
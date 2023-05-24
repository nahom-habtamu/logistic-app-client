import React from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CustomModal from './CustomModal';

const Warehouses = (props) => {
    return (
        <>
            <CustomModal label="Warehouse" onWareHouseAdded={props.onWareHouseAdded} />
            <TableContainer component={Paper} style={{ border: '1px solid red', width: '50%', margin: '0 auto' }}>
                <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Supplier Id</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.warehouses.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.id}
                                </TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                                <TableCell align="right">{row['supplier-id']}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Warehouses;
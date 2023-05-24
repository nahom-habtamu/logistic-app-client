import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Suppliers from '../components/Suppliers';
import Warehouses from '../components/Warehouses';
import Products from '../components/Products';

const MainPage = () => {

    const [activeTabIndex, setActiveTabIndex] = useState("1");

    const [warehouses, setWarehouses] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [products, setProducts] = useState([]);

    const handleChange = (_, value) => {
        setActiveTabIndex(value);
    }

    useEffect(() => {

    }, [activeTabIndex])


    return (
        <>
            <Typography component="h1" variant="h1" textAlign='center' padding='15px'>
                Welcome to Main Screen
            </Typography>

            <TabContext value={activeTabIndex} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="Suppliers" value="1" />
                        <Tab label="Warehouses" value="2" />
                        <Tab label="Products" value="3" />
                    </TabList>
                </Box>
                <TabPanel onClick={() => console.log("I AM CLICKED")} value="1">
                    <Suppliers suppliers={suppliers} />
                </TabPanel>
                <TabPanel value="2">
                    <Warehouses warehouses={warehouses} />
                </TabPanel>
                <TabPanel value="3">
                    <Products warehouses={warehouses} />
                </TabPanel>
            </TabContext>
        </>
    )
}


export default MainPage;
export const MainPageRoute = "/main";



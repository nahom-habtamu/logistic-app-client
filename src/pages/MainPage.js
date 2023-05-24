import React, { useState, useEffect, useContext } from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabList from '@material-ui/lab/TabList';
import TabPanel from '@material-ui/lab/TabPanel';
import Suppliers from '../components/Suppliers';
import Warehouses from '../components/Warehouses';
import Products from '../components/Products';

import { AuthContext } from '../context/AuthContext';

import { fetchProducts, fetchSuppliers, fetchWareHouses } from '../api/repository';

const MainPage = () => {

    const [activeTabIndex, setActiveTabIndex] = useState("1");

    const [warehouses, setWarehouses] = useState([]);
    const [suppliers, setSuppliers] = useState([]);
    const [products, setProducts] = useState([]);


    const { state } = useContext(AuthContext);


    const handleChange = (_, value) => {
        setActiveTabIndex(value);
    }

    useEffect(() => {
        const fetchAppropriateItems = async () => {
            if (activeTabIndex === "1") {
                const result = await fetchSuppliers(state?.loggedInUser?.api_token);
                setSuppliers(result);
            }
            else if (activeTabIndex === "2") {
                const result = await fetchWareHouses(state?.loggedInUser?.api_token);
                setWarehouses(result);
            }

            else if (activeTabIndex === "3") {
                const result = await fetchProducts(state?.loggedInUser?.api_token);
                setProducts(result);
            }
        }

        fetchAppropriateItems();
    }, [activeTabIndex])


    return (
        <>
            <Typography component="h1" variant="h2" textAlign='center' padding='15px'>
                Welcome to Main Screen {state.loggedInUser?.name}
            </Typography>

            <TabContext value={activeTabIndex} >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example" centered>
                        <Tab label="Suppliers" value="1" />
                        <Tab label="Warehouses" value="2" />
                        <Tab label="Products" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Suppliers
                        suppliers={suppliers}
                        onSupplierAdded={(supplier) => setSuppliers([...suppliers, supplier])}
                    />
                </TabPanel>
                <TabPanel value="2">
                    <Warehouses
                        warehouses={warehouses}
                        onWareHouseAdded={(warehouse) => setWarehouses([...warehouses, warehouse])}
                    />
                </TabPanel>
                <TabPanel value="3">
                    <Products
                        products={products}
                        onProductAdded={(product) => setProducts([...products, product])}
                    />
                </TabPanel>
            </TabContext>
        </>
    )
}


export default MainPage;
export const MainPageRoute = "/main";



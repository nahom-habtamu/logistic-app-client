import axiosInstance from "./api";

export const fetchSuppliers = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + token,
        },
    };

    let result = await axiosInstance.get("/suppliers", config);
    return result.data;
}

export const fetchProducts = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + token,
        },
    };

    let result = await axiosInstance.get("/products", config);
    return result.data;
}

export const fetchWareHouses = async (token) => {
    const config = {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + token,
        },
    };
    let result = await axiosInstance.get("/warehouses", config);
    return result.data;
}

export const addSupplier = async (supplier, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + token,
        },
    };
    let result = await axiosInstance.post("/suppliers", supplier, config);
    return result.data;
}


export const addWareHouse = async (warehouse, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + token,
        },
    };
    let result = await axiosInstance.post("/warehouses", warehouse, config);
    return result.data;
}


export const addProduct = async (product, token) => {
    const config = {
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
            "Authorization": "Bearer " + token,
        },
    };
    let result = await axiosInstance.post("/products", product, config);
    return result.data;
}   

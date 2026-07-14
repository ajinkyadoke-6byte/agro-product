import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const navigate = useNavigate();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Authentication token
    const [token, setToken] = useState(
        localStorage.getItem("token") || ""
    );

    // Fetch products from backend
    const getProducts = async () => {
        try {
            const response = await axios.get(
                backendUrl + "/api/product/list"
            );

            if (response.data.success) {
                setProducts(response.data.products);
            }

        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };

    // Load products on startup
    useEffect(() => {
        if (backendUrl) {
            getProducts();
        }
    }, [backendUrl]);

    // Keep token synced with localStorage
    useEffect(() => {
        if (token) {
            localStorage.setItem("token", token);
        } else {
            localStorage.removeItem("token");
        }
    }, [token]);

    const value = {
        products,
        setProducts,

        loading,
        setLoading,

        backendUrl,

        getProducts,

        token,
        setToken,

        navigate,
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
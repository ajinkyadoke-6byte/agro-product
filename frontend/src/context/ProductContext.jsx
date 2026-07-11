import { createContext, useEffect, useState } from "react";
import axios from "axios";
// import '@tabler/icons-webfont/dist/tabler-icons.min.css'

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

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

    useEffect(() => {
        getProducts();
    }, []);

    const value = {
        products,
        loading,
        backendUrl,
        getProducts,
    };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;
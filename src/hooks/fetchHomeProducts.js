import { useEffect, useState } from "react";

const productList = [
    { id: "1A", title: "Range Vintage", price: "$50,000", path: require("../../assets/images/4.jpg") },
    { id: "1B", title: "Range Vintage", price: "$50,000", path: require("../../assets/images/5.jpg") },
    { id: "1C", title: "Range Vintage", price: "$50,000", path: require("../../assets/images/6.jpg") },
];

const fetchHomeProduct = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setIsLoading(true);
            const result = await new Promise((resolve) =>
                setTimeout(() => {
                    resolve(productList);
                }, 2000)
            );
            setData(result);
        } catch (error) {
            setError(error.message || "An error occurred.");
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, isLoading, error };
};

export default fetchHomeProduct;

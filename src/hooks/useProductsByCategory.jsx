import React from "react";
// import { getProductsByCategory } from "../services/products.service";

import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";


export const useProductsByCategory = (id) => {
    const [products, setProducts] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {

        const customQuery = query(
            collection(db, "products"),
            where("category", "==",id),
        )

        getDocs(customQuery).then((snapshot) => {
            setProducts(
                snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
            );
        })
            .catch(() => setError(true))
            .finally(() => setLoading(false));
    }, [id]);

    return { products, loading };
};

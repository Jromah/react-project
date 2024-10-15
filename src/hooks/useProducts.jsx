import React from "react";
// import { getAllProducts } from "../services/products.service";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";


export const useProducts = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    // getAllProducts()
    //   .then((response) => {
    //     setProducts(response.data.products);
    //   })                                                                                       
    //   .catch((error) => {
    //     setError(true);
    //     console.error(error);
    //   })
    //   .finally(() => setLoading(false));

    const productsCollection = collection(db, 'products');
    getDocs(productsCollection)
      .then((snapshot) => {
          setProducts(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
      .catch((error) => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
};
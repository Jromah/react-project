import React from "react";
// import { getAllProducts } from "../services/products.service";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";



export const useItemsCollection = (categoryName) => {
  const [items, setItems] = React.useState([]);
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

    const itemsCollection = collection(db, categoryName);
    getDocs(itemsCollection)
      .then((snapshot) => {
          setItems(
            snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  return { items, loading, error };
};
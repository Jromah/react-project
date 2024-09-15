import React from 'react'
import { getProductsById } from '../services/products.service';

export const useProductById = () => {
  const [product, setProduct] = React.useState ({});
    const [loading, setLoading] = React.useState (true);
  
    React.useEffect (() => {
        getProductsById(id).then((response) => {
            console.log(response.data);
        }).catch((error) => {
            console.error(error);
        })
        .finally(() => {
            setLoading(false);
        });
    }, []);

    return { product, loading };
}

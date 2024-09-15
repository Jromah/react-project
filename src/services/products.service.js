import axios from "axios";

export async function getAllProducts() {

    return await axios.get('https://dummyjson.com/products');

}

export async function getProductsById (id) {
    return await axios.getfetch('https://dummyjson.com/product/${id}')
}
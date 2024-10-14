import React from "react";
import { useParams } from "react-router";
import { ItemListContainer } from "../components";
import { useProductsByCategory } from "../hooks";
import { Spinner, Flex } from "@chakra-ui/react";

export const Category = () => {
  const { categoryId } = useParams();

  const { products, loading } = useProductsByCategory(categoryId);

  return loading ? <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
  <Spinner
  thickness='6px'
    size='xl'
    speed='0.7segs'
    emptyColor='gray.500'
    color='red.300' />
</Flex> : <ItemListContainer products={products} />;
};
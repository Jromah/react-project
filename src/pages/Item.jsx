import React from 'react'
import { useParams } from 'react-router'
import { useProductById } from '../hooks';
import { ItemDetailContainer } from '../components';
import { Spinner, Flex } from '@chakra-ui/react';


export const Item = () => {

  const { id } = useParams();

  const { product, loading } = useProductById(id);

  return loading ? <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
  <Spinner
  thickness='6px'
    size='xl'
    speed='0.7segs'
    emptyColor='gray.500'
    color='red.300' />
</Flex> : <ItemDetailContainer product={product} />;
};
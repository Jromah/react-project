import React from 'react';
import { ItemListContainer } from '../components';
import { useItemsCollection } from '../hooks';
import { Box, Flex, Spinner } from '@chakra-ui/react';

export const Home = () => {

  const { items, loading, error } = useItemsCollection("products");

  return loading ? (

    <Flex justifyContent={"center"} alignItems={"center"} h={"90vh"}>
      <Spinner
      thickness='6px'
        size='xl'
        speed='0.7segs'
        emptyColor='gray.500'
        color='red.300' />
    </Flex>
  ) : error ? (
    <Box>
      Ocurrio un error al momento de cargar los productos. Actualize o contacte a soporte =) xoxo.
    </Box>
  ) : (<ItemListContainer products={items} />

  );
};

import {
  Box,
  Card,
  Stack,
  Heading,
  CardBody,
  Divider,
  CardFooter,
  ButtonGroup,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const ItemListContainer = ({ products }) => {
  const categories = products.map((product) => product.category);
  const uniqueCategories = [...new Set (categories)];

  return (
    <Box display={"flex"} flexWrap={"wrap"}>
      {products.map((product) => (
        <Card key={product.id} maxW="sm" margin={"1rem"}>
          <CardBody>
            <Image
              src={product.thumbnail}
              alt={product.name}
              borderRadius="lg"
            />
            <Stack mt="6" spacing="3">
              <Heading size="md">{product.title}</Heading>
              <Text>{product.description}</Text>
              <Text color="red.600" fontSize="2xl">
                {product.price}
              </Text>
            </Stack>
          </CardBody>
          <Divider />
          <CardFooter>
            <ButtonGroup spacing="2">

              <Link to={`/item/${product.id}`}>
                {" "}
                Ir a detalle del producto{" "}
              </Link>
            </ButtonGroup>
          </CardFooter>
        </Card>
      ))}
    </Box>
  );
};
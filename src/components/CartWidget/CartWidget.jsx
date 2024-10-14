import { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import myImage from '../../assets/Cart-icon.png';
import { CartContext } from "../../context";

export const CartWidget = () => {

    const { cartState } = useContext(CartContext);
    return (
        <Flex
            alignItems={"center"}
            height={"100%"}
            justifyContent={"space-between"}
            width={"60px"}>
            <img src={myImage} alt="logo-carrito-de-compras" />
            <Text fontSize={"1.5rem"}>{cartState}</Text>
        </Flex>

    )
};

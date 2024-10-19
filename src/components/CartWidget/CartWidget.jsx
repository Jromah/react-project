import { useContext } from "react";
import { Box, Flex, Text } from "@chakra-ui/react";
import myImage from '../../assets/Cart-icon.png';
import { CartContext } from "../../context";
import { Link } from "react-router-dom";

export const CartWidget = () => {

    const { cartState } = useContext(CartContext);
    console.log(cartState);
    
    const qtyTotalItems = cartState.reduce((acc, item) => acc + item.qtyItem, 0);

    return (
        <Flex
            alignItems={"center"}
            height={"100%"}
            justifyContent={"space-between"}
            width={"60px"}>
            <img src={myImage} alt="logo-carrito-de-compras" />
            <Link to="/checkout"><Text fontSize={"1.5rem"}>{qtyTotalItems}</Text></Link>
        </Flex>

    )
};

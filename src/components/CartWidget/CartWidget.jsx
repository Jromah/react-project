import { Box, Text } from "@chakra-ui/react";
import myImage from '../../assets/Cart-icon.png'

const CartWidget = () => {
    return (
        <Box>
            <img src={myImage} alt="logo-carrito-de-compras" />
            <Text>2</Text>
        </Box>

    )
}

export default CartWidget;
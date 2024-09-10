import { Box } from "@chakra-ui/react";

export const ItemListContainer = ({ greeting }) => {
    return (
        <Box
            width={"100vw"}
            height={"90vh"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            color={"red"}>
                {greeting}
        </Box>
    )
};
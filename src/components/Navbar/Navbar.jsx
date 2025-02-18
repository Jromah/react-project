import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { CartWidget } from '../CartWidget';
import myImage from '../../assets/f1-logo.png';
import { Link } from 'react-router-dom';
import { useItemsCollection } from '../../hooks';
import { createProductsFirestore } from '../../helpers';

export const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    const { items } = useItemsCollection("categories");

    return (
        <>
            <Box bg={useColorModeValue('red.600', 'red.900')} px={4}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Box>
                        <Link to="/"><img src={myImage} alt="logo-formula-1" /></Link>
                    </Box>
                    <Menu>
                        <MenuButton as={Link} cursor="pointer" style={{ marginLeft: 30 }}>
                            Categorias
                        </MenuButton>
                        <MenuList maxHeight={'50vh'} overflowY={'scroll'}>
                            {items.map((category) => (
                                <MenuItem key={category.slug}><Link to={`/category/${category.slug}`}>{category.name}</Link></MenuItem>
                            ))}
                        </MenuList>
                    </Menu>
                    {/* <Button onClick={() => createProductsFirestore('products')}>Creart productos</Button> */}
                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <CartWidget />
                            <Button onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={"full"}
                                    variant={"link"}
                                    cursor={"pointer"}
                                    minW={0}
                                >
                                    <Avatar
                                        size={"sm"}
                                        src={"https://avatars.dicebear.com/api/male/username.svg"}
                                    />
                                </MenuButton>
                                <MenuList alignItems={"center"}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={"2xl"}
                                            src={"https://avatars.dicebear.com/api/male/username.svg"}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </>
    )
};
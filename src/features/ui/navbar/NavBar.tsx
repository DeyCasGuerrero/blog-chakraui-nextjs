'use client';
import { Box, Flex, Button, HStack, Heading, Text, Avatar, Menu, MenuButton, MenuList, MenuDivider, MenuItem, MenuGroup, Link } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useSession, signOut } from "next-auth/react";
export default function NavBar() {
    const { data: session, status } = useSession();

    const router = useRouter();
    const handleRouter = () => {
        router.push('/blog')
    }

    return (
        <Box as="nav" bg="black" position="sticky" borderBottom="1px solid gray" p={1} zIndex={10}>
            <Box>
                <Flex alignItems="center" justifyContent="space-between" flexDirection={['column', 'column', 'row', 'row']}>
                    <Box ml="8">
                        <Heading bgClip="text" bgGradient="linear(to-r, red, blue)">
                            BlogOwn
                        </Heading>
                    </Box>
                    <Flex w="100%" justifyContent="space-between">
                        <Flex color="whitesmoke" justify="space-around" alignItems="center" w="96">
                            <Box
                                as="a"
                                _hover={{
                                    color: "white",
                                    textDecoration: "none",
                                    transition: "color 0.5s ease-out"
                                }}
                                cursor="pointer"
                                href="/"
                            >
                                Home
                            </Box>
                            <Box
                                as="a"
                                _hover={{
                                    color: "white",
                                    textDecoration: "none",
                                    transition: "color 0.5s ease-out"
                                }}
                                cursor="pointer"
                                href="/about"
                            >
                                About
                            </Box>
                            <Box
                                as="a"
                                _hover={{
                                    color: "white",
                                    textDecoration: "none",
                                    transition: "color 0.5s ease-out"
                                }}
                                cursor="pointer"
                                href="/news"
                            >
                                News
                            </Box>
                            <Box
                                as="a"
                                bg="slateblue"
                                p={2}
                                rounded="md"
                                color="white"
                                fontWeight="semibold"
                                _hover={{
                                    textDecoration: "none",
                                    transition: "color 0.5s ease-out"
                                }}
                                cursor="pointer"
                                href="/blog"
                            >
                                Blog
                            </Box>
                        </Flex>
                        {session?.user ? (
                            <HStack spacing="30px">
                                <Text fontSize="medium" fontWeight="semibold" color="green.500">
                                    {session.user.name}
                                </Text>
                                <Menu>
                                    <MenuButton as={Box} cursor='pointer'>
                                        <Button colorScheme="pink" height="auto" p={0} borderRadius="full" >
                                            <Avatar name="Dey" src="https://bit.ly/dan-abramov" />
                                        </Button>
                                    </MenuButton>
                                    <MenuList color='black' p={2}>
                                        <MenuGroup title='Profile'>
                                            <MenuItem onClick={handleRouter}>My Account</MenuItem>
                                            <Button colorScheme="red" onClick={()=>signOut()}>LogOut</Button>
                                        </MenuGroup>
                                        <MenuDivider />
                                        <MenuGroup title='Help'>
                                            <MenuItem>Docs</MenuItem>
                                            <MenuItem>FAQ</MenuItem>
                                        </MenuGroup>
                                    </MenuList>
                                </Menu>
                            </HStack>

                        ) : (
                            <Link
                                href="login"
                
                                _hover={{
                                    border: "1px solid",
                                    transition: "border 0.5s ease-out",
                                }}
                            >
                                Sign In
                            </Link>
                        )}
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}
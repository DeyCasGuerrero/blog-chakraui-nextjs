import { Box, Flex, MenuDivider, MenuItem, MenuList, useColorModeValue, Button, HStack, Heading, Text, Avatar, Divider } from "@chakra-ui/react";

export default function NavBar() {
    return (
        <Box as="nav"
            bg="black"
            position="sticky"
            overflow="hidden"
            borderBottom="1px solid gray"
        >
            
            <Flex alignItems="center" justifyContent="space-between" >

                <Box ml="8">
                    <Heading
                        bgClip="text"
                        bgGradient="linear(to-r, red, blue)"
                    >
                        BlogOwn
                    </Heading>
                </Box>
                <Box
                    w={[
                        "100%", "40%"
                    ]}
                    
                    position="relative"
                    p="2"
                >
                    <Flex
                        color="whitesmoke"
                        justify="space-around"
                        alignItems="center"
                    >
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

                        <HStack
                            spacing="30px"
                        >
                            <Text
                                fontSize="medium"
                                fontWeight="semibold"
                                color="green.500"

                            >
                                depordey
                            </Text>

                            <Avatar name="Dey" src="https://bit.ly/dan-abramov">

                            </Avatar>

                            <Button
                                colorScheme="red"
                            >
                                LogOut
                            </Button>

                        </HStack>
                    </Flex>
                </Box>
            </Flex>
        </Box>


    )
}
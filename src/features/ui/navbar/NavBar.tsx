import { Box, Flex, MenuDivider, MenuItem, MenuList, useColorModeValue, Button, HStack, Heading, Text, Avatar, Divider } from "@chakra-ui/react";

export default function NavBar() {
    return (
        <Box as="nav"
            bg="black"
            position="sticky"
            overflow="hidden"
        >
            <Flex alignItems="center" ml="30px">

                <Box>
                    <Heading 
                    bgClip="text"
                    bgGradient="linear(to-r, red, blue)"
                    >
                        BlogOwn
                    </Heading>
                </Box>
                <Box
                    w={[
                        "100%", "50%"
                    ]}
                    ml="auto"
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
                            _hover={{ color: "gray" }}
                            cursor="pointer"
                            href="/"
                        >
                            Home
                        </Box>
                        <Box
                            as="a"
                            _hover={{ color: "gray" }}
                            cursor="pointer"
                            href="/about"
                        >
                            About
                        </Box>

                        <Box
                            as="a"
                            _hover={{ color: "gray" }}
                            cursor="pointer"
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
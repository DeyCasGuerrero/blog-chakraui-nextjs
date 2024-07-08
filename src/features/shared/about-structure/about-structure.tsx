'use client';
import {
    Box, Container, Text, Heading, VStack,
    Flex, Accordion,
    AccordionItem, AccordionButton,
    AccordionPanel,
    AccordionIcon
} from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";

export default function AboutStructure() {

    return (
        <Box as="main" mt="6" position="relative" display="flex" alignItems="center" justifyContent="center" minHeight="100vh" p={[
            5, 20
        ]}>
            <Container maxW="container.lg" >
                <Flex flexDirection={[
                    "column",
                    "column",
                    "row",
                ]}>
                    <VStack as="aside" bg="slateblue" width={[
                        "full", "full", "40rem"
                    ]} p="4"  borderRadius={[
                        "lg", "none"

                    ]}>
                        <Heading as="h2">Our Features</Heading>
                        <Box>
                            <Flex align="center">
                                <AiOutlineCheck size={20} />
                                <Box ml="2">Easy Blog Setup</Box>
                            </Flex>

                            <Flex align="center">
                                <AiOutlineCheck size={20} />
                                <Box ml="2">Customizable Templates</Box>
                            </Flex>

                            <Flex align="center">
                                <AiOutlineCheck size={20} />
                                <Box ml="2">SEO Optimization</Box>
                            </Flex>

                            <Flex align="center">
                                <AiOutlineCheck size={20} />
                                <Box ml="2">Community Engagement</Box>
                            </Flex>
                        </Box>
                    </VStack>
                    <Box>
                        <Box ml={[
                            "0", "0", "10"
                        ]}>
                            <Heading fontSize={64} textAlign={[
                                "center", "center", "left"
                            ]}>About Us</Heading>
                            <Text>
                                Welcome to our website, the perfect place for bloggers of all experience levels. Our platform offers a seamless and user-friendly experience, enabling you to create, edit, and publish your blogs effortlessly. Here are some of the key features we provide:
                            </Text>
                        </Box>
                        <Accordion w="full" p={10}>
                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'green.500', color: 'black', fontWeight: "bold" }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Easy Blog Creation
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Start your blog with just a few clicks. Our straightforward interface allows you to set up your blog in minutes
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'green.500', color: 'black', fontWeight: "bold" }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Customizable Templates
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Choose from a variety of templates to give your blog a unique look and feel. Personalize your design to reflect your style.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: "green.500", color: "black", fontWeight: "bold" }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            Community Engagement
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Connect with other bloggers and readers through comments and social sharing features. Grow your audience and engage with your followers.
                                </AccordionPanel>
                            </AccordionItem>

                            <AccordionItem>
                                <h2>
                                    <AccordionButton _expanded={{ bg: 'green.500', color: 'black', fontWeight: "bold" }}>
                                        <Box as='span' flex='1' textAlign='left'>
                                            SEO Optimization
                                        </Box>
                                        <AccordionIcon />
                                    </AccordionButton>
                                </h2>
                                <AccordionPanel pb={4}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada, ipsum sed condimentum viverra, sapien dui efficitur turpis, vel euismod libero velit vel nunc. Nulla facilisi. Sed vel ipsum at urna convallis semper. Donec facilisis, nunc ac hendrerit congue, lectus lectus fermentum ex, vel malesuada tellus metus a enim.
                                </AccordionPanel>
                            </AccordionItem>
                        </Accordion>
                    </Box>
                </Flex>
            </Container>
        </Box>


    )
}
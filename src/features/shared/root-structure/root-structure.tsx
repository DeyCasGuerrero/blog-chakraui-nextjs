"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Container, Divider, Flex, Grid, GridItem, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from '../styles/home.module.css';
import { motion } from 'framer-motion';
import { AiFillGithub } from "react-icons/ai";
export default function RootStructure() {

    const words = "Wee help you create your blog and stay connected with the latest information"
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            if (index < words.length) {
                setDisplayedText((prev) => prev + words[index]);
                index++;
            } else {
                clearInterval(interval);
            }
        }, 100); // Ajusta el tiempo (en milisegundos) para cambiar la velocidad de escritura

        return () => clearInterval(interval);
    }, []);

    const handleClick = () => {
        console.log('handleClick')
    }

    // console.log(displayedText)
    return (
        <Flex overflow="hidden" as="main" minHeight="100vh"
            position="relative" justifyContent="center" alignItems="center"
            boxShadow={"inset 0 0 100px 200px rgba(0, 0, 0, 0.9)"}
        >
            
            <Grid position="absolute"
                as={motion.div}
                initial={{
                    opacity: 0, scale: 0.5
                }}
                animate={{
                    opacity: 0.3, scale: 1,
                    transition: {
                        duration: 0.5,
                        ease: "easeInOut",
                        delay: 0.5
                    }
                }}

                zIndex={-1}
                left={0}
                right={0}
                top={0}
                bottom={0}
                templateRows='repeat(4, 1fr)' //(filas, espacios)
                templateColumns='repeat(4, 1fr)'//(columnas, espacios)   
                p={[
                    2, 20
                ]}

                opacity="0.5"
            >
                <GridItem border={"1px dashed gray"} rowSpan={2}>

                </GridItem>
                <GridItem border={"1px dashed gray"} colSpan={2}>

                </GridItem>
                <GridItem border={"1px dashed gray"} >

                </GridItem>
                <GridItem border={"1px dashed gray"} colSpan={2}>

                </GridItem>
                <GridItem border={"1px dashed gray"}>

                </GridItem>
                <GridItem border={"1px dashed gray"} colSpan={2}>

                </GridItem>
                <GridItem border={"1px dashed gray"} >

                </GridItem>
                <GridItem border={"1px dashed gray"} rowSpan={2}>

                </GridItem>
                <GridItem border={"1px dashed gray"}>

                </GridItem>
                <GridItem border={"1px dashed gray"} colSpan={2} >

                </GridItem>

            </Grid>
            <VStack p={2}
                w={[
                    "100%", "80%"
                ]} textAlign={"center"}
                m="auto"

                spacing="30px"
            >
                <Heading
                    fontSize={[
                        "3xl", "7xl"
                    ]}
                    bgClip="text"
                    textTransform="uppercase"
                    bgGradient="linear(to-r, red, blue)"
                >
                    Sign in and create your own Blog in this website
                </Heading>

                <Box
                    fontSize="x-large"
                    color="GrayText"
                >
                    {displayedText.split("").map((char, index) => (
                        <Text
                            key={index}
                            as="span"
                            color={char === " " ? "white" : "gray.500"}
                        >
                            {char}
                        </Text>
                    ))}
                </Box>

                <HStack>
                    <Link
                        href="/blog"
                        bg="gray.700"
                        _hover={{
                            bg: "gray.800"
                        }}
                    >
                        Get Started
                    </Link>
                    <Link
                        bg="slateblue"
                        href="https://github.com/DeyCasGuerrero"
                        display="flex"
                        alignItems="center"
                        target="__blank"
                        gap="1"
                        _hover={{
                            bg: "blue.500"
                        }}
                    >
                        View
                        <AiFillGithub size={22} />
                    </Link>
                </HStack>
            </VStack>
        </Flex>
    )
}
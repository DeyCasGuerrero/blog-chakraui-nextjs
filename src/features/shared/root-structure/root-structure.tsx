"use client";
import { Link } from "@chakra-ui/next-js";
import { Box, Button, Divider, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styles from '../styles/home.module.css';
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

    const handleClick = ()=>{
        console.log('handleClick')
    }

    // console.log(displayedText)
    return (
        <Flex as="main" minHeight="100vh">
            <VStack p={2}
                w={[
                    "100%", "50%"
                ]} textAlign={"center"}
                m="auto"
                
                spacing="30px"
            >
                <Heading
                    fontSize={[
                        "3xl", "5xl"
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
                    <Button
                    bg="slateblue"

                    _hover={{
                        bg: "blue.500"
                    }}
                    >
                        view
                    </Button>
                </HStack>
            </VStack>
        </Flex>
    )
}
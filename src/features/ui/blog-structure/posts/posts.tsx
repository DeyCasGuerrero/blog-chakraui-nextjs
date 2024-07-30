"use client";
import { useProfileStore } from "@/app/store/profileStore";
import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

export default function BlogIterationStructure() {

    const {urlImg} = useProfileStore();

    return (
        <Box
            bg="black"
            border="1px solid #ccc"
            borderRadius="md"
            p={4}
            mb={4}
            maxWidth="full"
            width="100%"
            boxShadow="md"
        >
            <Flex alignItems="center" mb={2}>
                <Avatar src={urlImg} mr={2} w="40px" h="40px" ></Avatar>
                <Text fontWeight="bold">Username</Text>
                <Text ml={2} color="gray.500">@username • 2h</Text>
            </Flex>
            <Box mb={5}>
                <Text fontSize="lg" mb={2}>
                    Blog Iteration Structure
                </Text>
                <Text>
                    This is a blog iteration structure. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur at orci condimentum, bibendum tellus at, pharetra nunc.
                </Text>
            </Box>
            <Button bg='green.500' _hover={{
                bg: 'green.600'
            }}>
                Read More...
            </Button>
        </Box>

    )
}
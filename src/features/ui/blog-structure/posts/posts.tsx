"use client";
import { useProfileStore } from "@/app/store/profileStore";
import { Avatar, Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

interface PostCardProps {
    title: string;
    content: string;
    authorEmail: string;
    createdAt: Date;
}
export default function BlogIterationStructure({ title, content, authorEmail, createdAt }: PostCardProps) {

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
                <Text fontWeight="bold">{authorEmail}</Text>
                <Text ml={2} color="gray.500">@username • </Text>
            </Flex>
            <Box mb={5}>
                <Text fontSize="lg" mb={2}>
                    {title}
                </Text>
                <Text>
                    {content}
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
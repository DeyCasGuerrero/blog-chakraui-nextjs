"use client";
import { ProfileStructure, PostStructure } from "@/features/ui/index";
import { Box, Container, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import { PostCards } from "@/features/ui/index";
import { useEffect, useState } from "react";
import { useBlogSture } from "@/app/store/blogStore";


export default function BlogPage({ params }: { params: { email: string } }) {



    const { data, hasError } = useBlogSture((state) => ({
        data: state.blogs,
        hasError: state.hasError,
    }));

    const { getBlog } = useBlogSture();

    useEffect(() => {
        getBlog(params.email);
    }, []);


    return (
        <>
            {hasError ? (

                <Box as="main" bg="#0D1117" minHeight="100vh">
                    <Container maxW="container.lg" h="100%" display="flex" flexDirection="column">
                        <Stack direction={["column", "column", "row"]} spacing={8} mt={10}>
                            <ProfileStructure email={params.email} />
                            <VStack align="stretch" spacing={8}>
                                <PostStructure />
                                <Box>
                                    <Heading p={4} w="100%"> Your Posts</Heading>
                                    <>
                                        {data.length > 0 && (
                                            <>
                                                {data.map((blog) => (
                                                    <PostCards
                                                        key={blog.idBlog}
                                                        title={blog.title}
                                                        content={blog.content}
                                                        authorEmail={blog.authorEmail}
                                                    // createdAt={blog.createdAt ? blog.createdAt:}
                                                    />
                                                ))}
                                            </>
                                        )}

                                    </>
                                </Box>
                            </VStack>
                        </Stack>
                    </Container>
                </Box>
            ) : (
                <Box bg="#0D1117" minHeight="100vh">
                    
                </Box>
            )}
        </>
    );
}

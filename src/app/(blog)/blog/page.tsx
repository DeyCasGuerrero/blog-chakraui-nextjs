"use client";
import { ProfileStructure, PostStructure } from "@/features/ui/index";
import { Box, Container, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import { PostCards } from "@/features/ui/index";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useBlogSture } from "@/app/store/blogStore";

interface Category {
    blogId: string;
    categoryId: number;
}

interface blogTypes {
    idBlog: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    authorEmail: string;
    BlogOnCategory: Category[];
}
export default function BlogPage() {

    const { data: session, status } = useSession();

    const { data } = useBlogSture((state) => ({
        data: state.blogs,
    }));

    const { getBlog } = useBlogSture();

    useEffect(() => {
        if (status === "authenticated" && session?.user?.token) {
            getBlog(session.user.token, session.user.email);
        }
    }, [status, session?.user?.token]);


    return (
        <Box as="main" bg="#0D1117" minHeight="100vh">
            <Container maxW="container.lg" h="100%" display="flex" flexDirection="column">
                <Stack direction={["column", "column", "row"]} spacing={8} mt={10}>
                    <ProfileStructure />
                    <VStack align="stretch" spacing={8}>
                        <PostStructure />
                        <Box>
                            <Heading p={4}> Your Posts</Heading>

                            {data.length > 0 && (
                                <>
                                    {data.map((blog) => (
                                        <PostCards
                                            key={blog.idBlog}
                                            title={blog.title}
                                            content={blog.content}
                                            authorEmail={blog.authorEmail}
                                            createdAt={blog.createdAt}
                                        />
                                    ))}
                                </>
                            )}


                            {/* <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards /> */}
                        </Box>
                    </VStack>
                </Stack>
            </Container>
        </Box>
    );
}

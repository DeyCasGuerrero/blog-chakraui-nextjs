'use client';
import { Box, Button, HStack, Input, Select, Textarea, VStack, Text, Tag, FormControl } from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import { useBlogSture } from "@/app/store/blogStore";
import { Blog, Category } from "../../types/blog";
export default function BlogSendStructure() {

    const { data: session, status } = useSession();

    const { createBlog } = useBlogSture();

    const defaultBlog: Blog = {
        title: '',
        content: '',
        categories: [],
        authorEmail: '',
    }

    const [data, setData] = useState(defaultBlog);

    const [categoriesAdded, setCategoriesAdded] = useState<Category[]>([]);

    const handleChangeData = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleCategoryAdd = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        const [idCategory, name] = selectedCategory.split('-');
        const category = {
            idCategory: parseInt(idCategory, 10),
            name: name,
        };

        if (selectedCategory !== '') {
            setCategoriesAdded(prevCategories => {
                // some para poder ejecutar la callback y evaluar por cada elemento del array
                const isCategoryExisting = prevCategories.some(cate => cate.idCategory === category.idCategory);
                if (!isCategoryExisting) {
                    return [...prevCategories, category];
                }
                return prevCategories;
            });
        }
    }

    const handleCategoryRemove = (categoryToRemove: string) => {
        setCategoriesAdded(prevCategories =>
            prevCategories.filter(category => category.name !== categoryToRemove)
        );
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!data.content || !data.title) return;
        if (categoriesAdded.length == 0) return;
        if (!session?.user.email) return;


        const updatedData = {
            ...data,
            categories: categoriesAdded,
            authorEmail: session?.user.email,
        };

        try {
            if (session.user.token) {
                const res = await createBlog(session.user.token, updatedData);
            };
        } catch (error) {
            alert('Failed to post blog');
        }
        console.log(updatedData);



    }

    return (
        <>
            {session?.user && (
                <Box as="form" p={10} w="full" border='1px solid' borderRadius="lg" flex={1} onSubmit={handleSubmit}>
                    <VStack spacing={5}>
                        <Input
                            placeholder="title"
                            name="title"
                            type="text"
                            onChange={handleChangeData}
                            value={data.title}
                        />

                        <Textarea
                            onChange={handleChangeData}
                            placeholder="Write anything for your Blog"
                            rows={5}
                            value={data.content}
                            name="content"
                        />

                        {categoriesAdded.length > 0 && (
                            <HStack mt={4}>
                                {categoriesAdded.map((category, index) => (
                                    <Tag
                                        key={index}
                                        bg='slateblue'
                                        p={2}
                                        color='white'
                                        display='flex'
                                        alignItems='center'
                                        justifyContent='space-between'
                                        fontWeight='semibold'
                                    >
                                        {category.name}
                                        <Button
                                            variant='link'
                                            onClick={() => handleCategoryRemove(category.name)}
                                            aria-label={`Remove ${category.name}`}
                                            ml={2}
                                        >
                                            <AiOutlineClose color="red" size={20} />
                                        </Button>
                                    </Tag>
                                ))}
                            </HStack>
                        )}
                        <Select
                            placeholder='Categories'
                            color='white'
                            _focus={{ bg: 'black' }}
                            fontWeight='semibold'
                            sx={{
                                option: {
                                    bg: 'black',
                                    color: 'white',
                                },
                            }}
                            onChange={handleCategoryAdd}

                        >
                            <option value='1-Singer'>Singer</option>
                            <option value='2-Developing'>Developing</option>
                            <option value='3-Music'>Music</option>
                        </Select>

                        <Button colorScheme="green" type="submit">
                            Send
                        </Button>
                    </VStack>
                </Box>
            )}
        </>
    )
}
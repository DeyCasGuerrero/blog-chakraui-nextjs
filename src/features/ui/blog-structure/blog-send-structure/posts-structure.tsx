'use client';
import { Box, Button, HStack, Input, Select, Textarea, VStack, Text, Tag, FormControl } from "@chakra-ui/react";
import React, { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';
import { useSession } from 'next-auth/react';
import { postBlog } from "../../api/PostApi";
export default function BlogSendStructure() {

    const { data: session, status } = useSession();


    const defaultBlog = {
        title: '',
        content: '',
        categories: [] as string[], //evitar el never
        author: '',
    }

    const [data, setData] = useState(defaultBlog);

    const [categoriesAdded, setCategoriesAdded] = useState<string[]>([]);

    const handleChangeData = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleCategoryAdd = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        if (selectedCategory !== '') {
            setCategoriesAdded(prevCategories => {
                if (!prevCategories.includes(selectedCategory)) {
                    return [...prevCategories, selectedCategory];
                }
                return prevCategories;
            })
        }
    }

    const handleCategoryRemove = (categoryToRemove: string) => {
        setCategoriesAdded(prevCategories =>
            prevCategories.filter(category => category !== categoryToRemove)
        );
    };

    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        if(session?.user.email){
            const updatedData = {
                ...data,
                categories: categoriesAdded,
                author: session?.user.email || '',  
            };
            
            try {
                const success = await postBlog(updatedData);
                if (success) {
                    alert('Blog posted successfully');
                    
                }
            } catch (error) {
                alert('Failed to post blog');
            }
            console.log(updatedData);
        }else {
            alert('No se pudo obtener el email del usuario');
        }
        
        
    }

    return (
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
                                {category}
                                <Button
                                    variant='link'
                                    onClick={() => handleCategoryRemove(category)}
                                    aria-label={`Remove ${category}`}
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
                    <option value='option1'>Option 1</option>
                    <option value='option2'>Option 2</option>
                    <option value='option3'>Option 3</option>
                </Select>

                <Button colorScheme="green" type="submit">
                    Send
                </Button>
            </VStack>
        </Box>
    )
}
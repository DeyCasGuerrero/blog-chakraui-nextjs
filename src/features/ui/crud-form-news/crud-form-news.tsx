'use client';
import { Box, Button, Flex, Heading, Input, Select, Tag, VStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import ModelPopUp from "../model-popup/model-popup";
import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
export default function CrudFormNews() {
    const { data: session, status } = useSession();


    const [newsData, setNewsData] = useState({
        title: '',
        content: '',
        categories: [],
        author: '',
    });


    const [categoriesData, setCategoriesData] = useState<string[]>([]);


    const saveCategories = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const categories = e.target.value;
        setCategoriesData(prevCate => {
            if (!prevCate.includes(categories)) {
                return [...prevCate, categories];
            }
            return prevCate;
        });
    }



    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewsData(prevData => ({
            ...prevData,
            [name]: value
        }))

    }


    const handleDeleteCategory = (cate: string) => {
        setCategoriesData(prevCate => prevCate.filter(c => c!== cate));
    }



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const updateNews = {
            ...newsData,
            author: session?.user.email,
            categories: categoriesData,
        }

        console.log(updateNews);
    }



    return (
        <Flex justifyContent='center' mt={10} p={4}>
            {session?.user.role == 'ADMIN' && (
                <Box as="form" bg='slateblue' borderRadius='lg' p={4} color='white' minW={96} w='40rem' onSubmit={handleSubmit}>
                    <Heading textAlign='center'>Add something</Heading>
                    <VStack>
                        <span className="font-semibold p-2">
                            Title
                        </span>
                        <Input
                            type="text"
                            _focus={{ bg: 'black' }}
                            placeholder="title of the news"
                            name="title"
                            onChange={handleOnChange}
                            value={newsData.title}
                        >
                        </Input>
                    </VStack>

                    {/* popup model*/}
                    <ModelPopUp handleOnChange={handleOnChange} />

                    <Box mt={5}>
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

                            onChange={saveCategories}

                        >
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Box>
                    <Box m={10} h={10} display='flex' alignItems='center' gap={8} justifyContent='center'>
                        {categoriesData.length > 0 ? (
                            categoriesData.map((cate, index) => (
                                <Tag p={2}  key={index} bg='greenyellow' fontSize={15} color='black'>
                                    {cate}
                                    <Button
                                        variant='link'
                                        onClick={() => handleDeleteCategory(cate)}
                                        ml={1}
                                    >
                                        <AiOutlineClose color="red" size={18} />
                                    </Button>
                                </Tag>
                            ))
                        ) : (
                            <Heading textAlign='center'>No categories added</Heading>
                        )}
                    </Box>

                    <Flex justifyContent='center'>
                        <Button variant="primary" type="submit"  bg='blue'>
                            Send
                        </Button>
                    </Flex>
                </Box>
            )}
        </Flex>
    )
}
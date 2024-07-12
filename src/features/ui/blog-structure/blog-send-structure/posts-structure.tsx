'use client';
import { Box, Button, HStack, Input, Select, Textarea, VStack, Text, Tag, FormControl } from "@chakra-ui/react";
import { ChangeEvent, useEffect, useState } from "react";
import { AiOutlineClose } from 'react-icons/ai';


export default function BlogSendStructure() {
    
    const [value, setValue] = useState('');
    const [categoriesAdded, setCategoriesAdded] = useState<string[]>([]);

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value);
    }

    console.log(value)


    const handleCategoryAdd = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCategory = event.target.value;
        if(selectedCategory !== ''){
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

    console.log(categoriesAdded);

    const handleSubmit=()=>{

    }

    return (
        <FormControl p={10} w="full" border='1px solid' borderRadius="lg" flex={1} onSubmit={handleSubmit}>
            <VStack spacing={5}>
                <Input placeholder="Tiltle" type="text">
                </Input>
                <Textarea value={value}
                    onChange={handleChange}
                    placeholder="Write anything for your Blog"
                >
                </Textarea>
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
        </FormControl>
    )
}
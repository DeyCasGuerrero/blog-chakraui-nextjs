'use client';
import { Box, Button, Flex, Heading, Input, Select, VStack } from "@chakra-ui/react";
import { useSession } from "next-auth/react";
import ModelPopUp from "../model-popup/model-popup";
export default function CrudFormNews() {
    const { data: session, status } = useSession();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
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
                        >
                        </Input>
                    </VStack>

                    {/* popup model*/}
                    <ModelPopUp />
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


                        >
                            <option value='option1'>Option 1</option>
                            <option value='option2'>Option 2</option>
                            <option value='option3'>Option 3</option>
                        </Select>
                    </Box>

                    <Flex justifyContent='center'>
                        <Button variant="primary" type="submit" mt={5} bg='blue'>
                            Send
                        </Button>
                    </Flex>
                </Box>
            )}
        </Flex>
    )
}
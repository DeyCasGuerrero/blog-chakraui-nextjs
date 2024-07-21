import newsGetById from "@/app/api/apires/NewsGetByID"
import { Box, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { format } from 'date-fns';

export interface NewsGetById {
    idNews: number,
    title: string,
    content: string,
    createdAt: Date,
    updatedAt: Date,
}
export default async function NewPageOwn({ params }: { params: { id: number } }) {

    const dataNews: NewsGetById = await newsGetById(params.id);

    console.log(dataNews);

    return (
        <Flex minHeight='100vh' bg='black' p={10} justifyContent='center' >
            <Box maxW="container.xl" bg='#0C0D0D' w='100%' rounded='xl' p={8} >
                <Box >
                    <Flex justifyContent='end'>
                        <Flex bg='black' alignItems='center' gap={4} p={2} rounded='lg'>
                            <Text>Creado: {format(new Date(dataNews.createdAt), 'MMMM dd, yyyy')}</Text>
                            <Text>Actualizado: {format(dataNews.updatedAt, 'MMMM dd, yyyy')}</Text>
                        </Flex>
                    </Flex>

                    <Flex flexDirection='column' gap={10}>
                        
                        <Heading letterSpacing='5px' textDecor='underline' className="uppercase">{dataNews.title}</Heading>
                        
                        <VStack>
                            <Box>
                                <Text className="text-justify">{dataNews.content}</Text>
                            </Box>
                        </VStack>
                    </Flex>
                </Box>
            </Box>
        </Flex>
    )
}
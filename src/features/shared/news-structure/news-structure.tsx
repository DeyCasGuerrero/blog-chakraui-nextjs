import { Box, Container, Divider, Grid, Heading, VStack } from "@chakra-ui/react";
import { CardComponet } from '@/features/ui/index';
import { News } from "../types/new";
import {fetchApi} from "@/app/api/news/apiNews";
async function NewStructure() {

    const data:News[] = await fetchApi();
    
    return (
        <Box as="section" p={[
            0, 20
        ]}>
            <Container maxW="container.xl" >
                <VStack spacing={10} mt={10}>
                    <Heading as="h1" fontSize="4xl" size="md" color="white">
                        The latest Next.js news
                    </Heading>
                    <Divider />
                    <Grid
                        templateRows='repeat(2, 1fr)'
                        
                        templateColumns={[
                            'repeat(1, 1fr)',
                            'repeat(1, 1fr)',
                            'repeat(2, 1fr)',
                            'repeat(2, 1fr)',
                            'repeat(3, 1fr)',
                        ]}
                        gap={10}
                    >

                        {data.length > 0 ? (
                            <>
                                {data.map((data)=>(
                                    <CardComponet key={data.idNews} news={data} />
                                ))}
                            </>
                        ):(
                            <p>No hay noticias disponibles</p>
                        )}
                    </Grid>
                </VStack>
            </Container>
        </Box>
    )
}

export default NewStructure;
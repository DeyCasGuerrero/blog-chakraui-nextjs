import { Box, Container, Divider, Grid, Heading, VStack } from "@chakra-ui/react";
import { CardComponet } from '@/features/ui/index';
export default function NewStructure() {
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
                        <CardComponet />
                        <CardComponet />
                        <CardComponet />
                        <CardComponet />
                        <CardComponet />
                        <CardComponet />
                    </Grid>
                </VStack>
            </Container>
        </Box>
    )
}
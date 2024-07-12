import { ProfileStructure, PostStructure } from "@/features/ui/index";
import { Box, Container, Heading, HStack, Stack, VStack } from "@chakra-ui/react";
import { PostCards} from "@/features/ui/index";

export default function BlogPage() {
    return (
        <Box as="main" bg="#0D1117" minHeight="100vh">
            <Container maxW="container.lg" h="100%" display="flex" flexDirection="column">
                <Stack direction={["column", "column" ,"row"]} spacing={8} mt={10}>
                    <ProfileStructure />
                    <VStack align="stretch" spacing={8}>
                        <PostStructure />
                        <Box>
                            <Heading p={4}> Your Posts</Heading>
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                            <PostCards />
                        </Box>
                    </VStack>
                </Stack>
            </Container>
        </Box>
    );
}

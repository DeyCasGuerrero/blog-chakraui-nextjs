import { Box, Container, Flex, Text, VStack } from "@chakra-ui/react";

export default function NewStructure() {
    return (
        <Box as="section"
            bg="slateblue"
            p={[
                4, 20
            ]}
        >
            <Flex>
                <VStack bg="blue.900" borderRadius="lg" p={4} w={[
                    "100%", "96"
                ]}>

                    <Box>
                        <Text>Section 1</Text>
                    </Box>
                    <Container>
                        We help you create your blog and
                        stay connected with the latest informationundefined
                        We help you create your blog and stay connected with the
                        latest informationundefined
                    </Container>
                </VStack>
            </Flex>

        </Box>
    )
}
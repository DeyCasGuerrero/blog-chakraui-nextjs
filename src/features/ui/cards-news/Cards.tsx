import { Avatar, Flex, HStack, Link, Tag, TagLabel } from "@chakra-ui/react";
import { Box, CardBody, Heading, VStack, Text, Card } from "@chakra-ui/react";

export default function CardComponent() {
    return (
        <Card bg="black" border="1px solid" rounded="lg">
            <CardBody>
                <Flex justifyContent="space-between">
                    <Tag size='lg' colorScheme='red' borderRadius='full'>
                        <Avatar
                            src='https://bit.ly/sage-adebayo'
                            size='xs'
                            name='Segun Adebayo'
                            ml={-1}
                            mr={2}
                        />
                        <TagLabel>Segun</TagLabel>
                    </Tag>
                    <Text>
                        14/43/2
                    </Text>
                </Flex>
                <VStack spacing={5}>
                    <Text color="white">Nextjs</Text>
                    <Text color="white">
                        A popular JavaScript framework developed by Vercel.
                        Its built on top of React and offers server-side rendering,
                        static site generation, and powerful performance optimizations.
                        Next.js allows you to create dynamic and interactive web applications.
                    </Text>
                    <HStack>
                        <Tag>Ai</Tag>
                        <Tag>Wa</Tag>
                        <Tag>Papuh</Tag>
                    </HStack>
                    <Link
                        href={`news/`}
                        bg="gray.900"
                        _hover={{
                            transform: "scale(1.1)",
                            transition: "transform 0.5s ease-out",

                        }}
                    >
                        Read more
                    </Link>
                </VStack>
            </CardBody>
        </Card>
    )
}
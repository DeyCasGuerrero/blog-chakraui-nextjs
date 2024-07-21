import { News } from "@/features/shared/types/new";
import { Avatar, Flex, HStack, Link, Tag, TagLabel } from "@chakra-ui/react";
import { Box, CardBody, Heading, VStack, Text, Card } from "@chakra-ui/react";

export default function CardComponent({news}:{news : News}) {

    return (
        <Card bg="black" border="1px solid" rounded="lg" key={news.idNews}>
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
                        <TagLabel>{news.author}</TagLabel>
                    </Tag>
                    <Text>
                        14/43/2
                    </Text>
                </Flex>
                <VStack spacing={5}>
                    <Text color="white">{news.title}</Text>
                    <Text color="white">
                        {news.content}
                    </Text>
                    <HStack>
                        <Tag>Ai</Tag>
                        <Tag>Wa</Tag>
                        <Tag>Papuh</Tag>
                    </HStack>
                    <Link
                        href={`news/${news.idNews}`}
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
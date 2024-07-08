
import {
    Box, Card, CardBody, CardHeader, Center, Container,
    Divider, Flex, Heading, HStack, Link, Stack, Text, VStack
} from "@chakra-ui/react";

export default function RootNewStructure() {
    return (

        <Box as="section"
            bgGradient="linear(to-b,#020202,#1A1A1A)"
            p={[
                4, 20
            ]}
            gap="8"
            borderBottom="1px solid gray"
            overflow="hidden"
        >
            <VStack spacing="10">
                <Heading>What's news</Heading>
                <Divider></Divider>
                <Stack direction={[
                    "column", "row"
                ]}>

                    <Card
                        w={[
                            "100%", "96"
                        ]}
                        color="whitesmoke"
                        bg="black"
                        borderTop="1px solid yellow"
                    >
                        <CardHeader>
                            <Heading>Section 1</Heading>
                        </CardHeader>
                        <CardBody >
                            We help you create your blog and
                            stay connected with the latest informationundefined
                            We help you create your blog and stay connected with the
                            latest informationundefined
                        </CardBody>
                    </Card>

                    <Card w={[
                        "100%", "96"
                    ]}
                        color="whitesmoke"
                        bg="black"
                        borderTop="1px solid yellow"
                    >
                        <CardHeader>
                            <Heading>Section 1</Heading>
                        </CardHeader>
                        <CardBody>
                            We help you create your blog and
                            stay connected with the latest informationundefined
                            We help you create your blog and stay connected with the
                            latest informationundefined
                        </CardBody>
                    </Card>

                    <Card w={[
                        "100%", "96"
                    ]}
                        color="whitesmoke"
                        bg="black"
                        borderTop="1px solid yellow"
                        >
                        <CardHeader>
                            <Heading>Section 1</Heading>
                        </CardHeader>
                        <CardBody>
                            We help you create your blog and
                            stay connected with the latest informationundefined
                            We help you create your blog and stay connected with the
                            latest informationundefined
                        </CardBody>
                    </Card>

                    <Card w={[
                        "100%", "96"
                    ]}
                        color="whitesmoke"
                        bg="black"
                        borderTop="1px solid yellow"
                        >
                        <CardHeader>
                            <Heading>Section 1</Heading>
                        </CardHeader>
                        <CardBody>
                            We help you create your blog and
                            stay connected with the latest informationundefined
                            We help you create your blog and stay connected with the
                            latest informationundefined
                        </CardBody>
                    </Card>
                </Stack>
                <Link href="/news"
                    bg="slateblue"
                    _hover={{
                        background: "black",
                        border: "1px solid",
                        transform: "scale(1.2)",
                        transition: "background 0.5s ease-out, transform 0.5s ease-out, border 0.5s ease-out",
                    }}
                >
                    View more
                </Link>
            </VStack>

        </Box>
    )
}
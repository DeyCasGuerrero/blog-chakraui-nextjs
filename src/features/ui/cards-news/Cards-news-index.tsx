import { Card, CardBody, CardHeader, Heading } from "@chakra-ui/react";

export default function CardsNewIndex() {
    return (
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
    )
}

import {
    Box,
    Divider, Heading, Link, Stack, VStack
} from "@chakra-ui/react";
import { CardsNewIndex } from "@/features/ui/index";
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
                <Heading>Whats news</Heading>
                <Divider></Divider>
                <Stack
                    direction={[
                        "column","column","column","column", "row"
                    ]}
                    spacing={8}
                >
                    <CardsNewIndex />
                    <CardsNewIndex />
                    <CardsNewIndex />
                    <CardsNewIndex />
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
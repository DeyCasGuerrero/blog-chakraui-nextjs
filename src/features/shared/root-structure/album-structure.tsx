import { Box, Flex, Grid, GridItem, Heading, Image, Container, VStack } from "@chakra-ui/react";
import styles from "../styles/home.module.css";

export default function AlbumStructure() {
    
    return (
        <Box as="section"
            minHeight="100vh"
            p={[
                2, 20
            ]}
        >
            <Container maxW="container.lg">

                <VStack  spacing={32}>

                    <Heading as="h1"
                        bgClip="text"
                        
                        bgGradient="linear(to-r, slateblue 10%, red 30%)"
                        fontSize={[
                            "3xl", "5xl"
                        ]}
                    >
                        The website you can trust
                    </Heading>
                    <Grid
                        templateColumns={[
                            'repeat(1, 1fr)', // 1 columna en pantallas pequeñas
                            'repeat(2, 1fr)', // 2 columnas en pantallas medianas
                            'repeat(4, 1fr)'  // 4 columnas en pantallas grandes
                        ]}
                        gap={4}
                        templateRows={[
                            'repeat(2, 1fr)'
                        ]}
                        boxShadow={"inset 0 -80px 130px 0px rgba(0, 0, 0, 0.9)"}
                    >
                        <GridItem

                            display="flex"
                            colSpan={[
                                1, // 1 columna en pantallas pequeñas
                                2, // 1 columna en pantallas medianas
                                1  // 1 columna en pantallas grandes
                            ]}

                            

                        >
                            <Image
                                borderRadius="lg"
                                src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-audible.6063405a.png&w=640&q=75"
                                alt="roxy"
                                objectFit="cover"
                                zIndex={-1}
                                filter={"grayscale(60%)"}
                            />
                        </GridItem>

                        <GridItem
                            colSpan={[
                                1, // 1 columna en pantallas pequeñas
                                1, // 1 columna en pantallas medianas
                                2  // 1 columna en pantallas grandes
                            ]}

                        >
                            <Image
                                src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-sonos.a3dbc334.png&w=640&q=75"
                                alt="xd"
                                objectFit="cover"
                                borderRadius="lg"
                                filter={"grayscale(20%)"}
                            />
                        </GridItem>

                        <GridItem

                            display="flex"
                            rowSpan={[
                                1, // 1 fila en pantallas pequeñas
                                1, // 1 fila en pantallas medianas
                                2  // 2 filas en pantallas grandes
                            ]}
                            
                            boxShadow={"inset 0 -80px 130px -120px rgba(0, 0, 0, 0.9)"}
                    
                        >
                            <Image
                                src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-twitch.4ed9ddb3.png&w=640&q=75"
                                alt="roxy"
                                objectFit="cover"
                                zIndex={-1}
                                borderRadius="lg"
                                
                            />
                        </GridItem>

                        <GridItem

                            display="flex"

                            colSpan={[
                                1, // 1 columna en pantallas pequeñas
                                2, // 2 columnas en pantallas medianas
                                2  // 1 columna en pantallas grandes
                            ]}
                            
                        >
                            <Image
                                src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-notion.2bd1f0c5.png&w=640&q=75"
                                alt="wa"
                                objectFit="cover"
                                borderRadius="lg"
                                zIndex={-1}
                            />
                        </GridItem>

                        <GridItem

                            display="flex"
                            colSpan={[
                                1, // 1 columna en pantallas pequeñas
                                2, // 2 columnas en pantallas medianas
                                1  // 1 columna en pantallas grandes
                            ]}
                            boxShadow={"inset 0 -80px 130px -120px rgba(0, 0, 0, 0.9)"}
                        >
                            <Image
                                src="https://nextjs.org/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpreview-nike.ae99d521.png&w=640&q=75"
                                alt="roxy"
                                objectFit="cover"
                                w="100%"
                                h="100%"
                                borderRadius="lg"
                                zIndex={-1}
                                
                            />
                        </GridItem>
                    </Grid>
                </VStack>
            </Container>
        </Box>
    )
}
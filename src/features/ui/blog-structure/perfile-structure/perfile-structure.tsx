'use client';
import { Avatar, Box, Button, Flex, Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { useSession } from "next-auth/react";

export default function PefileStructure() {

    const { data:session, status }=useSession();

    return (
        <Box p={10}>
            <VStack spacing={10}>
                <VStack direction='column' spacing={10}>
                    <Avatar src='https://bit.ly/kent-c-dodds'
                        name="dey" width={64} height={64}>

                    </Avatar>
                    <VStack spacing={5} fontWeight='semibold'>
                        <Text fontSize={34}>
                            {session?.user.name}
                        </Text>
                        <Text fontSize={20}>
                            {session?.user.role}
                        </Text>
                        <Text fontSize={20}>
                            {session?.user.email}
                        </Text>
                        <Text border='1px solid' borderRadius='lg' p={2}>
                            Software Engineer, xddddd
                        </Text>
                        <Button colorScheme="blue">
                            Edit Profile
                        </Button>

                    </VStack>

                    <Flex alignItems='center'>
                        <FaLocationDot color="white" size={20} />
                        Located in {session?.user.country}
                    </Flex>


                </VStack>

            </VStack>
        </Box>
    )
}
import { Box, Button, Flex, FormControl, Input, Stack, VStack } from "@chakra-ui/react";
import { LoginStructure } from '@/features/login/index';
export default function Login() {

    return (
        <Flex minHeight='100vh' flexDirection='column' alignItems='center' justifyContent='center' bg='whitesmoke'>
            <LoginStructure/>
        </Flex>
    )
}
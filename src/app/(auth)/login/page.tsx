'use client';
import { Box, Button, Flex } from "@chakra-ui/react";
import { useSession, signIn } from "next-auth/react";
export default function Login(){
    const {data:session, status }=useSession();
    console.log({session, status})
    return(
        <Flex flexDirection='column' alignItems='center' justifyContent='center' minHeight='100vh'>
            Login Page
            <Button bg='green' onClick={()=>signIn()}>
                Login
            </Button>
        </Flex>
    )
}
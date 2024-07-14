'use client';
import { LoginTypes } from "@/features/ui/types/formTypes";
import { Box, Button, Flex, FormControl, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import { useSession, signIn, SignInResponse } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
export default function LoginStructure() {
    const { data: session, status } = useSession();
    console.log({ session, status })

    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated"){
            router.push('/');
        }
    }, [status, router]);

    const [data, setData] = useState({
        email: '',
        password: ''
    });


    const onChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setData(pevData => ({
            ...pevData,
            [name]: value
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(data);
        try {
            const result:SignInResponse | undefined = await signIn('credentials',{
                redirect:false,
                email: data.email,
                password: data.password
            });

            if(!result){
                throw new Error('Failed to sign in');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (
        <Box as="form" bg='AppWorkspace' w='96' p={5} borderRadius='lg' onSubmit={handleSubmit} shadow='lg'>
            <Flex mb={5} justifyContent='center'>
                <Heading as="h1" fontSize='5xl' size="lg" bgClip='text' bgGradient='linear(to-r, blue , red 90%)'>
                    BlogOwn
                </Heading>
            </Flex>
            <Stack spacing={5}>
                <span className="text-black text-left font-semibold px-1"> Email </span>
                <Input
                    name="email"
                    placeholder="example@example.com"
                    type="email"
                    color='black'
                    onChange={onChangeValues}
                    value={data.email}
                >
                </Input>

                <span className="text-black text-left font-semibold px-1"> Password </span>
                <Input
                    name="password"
                    type="password"
                    placeholder="password"
                    color='black'
                    
                    value={data.password}
                    onChange={onChangeValues}
                >
                </Input>

                <Button bg='green' _hover={{
                    bg: 'green.700',
                    transition: 'bg 0.2s ease-in'
                }}
                    type="submit"
                >
                    Login
                </Button>
            </Stack>
            Login Page
        </Box>
    )
}
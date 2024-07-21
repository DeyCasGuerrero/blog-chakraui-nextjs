'use client';
import { LoginTypes } from "@/features/ui/types/formTypes";
import { Box, Button, Flex, FormControl, Heading, Input, Stack, VStack } from "@chakra-ui/react";
import { useSession, signIn, SignInResponse } from "next-auth/react";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
export default function LoginStructure() {
    const { data: session, status } = useSession();
    console.log({ session, status })

    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push('/');
        }
    }, [status, router]);

    const [user, setUser] = useState({
        email: '',
        password: ''
    });


    const onChangeValues = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUser(pevUser => ({
            ...pevUser,
            [name]: value
        }));
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(user);
        try {
            const result: SignInResponse | undefined = await signIn('credentials', {
                redirect: false,
                email: user.email,
                password: user.password
            });

            if (!result) {
                throw new Error('Failed to sign in');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (
        <Box as="form" position='relative' overflow='hidden' bg='AppWorkspace' w='96' p={5} borderRadius='lg' onSubmit={handleSubmit} shadow='lg'
            _before={{
                content: '""',
                position: 'absolute',
                top: 0,
                left: '270px',
                width: '100%',
                height: '100%',
                transform: 'rotate(45deg)',
                background: 'green.700',
                
                borderRadius: 32,
            }}
            
        >
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
                    value={user.email}
                >
                </Input>

                <span className="text-black text-left font-semibold px-1"> Password </span>
                <Input
                    name="password"
                    type="password"
                    placeholder="password"
                    color='black'

                    value={user.password}
                    onChange={onChangeValues}
                >
                </Input>
                <Box>
                    <Link href='/register' className="hover:underline text-violet-700 font-semibold" >Don&apos;t Have a account?</Link>
                </Box>

                <Button colorScheme="green"
                    type="submit"
                >
                    Login
                </Button>
            </Stack>
            Login Page
        </Box>
    )
}
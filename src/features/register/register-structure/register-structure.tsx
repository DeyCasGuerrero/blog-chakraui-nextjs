'use client';
import { Box, Button, Flex, Heading, Input, Select, VStack } from "@chakra-ui/react";
import { countries } from '../utils/countrys';
import { postUser } from "../api/RegisterApi";
import { useState } from "react";
import { useRouter } from "next/navigation";
function RegisterStructure() {

    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        country: ''
    });

    const [repeatPassword, setRepeatPassword] = useState<string>('');

    const router = useRouter();


    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = event.target;

        setUser(prevUser => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleRepeatPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRepeatPassword(e.target.value);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(user)
        if (user.password !== repeatPassword) {
            alert('Las contraseñas no coinciden');
            return;
        }

        try {
            const res = await postUser(user);
            console.log("Response:", res);
            router.push('/login');
        } catch (error) {
            console.error("Error:", error);
        }
    }

    return (
        <Box as="form" p={5} w={96} bg='white' rounded='xl' boxShadow='lg' color='GrayText' onSubmit={handleSubmit}>
            <Heading color='black'>Register Now !!</Heading>
            <Box mt={5}>
                <label htmlFor="name" className="text-black font-semibold p-2">Name</label>
                <Input required onChange={handleOnChange} value={user.name} type='text' id='name' name='name' title="Name" />
            </Box>
            <Box mt={5}>
                <label htmlFor="email" className="text-black font-semibold p-2">Email</label>
                <Input required onChange={handleOnChange} value={user.email} type='email' id='email' name='email' title="Email" />
            </Box>
            <Box mt={5}>
                <label htmlFor="password" className="text-black font-semibold p-2">Password</label>
                <Input required onChange={handleOnChange} value={user.password} title="Password" type='password' id='password' name='password' />
            </Box>
            <Box mt={5}>
                <label htmlFor="repeatpassword" className="text-black font-semibold p-2">Repeat password</label>
                <Input required type='password' onChange={handleRepeatPasswordChange} value={repeatPassword} title="Repeat password" id='repeatpassword' name='password' />
            </Box>
            <Flex alignItems='center' gap={5} mt={5} >
                <label htmlFor="country" className="text-black font-semibold p-2">Country</label>
                <Select required name="country" placeholder="Choose your country" value={user.country} id="country" title="Country" onChange={handleOnChange} >
                    {countries && (
                        <>
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                        </>
                    )}
                </Select>
            </Flex>
            <Flex alignItems='center' justifyContent='center' mt={10}>
                <Button colorScheme="blue" type="submit">
                    Sign Up
                </Button>
            </Flex>
        </Box>
    )
}

export default RegisterStructure;
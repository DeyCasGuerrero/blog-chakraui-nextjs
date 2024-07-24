"use client";
import { Avatar, Box, Button, Flex, Heading, HStack, Icon, Input, Text, VStack } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { storage } from "@/services/firebase/config";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState } from "react";
import { FaEdit } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import useGetBio from "../../api/getBio";
import { profileTypes } from "../../types/profile";

export default function ProfileStructure() {

    const { data: session, status } = useSession();

    const { getBio } = useGetBio();

    const [bio, setBio] = useState<profileTypes | null>(null);
    const [isClickEditable, setIsClickEditable] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        bio: '',
    });


    useEffect(() => {
        if (status === 'authenticated') {
            const fetchBio = async () => {
                const fetchedBio = await getBio(session?.user?.email || '');
                setBio(fetchedBio);
            };

            fetchBio();
        }
    }, [status, session?.user?.email]);

    // // Actualizar la biografía cuando `bio` cambie
    // useEffect(() => {
    //     if (status === 'authenticated' && bio) {
    //         const update = async () => {
    //             await updateBio(bio);
    //         };

    //         update();
    //     }
    // }, [status, bio, updateBio]);

    if (status === 'loading') return <div>Loading...</div>;
    if (!bio) return <div>No bio available</div>;

    async function uploadFile(file: File) {

        if (session?.user) {
            const imgName = uuidv4();
            const avatarRef = ref(storage, `AvatarLinks/${session.user.email}/${imgName}`);

            try {
                await uploadBytes(avatarRef, file);
                const downloadURL = await getDownloadURL(avatarRef);
            } catch (error) {
                console.error("Error al subir la imagen:", error);
                throw error;
            }
        } else {
            throw new Error("No hay usuario autenticado.");
        }
    }

    const handleClick = () => {
        setIsClickEditable(!isClickEditable);
    };

    const handleChangeFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target as HTMLInputElement;
        try {
            if (target && target.files && target.files.length > 0) {
                const result = target.files[0];
                uploadFile(result);

            } else {
                console.error("No files selected or target is not a file input");
            }
        } catch (error) {
            console.error(error)
        }
    }





    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    };


    return (
        <Box p={10}>

            <VStack spacing={10}>

                <VStack direction='column' spacing={10}>
                    <Box display="flex" alignItems="center" justifyContent="center" flexDirection="column" position="relative">
                        <label htmlFor="profileUpdate" style={{ cursor: 'pointer', position: 'relative' }}>
                            <Avatar
                                _hover={{
                                    opacity: 0.7,
                                    transition: 'opacity 0.3s ease-in-out',
                                }}
                                src={bio.urlImg}
                                name={session?.user.name}
                                width={64}
                                height={64}
                                overflow='hidden'
                            />
                            <Box
                                position="absolute"
                                top="0"
                                left="0"
                                width="100%"
                                height="100%"
                                rounded='full'
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                bg="rgba(0, 0, 0, 0.6)"
                                opacity="0"
                                _hover={{ opacity: 1 }}
                                transition="opacity 0.3s ease-in-out"
                            >
                                <Icon as={FaEdit} boxSize={6} color="white" />
                            </Box>
                            <Input
                                id="profileUpdate"
                                type="file"
                                accept=".jpg, .png"
                                display="none"
                                onChange={handleChangeFile}
                            />
                        </label>
                    </Box>
                    <VStack spacing={5} fontWeight='semibold'>
                        {isClickEditable ? (
                            <>
                                <label className="text-left w-full" htmlFor="name">Name</label>
                                <Input onChange={handleOnChange} id="name" fontSize='md' value={formValues.name || undefined} />
                                <label className="text-left w-full" htmlFor="email">Email</label>
                                <Input onChange={handleOnChange} id="email" fontSize='md' value={formValues.email || undefined} />

                                <label className="text-left w-full" htmlFor="bio">Bio</label>
                                {/* PROFILE'S DESCRIPTION */}
                                <Input onChange={handleOnChange} id="bio" fontSize='md' value={formValues.bio || undefined} />

                                <HStack>
                                    <Button colorScheme="red" onClick={handleClick}>
                                        Cancel
                                    </Button>
                                    <Button colorScheme="blue" >
                                        Send
                                    </Button>
                                </HStack>
                            </>
                        ) : (

                            //cuando cancela la edición
                            <>
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
                                    {bio.description}
                                </Text>
                                <Flex alignItems='center' gap={2}>
                                    <FaLocationDot color="white" size={20} />
                                    Located in {session?.user.country}
                                </Flex>
                                <Button colorScheme="blue" onClick={handleClick}>
                                    Edit Profile
                                </Button>
                            </>
                        )}


                    </VStack>
                </VStack>

            </VStack>
        </Box>
    )
}
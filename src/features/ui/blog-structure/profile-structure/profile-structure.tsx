"use client";
import { Avatar, Box, Button, Flex, Heading, HStack, Icon, Input, Text, VStack } from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";
import { useSession } from "next-auth/react";
import { storage } from "@/services/firebase/config";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import React, { useEffect, useState, useCallback } from "react";
import { FaEdit } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';
import { useProfileStore } from "@/app/store/profileStore";
import ImgAlert from "../../alerts/ImgAlert";

interface ProfileProps {
    email: string;
}

export default function ProfileStructure({ email }: ProfileProps) {

    const { data: session, status } = useSession();

    const { idProfile, updateProfile, userEmail, description, urlImg, getProfile } = useProfileStore();
    const [isClickEditable, setIsClickEditable] = useState(false);
    const [imgProfile, setImgProfile] = useState<string | null>(null);
    const [showAlert, setShowAlert] = useState(false);
    const [formValues, setFormValues] = useState({
        name: '',
        email: '',
        bio: '',
    });

    useEffect(() => {
        getProfile(email);
    }, []);

    useEffect(() => {
        if (session?.user.token) {
            if (imgProfile) {
                updateProfile(imgProfile, session.user.token, idProfile);
            }
        }
    }, [imgProfile])


    async function uploadFile(file: File) {

        if (session?.user) {
            const imgName = uuidv4();
            const avatarRef = ref(storage, `AvatarLinks/${session.user.email}/${imgName}`);

            try {
                await uploadBytes(avatarRef, file);
                const downloadURL = await getDownloadURL(avatarRef);
                setImgProfile(downloadURL);
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

    const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        try {
            if (target instanceof HTMLInputElement) {
                if (target && target.files && target.files.length > 0) {
                    const result = target.files[0];

                    console.log(result);
                    uploadFile(result);

                } else {
                    console.error("No files selected or target is not a file input");
                }
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        if (imgProfile) {
            setShowAlert(true);
        }
    }, [imgProfile, handleChangeFile]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    };


    return (
        <Box p={10}>

            <VStack spacing={10}>

                <VStack direction='column' spacing={10}>
                    <Box display="flex" alignItems="center" h={'auto'} justifyContent="center" flexDirection="column" position="relative">
                        <label htmlFor="profileUpdate" style={{ cursor: 'pointer', position: 'relative' }}>
                            <Avatar
                                _hover={{
                                    
                                    opacity: session?.user?  0.7: 1,
                                    transition: 'opacity 0.3s ease-in-out',
                                }}
                                src={urlImg}
                                name={session?.user.name}
                                width={64}
                                height={64}
                                overflow='hidden'
                            />
                            {session?.user && (
                                <>
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

                                </>
                            )}
                        </label>
                        {/**  Componente de Alerta en el page */}
                        {showAlert && (
                            <ImgAlert message="Are you sure to update this img?" onClose={() => setShowAlert(false)}></ImgAlert>
                        )}
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
                                    {userEmail}
                                </Text>
                                <Text border='1px solid' borderRadius='lg' p={2}>
                                    {description}
                                </Text>
                                <Flex alignItems='center' gap={2}>
                                    <FaLocationDot color="white" size={20} />
                                    Located in {session?.user.country}
                                </Flex>
                                {session?.user && (
                                    <Button colorScheme="blue" onClick={handleClick}>
                                        Edit Profile
                                    </Button>
                                )}
                            </>
                        )}


                    </VStack>
                </VStack>

            </VStack>
        </Box>
    )
}
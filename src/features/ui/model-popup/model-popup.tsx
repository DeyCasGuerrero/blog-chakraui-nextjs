'use client';
import { Button, useDisclosure, ModalOverlay, ModalContent, ModalCloseButton, ModalHeader, Modal, ModalBody, ModalFooter, Box, Input, Textarea, VStack } from "@chakra-ui/react";

export default function ModelPopUp() {

    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <Box mt={5}>
            <Button onClick={onOpen} bg='greenyellow' color='black' _hover={{
                bg: 'green.300'
            }}>Add content</Button>

            <Modal
                isCentered
                onClose={onClose}
                isOpen={isOpen}
                motionPreset="slideInBottom"
            >
                <ModalOverlay /> {/** this add opacity behind  */}

                <ModalContent bg='slateblue'>
                    <ModalHeader color='yellowgreen' textAlign='center'>Add content</ModalHeader>
                    <ModalBody>
                        <VStack>
                            <Textarea bg="white" color='GrayText' rows={10} placeholder="Enter content" />
                            
                            <Button bg='yellowgreen' onClick={onClose}>Save</Button>
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <Button bg='red' onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}
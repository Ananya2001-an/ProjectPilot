import React, { useState } from 'react';
import {
 Box,
 FormControl,
 FormLabel,
 Input,
 Button,
 useToast,
 Center,
 Heading
} from "@chakra-ui/react";

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = () => {
        // Add your signup logic here
        console.log('Signing up...');
    };

    return (
    <Center>
        <Box w="100%" maxW="500px" p={5}>
            <Heading as="h2" size="lg" mb={5}>
                Sign Up
            </Heading>
            <FormControl id="name" isRequired>
                <FormLabel>Name</FormLabel>
                <Input type="text" />
            </FormControl>
            <FormControl id="email" isRequired mt={5}>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired mt={5}>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
            </FormControl>
            <Button colorScheme="blue" mt={5} width="100%" onClick={e => handleSignUp(e)}>
                Sign Up
            </Button>
        </Box>
    </Center>
    );
};

export default SignUp;

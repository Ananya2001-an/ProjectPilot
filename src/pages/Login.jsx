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


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = ()=>{
        console.log('Logging in...');
    }

    return (
    <Center>
        <Box w="100%" maxW="500px" p={5}>
            <Heading as="h2" size="lg" mb={5}>
                Login
            </Heading>
            <FormControl id="email" isRequired mt={5}>
                <FormLabel>Email</FormLabel>
                <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired mt={5}>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
            </FormControl>
            <Button colorScheme="blue" mt={5} width="100%" onClick={e => handleLogin(e)}>
                Login
            </Button>
        </Box>
    </Center>
    )
}

export default Login;

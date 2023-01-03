import React, {useState} from 'react';

import { Flex, Text, Input, Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import axios from 'axios';
const Axios = axios.create();


const Login = () =>{

    let navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    const [isLoginValid, setValidLogin] = useState(true);
    const [isPasswrodValid, setValidPassword] = useState(true);

    const handleLogin = (event) => {
        setLogin(event.target.value)
        setValidLogin(validationLogin(event.target.value))
    }

    const handlePassword = (event) => {
        setPassword(event.target.value)
        setValidPassword(validationPassword(event.target.value))
    }

    function validationPassword(pass){
        return pass.length > 5
    }

    function validationLogin(log){
        return log.length > 5
    }

    const logare = async () => {
        if(isLoginValid && isPasswrodValid){
            navigate('/')
        }
    }
    
    const goToRegistrationScreen = () => {
        navigate('/registration')
    }

    const goToPasswordReceiveScreen = () => {
        alert("go to password screen")
    }



    const loginHandle = async (e) => {
        e.preventDefault();
        
        try {
            const response = await Axios.post("http://localhost:8081/api/auth/signin", {
                "username": login,
                "password": password
            })
            .then((response) => {
                console.log(response);
            })

           
            navigate("/login");

        } catch (err) {
            console.log(err);
        }
    };



  return (
    <Flex width="100%" height="100vh" flexDirection="column" bg="#091123">            
        <Flex justifyContent="center" height="100%" alignItems="center" zIndex='100'>
            <Flex width="70%" bg="#070823" borderRadius="25px" flexDirection="column" alignItems="center" padding="50px">
                <Text color="white" fontSize="30px" marginTop="20px">Logare</Text>

                <Input borderColor={isLoginValid ? "" : "red"} onChange={handleLogin} placeholder='Login' width='90%' maxWidth="300px" borderRadius="25px" color='white' marginStart="20px" marginTop="40px"/>
                <Input borderColor={isPasswrodValid ? "" : "red"} onChange={handlePassword} placeholder='Parola' width='90%' maxWidth="300px" borderRadius="25px" color='white' marginStart="20px" marginTop="20px" type="password" />

                <Flex>
                    <Button borderRadius='10px' bg="transparent"  colorScheme='transparent' margin="5px" onClick={goToRegistrationScreen} marginTop="30px">Înregistrare</Button>
                    <Button borderRadius='10px' margin="5px" onClick={loginHandle} marginTop="30px">Logare</Button>
                </Flex>
                <Button borderRadius='10px' margin="5px" bg="transparent" color="white" onClick={goToPasswordReceiveScreen} fontSize="10px" colorScheme='transparent'><u>Restabilește parola</u></Button>
            </Flex>
        </Flex>
    </Flex>
  );
}


export default Login;
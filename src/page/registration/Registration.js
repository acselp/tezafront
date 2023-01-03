import React, {useState} from 'react';

import { Flex, Text, Input, Button } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
// import axios from "../../config/axios";
// import authApi from '../../api/axios';
import axios from 'axios';

const Registration = () => {

    let navigate = useNavigate();
    const Axios = axios.create();

    const [nume, setNume] = useState("");
    const [prenume, setPrenume] = useState("");
    const [nrTelefon, setTelefon] = useState("");
    const [email, setEmail] = useState("");
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [roles, setRoles] = useState("ROLE_USER");

    const [isNumeValid, setValidNume] = useState(true);
    const [isPrenumeValid, setValidPrenume] = useState(true);
    const [isNrTelefonValid, setValidNrTelefon] = useState(true);
    const [isEmailValid, setValidEmail] = useState(true);
    const [isPasswrodValid, setValidPassword] = useState(true);
    const [isLoginValid, setValidLogin] = useState(true);
    const userRef = useRef();
    const errRef = useRef();
    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);
    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);
    const [matchPwd, setMatchPwd] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);
    const [errMsg, setErrMsg] = useState("");
    const [success, setSuccess] = useState(false);
// This will be used with the login
    
    const handleNume = (event) => {
        setNume(event.target.value)
        setValidNume(validationNume(event.target.value))
    }

    const handlePrenume = (event) => {
        setPrenume(event.target.value)
        setValidPrenume(validationPrenume(event.target.value))
    }

    const handleTelefon = (event) => {
        setTelefon(event.target.value)
        setValidNrTelefon(validationNrTelefon(event.target.value))
    }

    const handleEmail = (event) => {
        setEmail(event.target.value)
        setValidEmail(validationEmail(event.target.value))
    }

    const handleLogin = (event) => {
        setLogin(event.target.value)
        setValidLogin(validationLogin(event.target.value))
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
        setValidPassword(validationPassword(event.target.value))
    }

    const handleRepeatPassword = (event) => {
        setRepeatPassword(event.target.value)
        setValidPassword(event.target.value == password && event.target.value != "")
    }

    function validationNume(nume){
        return nume.length > 5
    }

    function validationPrenume(prenume){
        return prenume.length > 5
    }

    function validationNrTelefon(telefon){
        return telefon.length > 5
    }

    function validationEmail(email){
        return email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
    }


    function validationPassword(pass){
        return pass.length > 5
    }

    function validationLogin(log){
        return log.length > 5
    }

    const register = async (e) => {
        e.preventDefault();
        
        try {
            const response = await Axios.post("http://localhost:8081/api/auth/signup", {
                "username": login,
                "password": password,
                "email": email,
                "roles": roles
            })

            setSuccess(true);
            
            setLogin("");
            setPassword("");
            setEmail("");
            setRoles("");
            navigate("/login");

        } catch (err) {
            if (!err?.response) {
                setErrMsg("No Server Response");
            } else if (err.response?.status === 409) {
                setErrMsg("Username Taken");
            } else {
                setErrMsg("Registration Failed");
            }
                errRef.current.focus();
        }
    };

  return (
    <Flex width="100%" height="100vh" flexDirection="column" bg="#091123">            
        <Flex justifyContent="center" height="100%" alignItems="center" zIndex='100'>
            <Flex width="70%" bg="#070823" borderRadius="25px" flexDirection="column" alignItems="center" padding="50px">
                <Text color="white" fontSize="30px" marginTop="20px">Înregistrare</Text>

                {/* <Input borderColor={isNumeValid ? "" : "red"} onChange={handleNume} placeholder='Nume' width='90%' maxWidth="300px" borderRadius="25px" color='white' marginStart="20px" marginTop="40px"/>
                <Input borderColor={isPrenumeValid ? "" : "red"} onChange={handlePrenume} placeholder='Prenume' width='90%' maxWidth="300px" borderRadius="25px" color='white' marginStart="20px" marginTop="20px"/> */}
                <Input borderColor={isLoginValid ? "" : "red"} onChange={handleLogin} placeholder='Login' width='90%' maxWidth="300px" borderRadius="25px" color='white' marginStart="20px" marginTop="20px"/>
                <Input borderColor={isEmailValid ? "" : "red"} onChange={handleEmail} placeholder='Email' width='90%' maxWidth="300px" borderRadius="25px" color='white' marginStart="20px" marginTop="20px"/>
                {/* <Input borderColor={isNrTelefonValid ? "" : "red"} onChange={handleTelefon} placeholder='Nr de telefon' width='90%' maxWidth="300px" borderRadius="25px" color='white' marginStart="20px" marginTop="20px"/> */}
                <Input borderColor={isPasswrodValid ? "" : "red"} onChange={handlePassword} placeholder='Parola' width='90%' maxWidth="300px" borderRadius="25px" color='white' marginStart="20px" marginTop="20px" type="password" />
                <Input borderColor={isPasswrodValid ? "" : "red"} onChange={handleRepeatPassword} placeholder='Repeta parola' width='90%' maxWidth="300px" borderRadius="25px" color='white' marginStart="20px" marginTop="20px" type="password" />

                <Button borderRadius='10px' margin="5px" onClick={register} marginTop="30px">Înregistrare</Button>
            </Flex>
        </Flex>
    </Flex>
  );
}

export default Registration;
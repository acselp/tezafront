import React, {useState} from 'react';

import logo from "../../drawable/logo.svg";

import { Image, Input, Button, Flex, Menu, MenuButton, MenuList, MenuItem, Heading } from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
const TopBar = () => {

  let navigate = useNavigate();

  const [isLogin, setLogin] = useState(true);
 
  function login(){
    navigate('/login')
  } 

  function register(){
    navigate('/registration')
  } 

  function logout(){
    setLogin(false)
  }

  function goHome(){
    navigate('/')
  }

  const handleSeach = (e) => {
    if (e.key === 'Enter') {
      navigate('/search/'+e.target.value)
    }
  }



  const handleSearchButton = (e) => {
    navigate('/search/'+e.target.value)
  }


  return (
    <Flex bg="#282c44dd" zIndex="1" padding="25px 150px" justifyContent="space-between" direction="row" width="100%" height="120px">
      <Flex direction='row' height="70px" align="center">
        <Image src={logo} height='50px' width='120px' alt="logo" onClick ={()=>{goHome()}}/>

        <Input height={"30px"} onKeyDown={handleSeach} marginRight="20px" bgColor={"#fff"} _placeholder={{opacity: 1}} borderWidth="2px" placeholder='Search kidala' width='300px' borderColor={"#cfcfcf"} borderRadius="25px" color='black' marginStart="20px"/>
        <Button onClick={handleSearchButton} height="30px" width="150px" bgColor="white" color="#282c44" _hover={{color: "black", backgroundColor: "white", opacity: 0.5}} borderRadius="30px">Search</Button>
      </Flex>
      { !isLogin ?
        <Flex direction='row'>
          <Button borderRadius='10px' margin="5px" bg="transparent" color="white" onClick={login}><u>LogIn</u></Button>
          <Button borderRadius='10px' margin="5px" onClick={()=>register()}>SignIn</Button>
        </Flex>
        :
        <Flex direction='row' height="70px">
          <Flex>
            <Link to="/review/create">
              <Flex marginTop={"8px"} marginRight="25px" padding={"15px"} paddingBottom="12px" borderRadius={"100px"} transitionDuration="0.2s" _hover={{bgColor: "#a4a4a4"}}>
                <FontAwesomeIcon icon={faPencil} color="white" fontSize={"22px"} />
                <Heading marginLeft={"10px"} as='h1' fontWeight={"bold"} size='1xl' fontSize={"20px"} color="white"> Review </Heading>
              </Flex>
            </Link>
          </Flex>
          <Flex>
            <Link to="/search">
              <Flex marginTop={"8px"} marginRight="25px" padding={"15px"} paddingBottom="12px" borderRadius={"100px"} transitionDuration="0.2s" _hover={{bgColor: "#a4a4a4"}}>
                <FontAwesomeIcon icon={faBuilding} color="white" fontSize={"22px"} />
                <Heading marginLeft={"10px"} as='h1' fontWeight={"bold"} size='1xl' fontSize={"20px"} color="white"> Companies </Heading>
              </Flex>
            </Link>
          </Flex>
          <Menu>
            <MenuButton as={Button} bg="transparent" borderRadius='100px' height="80px" width="80px">
              <Image borderRadius='100px' height="50px" width="50px" src="https://media-exp1.licdn.com/dms/image/C4E03AQH-FsroiDAZ7w/profile-displayphoto-shrink_800_800/0/1642503881389?e=2147483647&v=beta&t=wF5aa4BnC7TC1NpRd3jvLKjkjtsdcitKNSte0BmS7Ic" />
            </MenuButton>
            <MenuList>
              <MenuItem onClick={()=>{navigate("/profile")}}>Profile</MenuItem>
              <MenuItem onClick={()=>{navigate("/settings")}}>Settings</MenuItem>
              <MenuItem onClick={()=>logout()}>Log out</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      }
    </Flex>
  );
}


export default TopBar;
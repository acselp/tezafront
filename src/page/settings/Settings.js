import React, {useState, useEffect}from 'react';

import { Flex, Text, Image, Button} from '@chakra-ui/react'
import TopBar from '../../widgets/topbar/TopBar';
import profile_icon from "../../drawable/profile_icon.png"
import notification_icon from "../../drawable/notification_icon.png"
import secure_icon from "../../drawable/secure_icon.png"
import help_icon from "../../drawable/help_icon.png"
import about_icon from "../../drawable/about_icon.png"
import ProfileTab from './settingsTabs/ProfileTab';
import { useNavigate } from "react-router-dom";
import NotificationTab from './settingsTabs/NotificationTab';
import SecurityTab from './settingsTabs/SecurityTab';
import HelpTab from './settingsTabs/HelpTab';
import AboutTab from './settingsTabs/AboutTab';


const Settings = (props) =>{
   
    const [tab, setTab] = useState(ProfileTab);
    let navigate = useNavigate();

    useEffect(() => {
        setTab(props.tab)
    }, []);

  return (
    <Flex bg="#091123" width="100%" height="100%" minHeight="100vh" flexDirection="column" alignItems='center'>
      <TopBar />

      <Flex width="80%" minHeight="100vh" padding="50px" flexDirection="column" >
         <Text color = "white" fontSize="24px"><b>Settings</b></Text>
         <Flex height="1px" width="100%" bg="gray"/>
         <Flex flexDirection="row">
             <Flex flexDirection="column" color="white" padding="25px" >
                 <Button bg="transparent" colorScheme='transparent' alignSelf="start" onClick={()=>{navigate("/settings/profile"); setTab(ProfileTab)}}>
                     <Image src={profile_icon} height="23px" marginEnd="20px"/>
                     <Text fontSize="20px">Profile</Text>
                 </Button>
                 <Button bg="transparent" colorScheme='transparent' alignSelf="start" onClick={()=>{navigate("/settings/notification"); setTab(NotificationTab)}}>
                     <Image src={notification_icon} height="23px" marginEnd="20px"/>
                     <Text>Notificări</Text>
                 </Button>
                 <Button bg="transparent" colorScheme='transparent' alignSelf="start" onClick={()=>{navigate("/settings/security"); setTab(SecurityTab)}}>
                     <Image src={secure_icon} height="23px" marginEnd="20px"/>
                     <Text>Confidențialitate</Text>
                 </Button>
                 <Button bg="transparent" colorScheme='transparent' alignSelf="start" onClick={()=>{navigate("/settings/help"); setTab(HelpTab)}}>
                     <Image src={help_icon} height="23px" marginEnd="20px"/>
                     <Text>Ajutor</Text>
                 </Button>
                 <Button bg="transparent" colorScheme='transparent' alignSelf="start" onClick={()=>{navigate("/settings/about"); setTab(AboutTab)}}>
                    <Image src={about_icon} height="23px" marginEnd="20px"/>
                     <Text>Despre Kidali.hub</Text>
                 </Button>
             </Flex>
             <Flex height="250px" width="1px" bg="gray" marginTop="20px"/>
             <Flex width="65%">
              {tab}
               
             </Flex>
         </Flex>
      </Flex>
    </Flex>
  );
}


export default Settings;
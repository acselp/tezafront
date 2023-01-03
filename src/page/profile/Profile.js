import React, {useState} from 'react';

import { Flex, Text, Image, Button} from '@chakra-ui/react'
import TopBar from '../../widgets/topbar/TopBar';
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import ProfileItem from './ProfileItem';
const Profile = () =>{
    const [userName, setUserNmae] = useState("Tudor Deviza");
    const [userEmail, setUserEmail] = useState("tudor.devizamd@gmail.com");
    const [userExpericence, setUserExpericence] = useState(
        [
            {
                name : "Color Project",
                startDate : "12.10.2021",
                endDate : "10.12.2021",
                rating : 9.5,
                feedbacks : [
                    {
                        author : "Nicolea S",
                        date : "25.11.2021",
                        text : "Nice work. nice developer. Nice design"
                    }, 
                    {
                        author : "Vicotr P.",
                        date : "26.11.2021",
                        text : "Piece of shit"
                    }
                ],
                link : "https://www.google.com/webhp?hl=ro&sa=X&ved=0ahUKEwiswMSC3dX6AhVRhqQKHWDYDTMQPAgI",
                linkText : "View project"
            },
            {
                name : "Dice Project",
                startDate : "12.09.2022",
                endDate : "10.10.2022",
                rating : 8.5,
                feedbacks : [
                    {
                        author : "Nicolea S",
                        date : "15.09.2022",
                        text : "Very cool project"
                    }, 
                    {
                        author : "Vicotr P.",
                        date : "19.09.2022",
                        text : "Amaizing project"
                    }
                ],
                link : "https://www.google.com/webhp?hl=ro&sa=X&ved=0ahUKEwiswMSC3dX6AhVRhqQKHWDYDTMQPAgI",
                linkText : "View project"
            },
        ]);

        


  return (
    <Flex bg="#091123" width="100%" height="100%" minHeight="100vh" flexDirection="column" alignItems='center'>
      <TopBar />

      <Flex width="80%" minHeight="100vh" padding="50px" flexDirection="column" >
          <Flex>
            <Image height="200px" width="200px" borderRadius="100%" src="https://media-exp1.licdn.com/dms/image/C4E03AQH-FsroiDAZ7w/profile-displayphoto-shrink_800_800/0/1642503881389?e=2147483647&v=beta&t=wF5aa4BnC7TC1NpRd3jvLKjkjtsdcitKNSte0BmS7Ic"/>
            <Flex padding="50px" flexDirection="column" alignSelf="baseline">
                <Text color="white" fontSize="32px">{userName}</Text> 
                <Text color="white">{userEmail}</Text> 
            </Flex>
          </Flex>
          <Flex height="1px" width="100%" bg="gray" margin="10px"/>
          <Flex paddingTop="20px" flexDirection="column">
              <Text color="white" fontSize="35px" fontWeight="600"><u>Experience</u></Text>
              <Flex flexDirection="column">
                {userExpericence.map((experience)=> <ProfileItem experience={experience}/>)}
              </Flex>
          </Flex>
      </Flex>
    </Flex>
  );
}


export default Profile;
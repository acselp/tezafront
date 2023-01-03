import React, {useState} from 'react';

import { Flex, Text, Button} from '@chakra-ui/react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const ProfileItem = ({experience}) =>{
    const [isExpand, setExpand] = useState(false);

    const handleExapand = () => {
        setExpand(!isExpand)
    }

    return(
        <Flex flexDirection="column">
        <Flex flexDirection="column">
            <Flex>
                <Text width="200px" color="white" fontSize="24px">{experience.name}</Text>
                <Text color="white" fontSize="22px"><i>{experience.rating}</i>☆</Text>
            </Flex>
            <Text color="white">{experience.startDate + " - " + experience.endDate}</Text>

            <Text color="white"><i><a href={experience.link}>{experience.linkText}</a></i></Text>

            <Button onClick={handleExapand} width="150px" bg="transparent" color="white" colorScheme='transparent' rightIcon={isExpand ? <MdKeyboardArrowDown /> : <MdKeyboardArrowUp />}> Comentarii </Button>
        </Flex>

        { isExpand ?
            <Flex flexDirection="column">
                {experience.feedbacks.map((feedback)=>{
                    return(
                        <Flex color="white" flexDirection="column" margin="10px">
                            <Flex >
                                <Text marginEnd="20px"><b>{feedback.author}</b></Text>
                                <Text><i>{feedback.date}</i></Text>
                            </Flex>
                            <Text><u>{feedback.text}</u></Text>
                        </Flex>
                    )
                })
                }
            </Flex>
            :
            <Flex/>
        }

        <Flex height="1px" width="100%" bg="gray" margin="10px"/>
    </Flex>
    )
}


export default ProfileItem;
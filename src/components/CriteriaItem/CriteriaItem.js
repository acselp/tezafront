import { 
    Flex, 
    Text, 
    Box,
    Button,
    Stack,
    useColorModeValue,
    Input,
    VisuallyHidden,
    Heading,
    Highlight,
    chakra,
    Container,
    Image,
    VStack,
    SimpleGrid,
    StackDivider,
    List,
    ListItem,
    Progress
 } from '@chakra-ui/react';

const CriteriaItem = (props) => {


    return (
        <Flex position="relative">
            <Text color={"#333"} marginTop="2px" fontSize="14px">{props.label}</Text>
            <Progress position={"absolute"} left="100px" marginTop={"5px"} value={props.value} borderRadius="50px" colorScheme={"cyan"} bgColor={"#dfdfdf"} max="5" min={0} width="115px"/>
            <Text color={"#333"} position="absolute" left="225px" marginTop="2px" fontSize="14px">{props.value}</Text>
        </Flex>
    );
}

export default CriteriaItem;
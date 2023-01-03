import { 
    Flex, 
    Text, 
    Avatar
 } from '@chakra-ui/react';
import StarRatings from 'react-star-ratings';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import MyCollapse from '../ExtendibleText/ExtendibleText';

const ReviewItem = (props) => {


    return (
        <Flex flexDirection={"column"} width="60%" marginBottom={"20px"} padding="20px" bgColor={"white"} border="1px #dfdfdf solid">
            <Flex>
                <Flex>
                    <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
                </Flex>
                <Flex flexDirection="column" marginLeft={"15px"}>
                    <Flex>
                        <Text fontWeight={"bold"}>Sarah G</Text> <Text marginLeft={"5px"}>wrote a review on Oct 2022</Text>
                    </Flex>
                    <Flex>
                        <FontAwesomeIcon icon={faMapMarkerAlt} fontSize="13px"/>
                        <Text color={"#333"} fontSize="13px" marginLeft="6px">
                            Str. Ion Creanga, nr. 1, Bucuresti
                        </Text>
                    </Flex>
                </Flex>
            </Flex>

            <Flex marginTop={"30px"}>
                <StarRatings
                    rating={4}
                    starRatedColor="rgb(230, 67, 47)"
                    numberOfStars={5}
                    starDimension="20px"
                    starSpacing="2px"
                    name='rating'
                />
            </Flex>

            <Flex fontWeight={"bold"} fontSize="18px" marginTop={"10px"}>
                Very expensive but I guess there was a premium to be in the park and wot - no wifi !
            </Flex>

            <Flex marginTop={"10px"}>
                <MyCollapse>
                    <Text>
                        "
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                        "
                    </Text>
                </MyCollapse>
            </Flex>
        </Flex>
    );
}

export default ReviewItem;
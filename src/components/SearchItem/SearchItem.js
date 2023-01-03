import { Link } from "react-router-dom";
import { Heading, Image, Flex, Text } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMask } from '@fortawesome/free-solid-svg-icons'; 

export default function SearchItem(props) {

    // const { name, image, rating, id } = props;
    const changeRating = ( newRating, name ) => {
        this.setState({
          rating: newRating
        });
    }

    return(
        <Flex width={"full"} padding="20px" _notLast={{ borderBottom: "1px solid #cfcfcf" }}>
            <Flex>
                <Link to={ "/company/detailed/" + `${props.id}` }>
                    <Flex style={{ border: "2px solid #f2f2f2" }} marginRight="20px" >
                        <Image boxSize='150px' src={props.image} />
                        
                    </Flex>
                </Link>
            </Flex>

            <Flex flexDirection="column">
                <Heading marginTop={"5px"} as='h2' font-weight="bold" fontSize="20px" size='3xl' noOfLines={1}>
                    { props.title }
                </Heading>

                
                <Flex marginTop={"10px"} marginLeft={"-10px"} flexDirection="column">
                   <Flex justifyContent={"center"} alignItems="center" paddingTop="5px">
                        <StarRatings
                            rating={props.rating}
                            starRatedColor="rgb(230, 67, 47)"
                            changeRating={changeRating}
                            numberOfStars={5}
                            starDimension="20px"
                            starSpacing="2px"
                            name='rating'
                        />

                        <Text color={"#333"} marginTop="2px" marginLeft={"6px"} fontSize="14px">
                            116 reviews
                        </Text>
                    </Flex>
                        
                    <Flex marginLeft={"10px"}>
                        <Text color={"#333"} marginTop="2px"  fontSize="14px">
                            Str. Ion Creanga, nr. 1, Bucuresti
                        </Text>
                    </Flex>
                    
                    {props.is_kidala && 
                        <Flex paddingLeft="5px" paddingTop={"5px"} width="min-content" paddingRight={"10px"} bgColor={"orange"} borderRadius="40px" marginLeft={"10px"} marginTop="10px">
                        <FontAwesomeIcon icon={faMask} color="#2e0f50" />  
                        <Text marginLeft={"5px"}>Kidala</Text>                  
                    </Flex>
                    }
                    
                    

                </Flex>
                
                
                <Flex>
                </Flex>
                
            </Flex>
        </Flex>
    );
}
import { 
    Flex,
    Heading,
    Image,
    Text,
    Input,
    Textarea,
    Checkbox,
    Button
 } from "@chakra-ui/react";
import TopBar from "../../widgets/topbar/TopBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import StarRatings from "react-star-ratings";
import { useState } from "react";


import SearchItem from "../../components/SearchItem/SearchItem";
import Footer from "../../widgets/footer";


export default function Review() {

    let [isChecked, setIsChecked] = useState(false);

    const checkboxHandle = () => {
        setIsChecked(!isChecked);
    }
    

    return (
        <Flex width={"full"} flexDirection="column">
            <TopBar />
                <Flex flexDirection={"column"} alignItems="center" bgColor={"#f2f2f2"}>
                    <Flex width={"1280px"} flexDirection="column" bgColor="white" marginTop={"20px"} marginBottom={"20px"} padding={"20px"} border="1px #dfdfdf solid">
                        <Flex>
                            <Flex>
                                <Image src="https://picsum.photos/150/150.jpg"/>
                            </Flex>
                            <Flex flexDirection={"column"} justifyContent="center" marginLeft={"20px"}>
                                <Flex>
                                    <Heading size={"lg"}>
                                        Lake Yellowstone Hotel and Cottages
                                    </Heading>
                                </Flex>
                                <Flex>
                                    <Flex marginTop={"5px"}>
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                        <Text color={"#333"} fontSize="14px" marginLeft="10px">
                                            Str. Ion Creanga, nr. 1, Bucuresti
                                        </Text>
                                    </Flex>
                                </Flex>
                            </Flex>
                        </Flex>
                        <Flex marginTop={"40px"}>
                            <Heading size={"sm"} color="#707070">Your first-hand experiences really help other people. Thanks!</Heading>
                        </Flex>
                        <Flex borderTop="1px #dfdfdf solid" marginBottom="15px" marginTop={"15px"} width={"100%"}></Flex>
                        
                        <Flex flexDir={"column"} marginTop="20px">
                            <Text fontSize={"14px"} fontWeight="bold" marginBottom={"5px"}>
                                Your overall rating for this company
                            </Text>
                            <StarRatings
                                rating={4}
                                changeRating={() => {}}
                                starRatedColor="rgb(230, 67, 47)"
                                numberOfStars={5}
                                starDimension="20px"
                                starSpacing="2px"
                                name='rating'
                            />
                        </Flex>

                        <Flex flexDir={"column"} marginTop="40px">
                            <Text fontSize={"14px"} fontWeight="bold" marginBottom={"5px"}>
                                Title of your review
                            </Text>
                            <Input placeholder="Summarize your experience with this company" _placeholder={{fontSize: "14px"}}/>

                        </Flex>

                        <Flex flexDir={"column"} marginTop="40px">
                            <Text fontSize={"14px"} fontWeight="bold" marginBottom={"5px"}>
                                Your review
                            </Text>
                            
                            <Textarea
                                // value={value}
                                // onChange={handleInputChange}
                                placeholder='Tell people about the experience you had while working with this company'
                                size='sm'
                            />
                        </Flex>

                        <Flex flexDir={"column"} marginTop="40px">
                            <Text fontSize={"14px"} fontWeight="bold" marginBottom={"5px"}>
                                Submit your review
                            </Text>
                            
                            <Flex alignItems={"flex-start"}>
                                <Checkbox onChange={checkboxHandle}>
                                </Checkbox>
                                <Text fontSize={"13px"} marginLeft="15px">
                                    I certify that this review is based on my own experience and is my genuine opinion of this hotel, and that I have no personal or business relationship with this establishment, and have not been offered any incentive or payment originating from the establishment to write this review. I understand that Tripadvisor has a zero-tolerance policy on fake reviews. Learn more
                                </Text>
                                
                            </Flex>
                            <Flex>
                            <Button disabled={!isChecked} marginTop="40px" bgColor={"black"} color="#fafafa" _hover={{color: "black", backgroundColor: "#dfdfdf"}} borderRadius="3px">
                                Submit review
                            </Button>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>
            <Footer />
        </Flex>
    );

}
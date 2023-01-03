import React from 'react';
import { NavLink, useParams } from "react-router-dom";
import TopBar from '../../widgets/topbar/TopBar';
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
    Select,
    Image,
    VStack,
    StackDivider,
    List,
    ListItem,
    SimpleGrid,
    Collapse,
    GridItem,
    Link as ChakraLink
 } from '@chakra-ui/react';
 import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useEffect } from 'react';
import { MdLocalShipping } from 'react-icons/md';
import CriteriaItem from '../../components/CriteriaItem/CriteriaItem';  
import MyCollapse from '../../components/ExtendibleText/ExtendibleText';
import ReviewItem from '../../components/ReviewItem/ReviewItem';
import Footer from '../../widgets/footer';

import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
// import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faCutlery as faBook } from '@fortawesome/free-solid-svg-icons';
import ImageSlider from '../../components/ImageSlider/ImageSlider';





export default function KidalaDetailed() {
  let { id } = useParams();

  let text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
  const SlideData = [
    {
      image:
        "https://picsum.photos/id/1/300/200.jpg?random=1"
    },
    {
      image:
      "https://picsum.photos/id/2/300/200.jpg?random=2"
    },
    {
      image:
      "https://picsum.photos/id/3/300/200.jpg?random=3"

    },
    {
      image:
      "https://picsum.photos/id/4/300/200.jpg?random=4"

    },
    {
      image:
      "https://picsum.photos/id/5/300/200.jpg?random=5"

    }
  ];
  



  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>

        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

  return (
    <Flex flexDirection={"column"} width="full">  
      <TopBar />

      <Flex flexDirection={"column"} alignItems="center">

        <Flex justifyContent={"space-between"} width={"1280px"} paddingBottom={"10px"}>
          <Flex flexDirection="column">
            <Heading paddingTop="20px">
              Tesla
            </Heading>
            <Flex alignItems="center" paddingTop="5px" marginBottom="5px">
              <StarRatings
                  rating={4}
                  starRatedColor="rgb(230, 67, 47)"
                  // changeRating={() => {}}
                  numberOfStars={5}
                  starDimension="20px"
                  starSpacing="2px"
                  name='rating'
              />

              <Text color={"#333"} marginTop="2px" marginLeft={"6px"} fontSize="14px">
                  116 reviews
              </Text>
            </Flex>
                
            <Flex marginTop={"5px"}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <Text color={"#333"} fontSize="14px" marginLeft="10px">
                    Str. Ion Creanga, nr. 1, Bucuresti
                </Text>
            </Flex>
          </Flex>

          <Flex>
            <ChakraLink height={"min-content"} position="relative" marginTop="100px" display={"flex"}>
              <Flex position="absolute" top="0.5" left="-5">
                <FontAwesomeIcon icon={faPencilAlt} />
              </Flex>
              <Text marginLeft="5px"> Review </Text>
            </ChakraLink>
            
            <Flex height={"1.35em"} borderLeft={"1px #dfdfdf solid"} marginTop="100px" marginLeft="13px">
              
            </Flex>

            <ChakraLink textDecoration={"none"} position="relative" marginLeft="35px" marginTop="100px" display={"flex"}>
              <Flex position="absolute" top="0.5" left="-5">
                <FontAwesomeIcon icon={faShare}/>
              </Flex>
              <Text marginLeft="5px"> Share </Text>
            </ChakraLink>
          </Flex>
        </Flex>



        <Flex justifyContent="center" bgColor={"#f2f2f2"} width={"100%"} borderTop="1px #dfdfdf solid">
          <Flex marginTop={"15px"} width={"1280px"} height={"min-content"}>
            
            <Flex width="100%">

              <Flex flexDirection={"column"} width="60%" padding="20px" bgColor={"white"} border="1px #dfdfdf solid">
                <Flex paddingBottom="10px">
                  <Heading fontSize={"25px"}>
                    About
                  </Heading>
                </Flex>
                <Flex borderTop="1px #dfdfdf solid" marginBottom="15px" width={"100%"}></Flex>

                <Flex>
                  <Flex>
                    <Flex width="330px" flexDirection={"column"}>
                      <Flex>
                        <Heading size={"2xl"}>
                          4.0
                        </Heading>
                        <Flex marginLeft="10px" marginTop="-5px" flexDirection={"column"}>
                          <Text marginLeft={"5px"} fontWeight="bold">Very good</Text>
                          <Flex>
                            <StarRatings
                              rating={4}
                              starRatedColor="rgb(230, 67, 47)"
                              numberOfStars={5}
                              starDimension="20px"
                              starSpacing="2px"
                              name='rating'
                            />
                            <Text color={"#333"} marginTop="2px" marginLeft={"6px"} fontSize="14px">
                                116 reviews
                            </Text>
                          </Flex>
                        </Flex>
                      </Flex>

                      <Text color={"#333"} marginTop="2px" marginBottom="15px" fontSize="14px">
                          #3 of 17 IT companies
                      </Text>
                      
                      <CriteriaItem label="Location" value={4.7} />
                      <CriteriaItem label="Pofile" value={3.5} />
                      <CriteriaItem label="Service" value={3.1} />
                      <CriteriaItem label="Shototam" value={4.2} />


                    </Flex>
                    
                    <Flex flexDirection={"column"} width="40">
                      <Text marginTop="-5px" fontWeight="bold">Types of activities</Text>
                      
                      <SimpleGrid rowGap={"20px"} columnGap="250px" marginTop={"15px"} columns="2">
                      <GridItem>
                          <Flex>
                            <FontAwesomeIcon icon={faBook} />
                            <Text color={"#333"} marginLeft="10px" fontSize="14px"> <nobr>Car building</nobr> </Text>
                          </Flex>
                        </GridItem>
                        <GridItem>
                          <Flex>
                            <FontAwesomeIcon icon={faBook} color="#333" />
                            <Text color={"#333"} marginLeft="10px" fontSize="14px"> IT </Text>
                          </Flex>
                        </GridItem>

                       

                        <GridItem>
                          <Flex>
                            <FontAwesomeIcon icon={faBook} />
                            <Text color={"#333"} marginLeft="10px" fontSize="14px"> <nobr>Public services</nobr> </Text>
                          </Flex>
                        </GridItem>

                        <GridItem>
                          <Flex>
                            <FontAwesomeIcon icon={faBook} />
                            <Text color={"#333"} marginLeft="10px" fontSize="14px"> Restaurants </Text>
                          </Flex>
                        </GridItem>

                        <GridItem>
                          <Flex>
                            <FontAwesomeIcon icon={faBook} />
                            <Text color={"#333"} marginLeft="10px" fontSize="14px"> <nobr>Rocket building</nobr> </Text>
                          </Flex>
                        </GridItem>


                      </SimpleGrid>

                    </Flex>
                    
                  </Flex>
                  
                </Flex>

                <Flex flexDirection={"column"}>
                  <Flex borderTop="1px #dfdfdf solid" marginBottom="20px" marginTop="20px" width={"100%"}></Flex>
                  <MyCollapse>
                    {text}
                  </MyCollapse>
                </Flex>
              </Flex>
            </Flex>
            

            <Flex marginLeft={"-470px"} marginRight="70px">
              <ImageSlider slides={SlideData}/>
            </Flex>


          </Flex>
        </Flex>
      </Flex>




      <Flex justifyContent="center" bgColor={"#f2f2f2"} width={"100%"}>
          <Flex marginTop={"15px"} width={"1280px"} height={"min-content"}>
            <Flex width="100%">
              <Flex flexDirection={"column"} width="60%" padding="20px" bgColor={"white"} border="1px #dfdfdf solid">
                <Flex paddingBottom="10px" alignItems="center" justifyContent={"space-between"}>
                  <Flex>
                    <Heading fontSize={"25px"}>
                      Reviews 
                    </Heading>
                    <Heading fontSize={"18px"} marginTop="5px" fontWeight="regular" marginLeft="15px">
                      116 found
                    </Heading>
                  </Flex>    
                  <Flex>
                    <Button bgColor={"black"} color="#fafafa" _hover={{color: "black", backgroundColor: "#dfdfdf"}}>
                      Write a review
                    </Button>
                  </Flex>
                </Flex>
                <Flex borderTop="1px #dfdfdf solid" marginBottom="15px" width={"100%"}></Flex>
                <Flex>
                  <Flex>
                    <Text>
                      {/* TODO: Eobanii filter */}
                      Filter comming soon ...<br/>
                      măibi )
                    </Text>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>


        <Flex justifyContent="center" bgColor={"#f2f2f2"} width={"100%"}>
          <Flex marginTop={"15px"} width={"1280px"} alignItems="center">
            <Input 
              // onKeyDown={handleSearch} 
              alignItems='center' 
              _placeholder={{ opacity: 1, color: '#808080' }}  
              height="40px" 
              width="35%"
              bgColor={"white"} 
              placeholder='Search review' 
              borderWidth="1px" 
              borderRadius="25px" 
              borderColor="#dfdfdf"
              />
              <Text marginLeft="10px" marginRight="10px">Sort by:</Text>
              <Select placeholder='Select option' width={"245px"} bgColor="white">
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
              </Select>
          </Flex>
        </Flex>
      
        <Flex justifyContent="center" bgColor={"#f2f2f2"} width={"100%"}>
          <Flex marginTop={"15px"} width={"1280px"} height={"min-content"}>
            <Flex width="100%">
              <Flex flexDirection={"column"}>
                <ReviewItem />
                <ReviewItem />
                <ReviewItem />
              </Flex>
            </Flex>
          </Flex>
        </Flex>


        <Footer />


      </Flex>
  );
}
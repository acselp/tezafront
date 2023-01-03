import TopBar from "../../widgets/topbar/TopBar";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { 
    Flex, 
    Text, 
    Box,
    Container,
    Button,
    Stack,
    useColorModeValue,
    Input,
    VisuallyHidden,
    Heading,
    Highlight

} from '@chakra-ui/react'
import MicrosoftImage from "../../drawable/microsoft-logo.png";
import AppleImage from "../../drawable/apple-logo.jpg";

import SearchItem from "../../components/SearchItem/SearchItem"; 

import { chakra } from "@chakra-ui/react";

export default function Search({navigate}) {

  const companiesName = [
    {
      name: "Microsoft",
      image: require("../../drawable/microsoft-logo.png"),
      id: "1",
      rating: 3.5,
      is_kidala: false
    },
    {
      name: "Apple",
      image: require("../../drawable/apple-logo.jpg"),
      id: "2",
      rating: 4.9,
      is_kidala: true
    },
    {
      name: "Google",
      image: require("../../drawable/google-logo.png"),
      id: "3",
      rating: 4,
      is_kidala: true
    },
    {
      name: "Facebook",
      image: require("../../drawable/facebook-logo.jpg"),
      id: "4",
      rating: 3,
      is_kidala: false
    },
    {
      name: "Amazon",
      image: require("../../drawable/amazon-logo.png"),
      id: "5",
      rating: 1.5,
      is_kidala: false
    },
    {
      name: "Tesla",
      image: require("../../drawable/tesla-logo.jpg"),
      id: "6",
      rating: 5,
      is_kidala: true
    }
  ]


  const [searchVal, setSearchVal] = useState('')
  const [searchResult, setSearchResult] = useState(companiesName)
  let { q } = useParams();

  useEffect(() => {
    if (q) {
      setSearchVal(q)
      setSearchResult(companiesName.filter((company) => company.name.toLowerCase().includes(q.toLowerCase())))
    }
  }, [q])

  const handleSearch = (event) =>{ 
    setSearchVal(event.target.value)
    setSearchResult(companiesName.filter((company) => company.name.toLowerCase().includes(event.target.value.toLowerCase())))
    // alert(event.target.value);
  }


  
  const handleSearchButton = (e) => {
    navigate('/search/'+e.target.value)
  }

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
    <Flex flexDirection={"column"} width={'full'}>
        <TopBar />
          <Flex justifyContent={"center"} width={"full"}>
            <Flex width='1170px' justifyContent="center" marginTop={"20px"} marginBottom={"100px"}>
                  <Input
                      placeholder="Search kidalas"
                      borderWidth="3px"
                      borderRadius="30px"
                      _placeholder={{color: "black", fontSize: "medium"}}
                      marginStart="20px"
                      height='45px'
                      marginRight={"20px"}
                      onChange={handleSearch}
                  />
                  <Button onClick={handleSearchButton} height="45px" width="150px" bgColor="#282C44" color="white" _hover={{color: "black", bgColor: "#f2f2f2"}} borderRadius="30px">
                      Search
                  </Button>
              </Flex>
          </Flex>

          <Flex minHeight={"100vh"} paddingBottom={"20px"} width={"full"} justifyContent={"start"} bgColor={"#f2f2f2"}>
            <Flex height={"min-content"} flexDirection={"column"} boxSizing="border-box" marginTop={"40px"} marginLeft="15%" bgColor={"white"} width="950px" borderColor={"#cfcfcf"} borderStyle="solid" borderWidth={"1px"}>
            <Heading padding={"20px"} as='h2' font-weight="bold" fontSize="20px" size='3xl' noOfLines={1}>
              Search results with <Highlight query={searchVal} styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.100' }}>
              {searchVal}
              </Highlight>
            </Heading>
            <Flex style={{borderBottom: "#cfcfcf solid 1px"}} width="100%">
            </Flex>

            <Flex flexDirection={"column"}>

              {searchResult.map((company) => <SearchItem is_kidala={company.is_kidala} rating={company.rating} image={company.image} title={company.name} id={company.id} />)}
              {searchResult.length == 0 && <Text padding={"20px"}>No results found</Text>}

            </Flex>
              
            </Flex>
          </Flex>
            
      

            <Box
            
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text>© 2022 Kidala.hub All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
          <SocialButton label={'Twitter'} href={'#'}>
            <FaTwitter />
          </SocialButton>
          <SocialButton label={'YouTube'} href={'#'}>
            <FaYoutube />
          </SocialButton>
          <SocialButton label={'Instagram'} href={'#'}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>

    </Flex>
  );
}
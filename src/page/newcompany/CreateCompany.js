import React, {useState} from 'react';

import {
    Progress,
    Box,
    ButtonGroup,
    Button,
    Heading,
    Flex,
    FormControl,
    GridItem,
    FormLabel,
    Input,
    Select,
    SimpleGrid,
    InputLeftAddon,
    InputGroup,
    Textarea,
    FormHelperText,
    InputRightElement,
  } from '@chakra-ui/react';

import { useToast } from '@chakra-ui/react';

import { useNavigate } from "react-router-dom";

const Form1 = () => {
    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Company Registration
        </Heading>
        <Flex>
          <FormControl mr="5%">
            <FormLabel htmlFor="first-name" fontWeight={'normal'}>
              Company name
            </FormLabel>
            <Input id="first-name" placeholder="Company name" />
          </FormControl>
        </Flex>
        <FormControl mt="2%">
          <FormLabel htmlFor="email" fontWeight={'normal'}>
            Company Email address
          </FormLabel>
          <Input id="email" type="email" />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
  
        
      </>
    );
  };


const Form2 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
          Company Details
        </Heading>
        <FormControl as={GridItem} colSpan={[6, 3]}>
          <FormLabel
            htmlFor="country"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Country / Region
          </FormLabel>
          <Select
            id="country"
            name="country"
            autoComplete="country"
            placeholder="Select option"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md">
            <option>Bulgaria</option>
            <option>Romania</option>
            <option>Moldova</option>
          </Select>
        </FormControl>
  
        <FormControl as={GridItem} colSpan={6}>
          <FormLabel
            htmlFor="street_address"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            Street address
          </FormLabel>
          <Input
            type="text"
            name="street_address"
            id="street_address"
            autoComplete="street-address"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          />
        </FormControl>
  
        <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
          <FormLabel
            htmlFor="city"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            City
          </FormLabel>
          <Input
            type="text"
            name="city"
            id="city"
            autoComplete="city"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          />
        </FormControl>
  
  
        <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            htmlFor="postal_code"
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%">
            ZIP / Postal
          </FormLabel>
          <Input
            type="text"
            name="postal_code"
            id="postal_code"
            autoComplete="postal-code"
            focusBorderColor="brand.400"
            shadow="sm"
            size="sm"
            w="full"
            rounded="md"
          />
        </FormControl>
      </>
    );
  };

  const Form3 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} fontWeight="normal">
         Informa??ie adi??ional??
        </Heading>
        <SimpleGrid columns={1} spacing={6}>
          <FormControl as={GridItem} colSpan={[3, 2]}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              Website
            </FormLabel>
            <InputGroup size="sm">
              <InputLeftAddon
                bg="gray.50"
                _dark={{
                  bg: 'gray.800',
                }}
                color="gray.500"
                rounded="md">
                http://
              </InputLeftAddon>
              <Input
                type="tel"
                placeholder="www.example.com"
                focusBorderColor="brand.400"
                rounded="md"
              />
            </InputGroup>
          </FormControl>
  
          <FormControl id="email" mt={1}>
            <FormLabel
              fontSize="sm"
              fontWeight="md"
              color="gray.700"
              _dark={{
                color: 'gray.50',
              }}>
              Despre
            </FormLabel>
            <Textarea
              placeholder="companyname@example.com"
              rows={3}
              shadow="sm"
              focusBorderColor="brand.400"
              fontSize={{
                sm: 'sm',
              }}
            />
          </FormControl>
        </SimpleGrid>
      </>
    );
  };

const CreateCompany = () =>{

  let navigate = useNavigate();

  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <Flex width="100%" height="100vh" flexDirection="column" bg="#091123" justifyContent="center">    
      <Box
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        bg="white"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="teal"
                variant="solid"
                w="7rem"
                bg="#37d2d8"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="teal"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="red"
                variant="solid"
                marginStart="10px"
                onClick={() => {
                 
                  navigate("/");
                }}>
                Creaz??
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Flex>
  );
}


export default CreateCompany;
import React from 'react';

import { Flex, Text, Box,
  Heading,
  Container,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  chakra,
  SimpleGrid,
  createIcon,
  Stat,
  StatLabel,
  StatNumber,
  Image,
  Input,
  Avatar,
  VisuallyHidden
 } from '@chakra-ui/react'
 import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import TopBar from '../../widgets/topbar/TopBar';
import BgImage from "../../drawable/office-bg.jpg";
import { useNavigate } from 'react-router-dom';

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}>
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

const Testimonial = ({ children }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

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

const Dashboard = () =>{

  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      navigate('/search/'+e.target.value)
    }
  }



  return (
    <Flex bg="white" width="100%" height="100vh" flexDirection="column">
      <Box filter='auto' brightness='50%'>
        <Image position="absolute" width="100%" height="100vh" src={BgImage} />

      </Box>

      <TopBar/>
      
      <Flex alignItems="center" justifyContent="center" heidth="100vh" flexDirection="column" >

        <Heading textAlign="center" marginTop="10%" marginBottom="3%" zIndex="5" as="h1" size="2xl" color="white">
          Share your experience,<br/>write a review 
        </Heading>

        <Input 
          onKeyDown={handleSearch} 
          alignItems='center' 
          _placeholder={{ opacity: 1, color: 'white' }}  
          height="50px" width="45%" 
          placeholder='Search kidala' 
          borderWidth="3px" 
          borderRadius="25px" 
          color='white' 
          marginStart="20px"/>
      
      </Flex>

    <Flex bg={useColorModeValue('gray.100', 'gray.700')}> 
      <Container maxW={'3xl'} marginTop="400px" >
        <Stack
          as={Box}
          textAlign={'center'}
          spacing={{ base: 8, md: 14 }}
          py={{ base: 20, md: 125 }}>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Someone Kidanit <br />
            <Text as={'span'} color={'#282c44'}>
              you
            </Text>
          </Heading>
          <Text color={'gray.500'}>
          Then don't hesitate and leave some feedback for this person/company, for another employer to be ready
          </Text>
          <Stack
            direction={'column'}
            spacing={3}
            align={'center'}
            alignSelf={'center'}
            position={'relative'}>
            <Button
              colorScheme={'#282c44'}
              bg={'#282c44'}
              rounded={'full'}
              px={6}
              _hover={{
                bg: '#282c44',
              }}>
              Get Started
            </Button>
            <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
              Learn more
            </Button>
            <Box>
              <Icon
                as={Arrow}
                color={useColorModeValue('gray.800', 'gray.300')}
                w={71}
                position={'absolute'}
                right={-71}
                top={'10px'}
              />
              <Text
                fontSize={'lg'}
                fontFamily={'Caveat'}
                position={'absolute'}
                right={'-125px'}
                top={'-15px'}
                transform={'rotate(10deg)'}>
                Starting now for free
              </Text>
            </Box>
          </Stack>
        </Stack>
      </Container>
</Flex>
      <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}>
        What is our platform doing?
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={'We collect feedback'} stat={'from more that 50,000 people'} />
        <StatsCard title={'In'} stat={'30 different countries'} />
        <StatsCard title={'Who speak'} stat={'100 different languages'} />
      </SimpleGrid>
    </Box>

    <Box bg={useColorModeValue('gray.100', 'gray.700')} marginTop="200px">
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Tudor Deviza</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media-exp1.licdn.com/dms/image/C4E03AQH-FsroiDAZ7w/profile-displayphoto-shrink_800_800/0/1642503881389?e=2147483647&v=beta&t=wF5aa4BnC7TC1NpRd3jvLKjkjtsdcitKNSte0BmS7Ic'
              }
              name={'Tudor Deviza'}
              title={'CEO at Kidala Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Virgiliu Plesca</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media-exp1.licdn.com/dms/image/C4E03AQH-FsroiDAZ7w/profile-displayphoto-shrink_800_800/0/1642503881389?e=2147483647&v=beta&t=wF5aa4BnC7TC1NpRd3jvLKjkjtsdcitKNSte0BmS7Ic'
              }
              name={'Virgiliu Plesca'}
              title={'CEO at Kidala Corporation'}
            />
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              <TestimonialHeading>Alexandru Cozolvschi</TestimonialHeading>
              <TestimonialText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor
                neque sed imperdiet nibh lectus feugiat nunc sem.
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://media-exp1.licdn.com/dms/image/C4E03AQH-FsroiDAZ7w/profile-displayphoto-shrink_800_800/0/1642503881389?e=2147483647&v=beta&t=wF5aa4BnC7TC1NpRd3jvLKjkjtsdcitKNSte0BmS7Ic'
              }
              name={'Alexandru Cozolvschi'}
              title={'CEO at Kidala Corporation'}
            />
          </Testimonial>
        </Stack>
      </Container>
    </Box>

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

const Arrow = createIcon({
  displayName: 'Arrow',
  viewBox: '0 0 72 24',
  path: (
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
      fill="currentColor"
    />
  ),
});

export default Dashboard;
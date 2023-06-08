import {
  Avatar,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import Image from '../../assets/images/Tom.jpg';

const Founder = () => {
  return (
    <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
      <VStack>
        <Avatar src={Image} boxSize={['40', '48']} />
        <Text children="MyProfile" opacity={0.7} />
      </VStack>
      <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
        <Heading children="Pakawat Kulchot" size={['md', 'xl']} />
        <Text
          textAlign={['center', 'left']}
          children={`Hi, This is my first Mernstack project.Sorry if it's not good,
          any problem please feel free to contact us.`}
        />
      </VStack>
    </Stack>
  );
};

const About = () => {
  return (
    <Container maxW={'container.lg'} padding="16" boxShadow={'lg'}>
      <Heading children="About Us" textAlign={['center', 'left']} />
      <Founder />
      <Stack m="8" direction={['column', 'row']} alignItems="center"></Stack>
    </Container>
  );
};

export default About;

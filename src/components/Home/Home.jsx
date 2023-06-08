import React from 'react';
import {
  Heading,
  Text,
  Stack,
  VStack,
  Link,
  Button,
  Image,
  Box,
  HStack,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import vg from '../../assets/images/Group_94.png';
import './Home.css';
import { CgGoogle, CgYoutube } from 'react-icons/cg';
import { SiUdemy } from 'react-icons/si';

const Home = () => {
  return (
    <section className="home">
      <div className="container">
        <Stack
          direction={['column', 'row']}
          height="100%"
          justifyContent={['center', 'space-between']}
          alignItems="center"
          spacing={['16', '56']}
        >
          <VStack
            width={'full'}
            alignItems={['center', 'flex-end']}
            spacing={'8'}
          >
            <Heading size={'2xl'}>Let Build You Collection</Heading>
            <Text
              fontSize={'2xl'}
              fontFamily="cursive"
              textAlign={['center', 'left']}
            >
              Find items that fit your collection.
            </Text>
            <Link as={RouterLink} to="/product">
              <Button size={'lg'} colorScheme="yellow">
                Go Now
              </Button>
            </Link>
          </VStack>
          <Image
            className="vector-graphics"
            boxSize={'mb'}
            src={vg}
            objectFit="contain"
          />
        </Stack>
      </div>
      <Box padding={'8'} bg="blackAlpha.800">
        <Heading
          textAlign={'center'}
          fontFamily="body"
          color={'yellow.400'}
          children="Thanks you So much,Bro"
        />
        <HStack
          className="brandsBanner"
          justifyContent={'space-evenly'}
          marginTop="4"
        >
          <CgGoogle size={32} />
          <CgYoutube size={32} />
          <SiUdemy size={32} />
        </HStack>
      </Box>
    </section>
  );
};

export default Home;

import {
  Container,
  VStack,
  Heading,
  Box,
  FormLabel,
  Input,
  Button,
  Textarea,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { contactUs } from '../../redux/actions/others';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(contactUs(name, email, message));
  };

  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={'center'} spacing="16">
        <Heading children="Contact Us" />

        <form onSubmit={submitHandler} style={{ width: '100%' }}>
          <Box my={'4'}>
            <FormLabel htmlFor="name" children="Name" />
            <Input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Abc"
              type={'text'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="email" children="Email Address" />
            <Input
              required
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="abc@gmail.com"
              type={'email'}
              focusBorderColor="yellow.500"
            />
          </Box>
          <Box my={'4'}>
            <FormLabel htmlFor="message" children="Message" />
            <Textarea
              required
              id="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message...."
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button my="4" colorScheme={'yellow'} type="submit">
            Send Mail
          </Button>
          <Box my="4">
            Request for a Product?{' '}
            <Link to="/request">
              <Button colorScheme={'yellow'} variant="link">
                Click
              </Button>{' '}
              here
            </Link>
          </Box>
        </form>
      </VStack>
    </Container>
  );
};

export default Contact;

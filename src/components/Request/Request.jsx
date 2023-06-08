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
import { productRequest } from '../../redux/actions/others';
import { useDispatch } from 'react-redux';

const Request = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');

  const dispatch = useDispatch();
  const submitHandler = e => {
    e.preventDefault();
    dispatch(productRequest(name, email, product));
  };

  return (
    <Container h="92vh">
      <VStack h="full" justifyContent={'center'} spacing="16">
        <Heading children="Request New Product" />

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
            <FormLabel htmlFor="product" children="Product" />
            <Textarea
              required
              id="product"
              value={product}
              onChange={e => setProduct(e.target.value)}
              placeholder="Explain the Product...."
              focusBorderColor="yellow.500"
            />
          </Box>
          <Button my="4" colorScheme={'yellow'} type="submit">
            Send Mail
          </Button>
          <Box my="4">
            See available Products!{' '}
            <Link to="/product">
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

export default Request;

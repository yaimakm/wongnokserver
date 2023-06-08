import {
  Container,
  Heading,
  Input,
  HStack,
  Button,
  Text,
  VStack,
  Stack,
  Image,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/images/Tom.jpg';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../redux/actions/product';
import { toast } from 'react-hot-toast';
import { addToCollection } from '../../redux/actions/profile';
import { loadUser } from '../../redux/actions/user';
const Product = ({
  views,
  title,
  imageSrc,
  id,
  addToPlaylistHandler,
  description,
  loading,
}) => {
  return (
    <VStack className="product" alignItems={['center', 'flex-start']}>
      <Image src={imageSrc} boxSize="60" objectFit={'contain'} />
      <Heading
        textAlign={['center', 'left']}
        maxW="200px"
        size={'sm'}
        fontFamily={'sans-serif'}
        noOfLines={3}
        children={title}
      />
      <Text noOfLines={2} children={description} />
      <HStack>
        <Text fontWeight={'bold'} textTransform="uppercase" />
        <Text fontFamily={'body'} textTransform="uppercase" />
      </HStack>
      <Heading textAlign={'center'} size="xs" textTransform="uppercase" />
      <Heading
        textAlign={'center'}
        size="xs"
        children={`Views - ${views}`}
        textTransform="uppercase"
      />
      <Stack direction={['colomn', 'row']} alignItems="center">
        <Link to={`/product/${id}`}>
          <Button colorScheme={'yellow'}>Detail</Button>
        </Link>
        <Button
          isLoading={loading}
          variant={'ghost'}
          colorScheme={'yellow'}
          onClick={() => addToPlaylistHandler(id)}
        >
          Add to collection
        </Button>
      </Stack>
    </VStack>
  );
};

function Products() {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState('');
  const addToPlaylistHandler = async productId => {
    console.log('Added to collection', productId);
    await dispatch(addToCollection(productId));
    dispatch(loadUser());
  };

  const categories = [
    'AC-DC',
    'Nirvana',
    'Guns N roses',
    'Iron maiden',
    'KISS',
    'PINK FLOYD',
  ];

  const { loading, products, error, message } = useSelector(
    state => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts(category, keyword));

    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [category, keyword, dispatch, error, message]);

  return (
    <Container minH={'95vh'} maxW="container.lg" paddingY={'8'}>
      <Heading children="All Products" m={'8'} />
      <Input
        value={keyword}
        onChange={e => setKeyword(e.target.value)}
        placeholder="Search a product..."
        type={'text'}
        focusBorderColor="yellow.400"
      />

      <HStack
        overflowX={'auto'}
        paddingY={'8'}
        css={{
          '&::-webkit-scrollbar': {
            display: 'none',
          },
        }}
      >
        {categories.map((item, index) => (
          <Button key={index} onClick={() => setCategory(item)} minW={'60'}>
            <Text children={item} />
          </Button>
        ))}
      </HStack>

      <Stack
        direction={['column', 'row']}
        flexWrap="wrap"
        justifyContent={['flex-start', 'space-evenly']}
        alignItems={['center', 'flex-start']}
      >
        {products.length > 0 ? (
          products.map(item => (
            <Product
              key={item._id}
              title={item.title}
              description={item.description}
              views={item.views}
              imageSrc={item.poster.url}
              id={item._id}
              addToPlaylistHandler={addToPlaylistHandler}
              loading={loading}
            />
          ))
        ) : (
          <Heading mt="4" children="Product Not Found" />
        )}
      </Stack>
    </Container>
  );
}

export default Products;

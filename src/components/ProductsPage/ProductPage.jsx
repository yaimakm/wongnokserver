import { Box, Grid, Image, Heading } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSomeProduct } from '../../redux/actions/product';

const ProductPage = () => {
  const { products } = useSelector(state => state.product);
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getSomeProduct(params.id));
  }, [dispatch, params.id]);

  if (!products || !products.poster || !products.poster.url) {
    // Render a loading state or an error message here
    return null;
  }

  return (
    <Grid
      minH={'90vh'}
      templateColumns={['1fr', '3fr 1fr']}
      alignItems={'center'}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image width={'50%'} src={products.poster.url} alt="Product Image" />
      </Box>
      <Box>
        <Box p="4">
          {/* Product details */}
          <Heading as="h2" size="xl" mb="2">
            {products.title}
          </Heading>
          <p>Product Description</p>
          <p>{products.description}</p>
        </Box>
      </Box>
    </Grid>
  );
};

export default ProductPage;

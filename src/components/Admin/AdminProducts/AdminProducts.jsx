import {
  Box,
  Button,
  Grid,
  HStack,
  Heading,
  Image,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Sidebar from '../Sidebar';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import ProductModal from './ProductModal';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../redux/actions/product';
import { deleteProduct } from '../../../redux/actions/admin';

const AdminProducts = () => {
  const { products } = useSelector(state => state.product);
  const dispatch = useDispatch();

  const { onOpen } = useDisclosure();
  const productDetailsHandler = usersId => {
    onOpen();
  };
  const deleteButtonHandler = productId => {
    console.log(productId);
    dispatch(deleteProduct(productId));
  };

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '8']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Products"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All availeble products in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Poster</Th>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th isNumeric>Views</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map(item => (
                <Row
                  productDetailsHandler={productDetailsHandler}
                  deleteButtonHandler={deleteButtonHandler}
                  key={item._id}
                  item={item}
                />
              ))}
            </Tbody>
          </Table>
        </TableContainer>

        <ProductModal />
      </Box>
      <Sidebar />
    </Grid>
  );
};
export default AdminProducts;

export function Row({ item, productDetailsHandler, deleteButtonHandler }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>
        <Image src={item.poster.url} />
      </Td>
      <Td>{item.title}</Td>
      <Td textTransform={'uppercase'}>{item.category}</Td>
      <Td isNumeric>{item.views}</Td>
      <Td isNumeric>
        <HStack justifyContent={'flex-end'}>
          <Button
            onClick={() => deleteButtonHandler(item._id)}
            color={'purple.600'}
          >
            <RiDeleteBin7Fill />
          </Button>
        </HStack>
      </Td>
    </Tr>
  );
}

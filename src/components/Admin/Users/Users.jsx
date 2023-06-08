import {
  Box,
  Button,
  Grid,
  Heading,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Sidebar from '../Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import {
  deleteUser,
  getAllUsers,
  updateUserRole,
} from '../../../redux/actions/admin';

const Users = () => {
  const { users, loading } = useSelector(state => state.admin);

  const dispatch = useDispatch();

  const updateHandler = usersId => {
    dispatch(updateUserRole(usersId));
  };
  const deleteButtonHandler = userId => {
    dispatch(deleteUser(userId));
  };

  useEffect(() => {
    dispatch(getAllUsers());
  }, [dispatch]);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box p={['0', '16']} overflowX="auto">
        <Heading
          textTransform={'uppercase'}
          children="All Users"
          my="16"
          textAlign={['center', 'left']}
        />

        <TableContainer w={['100vw', 'full']}>
          <Table variant={'simple'} size="lg">
            <TableCaption>All availeble users in the database</TableCaption>
            <Thead>
              <Tr>
                <Th>Id</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Role</Th>
                <Th>|</Th>
                <Th isNumeric>Action</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users &&
                users.map(item => (
                  <Row
                    updateHandler={updateHandler}
                    deleteButtonHandler={deleteButtonHandler}
                    key={item._id}
                    item={item}
                    loading={loading}
                  />
                ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default Users;

export function Row({ item, updateHandler, deleteButtonHandler, loading }) {
  return (
    <Tr>
      <Td>#{item._id}</Td>
      <Td>{item.name}</Td>
      <Td>{item.email}</Td>
      <Td>{item.role}</Td>
      <Td>
        {item.subscription && item.subscription.status === 'active' ? '|' : '|'}
      </Td>
      <Td isNumeric>
        <Button
          onClick={() => updateHandler(item._id)}
          variant="outline"
          color="purple.500"
          isLoading={loading}
        >
          Change Role
        </Button>
      </Td>
    </Tr>
  );
}

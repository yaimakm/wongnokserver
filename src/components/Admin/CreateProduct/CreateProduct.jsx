import {
  Box,
  Button,
  Container,
  Grid,
  Heading,
  Image,
  Input,
  Select,
  Textarea,
  VStack,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar';
import { fileUploadCss } from '../../Auth/Register';
import { createProduct } from '../../../redux/actions/admin';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-hot-toast';

const CreateProduct = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [imagePrev, setImagePrev] = useState('');

  const dispatch = useDispatch();
  const { loading, error, message } = useSelector(state => state.admin);

  const categories = [
    'AC-DC',
    'Nirvana',
    'Guns N roses',
    'Iron maiden',
    'KISS',
    'PINK FLOYD',
  ];
  const changeImageHandler = e => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImagePrev(reader.result);
      setImage(file);
    };
  };

  const submitHandler = e => {
    //title, description, category,file
    e.preventDefault();
    const myForm = new FormData();

    myForm.append('title', title);
    myForm.append('description', description);
    myForm.append('category', category);
    myForm.append('file', image);

    dispatch(createProduct(myForm));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: 'clearError' });
    }

    if (message) {
      toast.success(message);
      dispatch({ type: 'clearMessage' });
    }
  }, [dispatch, error, message]);

  return (
    <Grid minH={'100vh'} templateColumns={['1fr', '5fr 1fr']}>
      <Box>
        <Container py="16">
          <form onSubmit={submitHandler}>
            <Heading
              textTransform={'uppercase'}
              children="Create Product"
              my="16"
              textAlign={['center', 'left']}
            />
            <VStack m="auto" spacing={'8'}>
              <Input
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Title"
                type={'text'}
                focusBorderColor="purple.300"
              />{' '}
              <Textarea
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="Category,Made in,Necklace,Years,"
                type={'text'}
                focusBorderColor="purple.300"
                rows={4} // Adjust the number of rows to display
                css={{
                  whiteSpace: 'pre-line',
                  margin: '10px 0', // Add vertical spacing between paragraphs
                }}
              />
              <Select
                focusBorderColor="purple.300"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="">Category</option>
                {categories.map(item => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </Select>
              <Input
                accept="image/*"
                required
                type={'file'}
                focusBorderColor="purple.500"
                css={{
                  '&::file-selector-button': {
                    ...fileUploadCss,
                    color: 'purple',
                  },
                }}
                onChange={changeImageHandler}
              />
              {imagePrev && (
                <Image src={imagePrev} boxSize={'64'} objectFit={'contain'} />
              )}
              <Button
                isLoading={loading}
                w="full"
                colorScheme={'purple'}
                type="submit"
              >
                Create
              </Button>
            </VStack>
          </form>
        </Container>
      </Box>
      <Sidebar />
    </Grid>
  );
};

export default CreateProduct;

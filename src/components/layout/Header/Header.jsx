import {
  Button,
  Drawer,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  useDisclosure,
  VStack,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import { RiLogoutBoxLine, RiMenu5Fill, RiDashboardFill } from 'react-icons/ri';
import { ColorModeSwitcher } from '../../../ColorModeSwitcher';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../../redux/actions/user';

const LinkButton = ({ url = '/', title = 'Home', onClose }) => (
  <Link onClick={onClose} to={url}>
    <Button variant="ghost">{title}</Button>
  </Link>
);

function Header({ isAuthenticated = false, user }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch();

  const logoutHandler = () => {
    onClose();
    dispatch(logout());
  };

  return (
    <>
      <ColorModeSwitcher />

      <Button
        onClick={onOpen}
        colorScheme="yellow"
        width="12"
        height="12"
        rounded="full"
        position="fixed"
        top="6"
        left="6"
      >
        <RiMenu5Fill />
      </Button>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">WONGNOK</DrawerHeader>
          <DrawerBody>
            <VStack spacing="4" alignItems="flex-start">
              <LinkButton onClose={onClose} url="/" title="Home" />
              <LinkButton
                onClose={onClose}
                url="/product"
                title="All Products"
              />
              <LinkButton
                onClose={onClose}
                url="/request"
                title="Request a Product"
              />
              <LinkButton onClose={onClose} url="/contact" title="Contact Us" />
              <LinkButton onClose={onClose} url="/about" title="About Us" />

              <HStack
                justifyContent="space-evenly"
                position="absolute"
                bottom="2rem"
                width="80%"
              >
                {isAuthenticated ? (
                  <>
                    <VStack>
                      <HStack>
                        <Link onClick={onClose} to="/profile">
                          <Button variant="ghost" colorScheme="yellow">
                            Profile
                          </Button>
                          <Button variant="ghost" onClick={logoutHandler}>
                            <RiLogoutBoxLine />
                            Logout
                          </Button>
                        </Link>
                      </HStack>

                      {user && user.role === 'admin' && (
                        <Link onClick={onClose} to="/admin/dashboard">
                          <Button colorScheme={'purple'} variant="ghost">
                            <RiDashboardFill style={{ margin: '4px' }} />
                            Admin
                          </Button>
                        </Link>
                      )}
                    </VStack>
                  </>
                ) : (
                  <>
                    <Link onClick={onClose} to="/login">
                      <Button colorScheme="yellow">Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to="/register">
                      <Button colorScheme="yellow">Sign Up</Button>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Header;

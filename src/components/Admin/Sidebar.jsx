import { Button, VStack } from '@chakra-ui/react';
import React from 'react';
import { RiAddCircleFill, RiEye2Fill, RiUser3Fill } from 'react-icons/ri';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();

  return (
    <VStack spacing={'8'} p="16" boxShadow={'-2px 0 10px rgba(107,70,193,0.5)'}>
      <LinkButton
        Icon={RiAddCircleFill}
        text="Create Product"
        url={'createproduct'}
        active={location.pathname === '/admin/createproduct'}
      />
      <LinkButton
        Icon={RiEye2Fill}
        text="Products"
        url={'products'}
        active={location.pathname === '/admin/products'}
      />
      <LinkButton
        Icon={RiUser3Fill}
        text="Users"
        url={'users'}
        active={location.pathname === '/admin/users'}
      />
    </VStack>
  );
};

export default Sidebar;

export function LinkButton({ url, Icon, text, active }) {
  return (
    <Link to={`/admin/${url}`}>
      <Button
        fontSize={'larger'}
        variant={'ghost'}
        colorScheme={active ? 'purple' : ''}
      >
        <Icon style={{ margin: '4px' }} />
        {text}
      </Button>
    </Link>
  );
}

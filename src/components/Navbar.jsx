import { Box, Flex, Link, Button } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <Box>
          <Link as={RouterLink} to="/" color="white" fontSize="lg" fontWeight="bold" mr={4}>
            Home
          </Link>
          <Link as={RouterLink} to="/confetti" color="white" fontSize="lg" fontWeight="bold" mr={4}>
            Confetti
          </Link>
          <Link as={RouterLink} to="/kanban" color="white" fontSize="lg" fontWeight="bold">
            Kanban
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
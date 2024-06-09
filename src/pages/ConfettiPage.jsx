import React, { useState } from 'react';
import { Box, Button, Container, VStack } from '@chakra-ui/react';
import Confetti from 'react-confetti';

const ConfettiPage = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfetti = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // Confetti lasts for 3 seconds
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      {showConfetti && <Confetti />}
      <VStack spacing={4}>
        <Button colorScheme="teal" size="lg" onClick={handleConfetti}>
          Celebrate!
        </Button>
      </VStack>
    </Container>
  );
};

export default ConfettiPage;
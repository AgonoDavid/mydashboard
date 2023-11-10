import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/react';

export const Mainboard = () => {
  return (
    <Box w={'80%'} p={'30px'}>
      <Flex justify={'space-between'}>
        <Text w={'100%'}>Welcome, John Doe</Text>
        <Text w={'100%'}>icon</Text>
        <Text w={'100%'}>icon</Text>
        <Text w={'100%'}>icon</Text>
        <Text w={'100%'}>add items</Text>
        <Text>img</Text>
      </Flex>
    </Box>
  );
};

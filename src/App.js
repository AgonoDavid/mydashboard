import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Sidebar } from './component/Sidebar';
import { Mainboard } from './component/Mainboard';
import { Flex } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <Flex>
        <Sidebar />
        <Mainboard />
      </Flex>
    </ChakraProvider>
  );
}

export default App;

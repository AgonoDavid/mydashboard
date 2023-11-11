import React from 'react';
import { Flex, Text, Box, Spacer } from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { Data } from '../component/Data';

export const Mainboard = () => {
  return (
    <Box
      width={['100%', '100%', '80%']}
      fontFamily={'Space Grotesk'}
      ml={['20%', '20%', '20%']}
    >
      <Navbar />
      <Box px={['12px', '10px', '30px']} py={'30px'}>
        <Flex>
          <Text>Recent Activity</Text>
          <Spacer />
          <Box>See all</Box>
        </Flex>
        <Navigation />
        <Data />
      </Box>
    </Box>
  );
};

function Navigation() {
  return (
    <Box
      py={'20px'}
      fontWeight={'bold'}
      width={['100%', '100%', '100%']}
      fontSize={['3px', '6px', '10px']}
    >
      <Flex
        justify={'space-between'}
        border={'1px solid #7D7C7C'}
        px={'13px'}
        py={'5px'}
        borderRadius={'35px'}
        align={'center'}
      >
        <Box
          borderRadius={'25px'}
          bg={'#362fd9'}
          textColor={'white'}
          py={'5px'}
          px={'15px'}
        >
          <Text>All</Text>
        </Box>
        <Text>Invoice</Text>
        <Text>Deposit Requests</Text>
        <Text>Time Entries</Text>
        <Text>Expenses</Text>
        <Text>Events</Text>
        <Text>Documents</Text>
        <Text>Tasks</Text>
        <Text>Deleted</Text>
      </Flex>
    </Box>
  );
}

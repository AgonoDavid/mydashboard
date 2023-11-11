import React from 'react';
import {
  Flex,
  Text,
  Box,
  Spacer,
  Button,
  Image,
  Container,
} from '@chakra-ui/react';
import { Navbar } from './Navbar';
import { Data } from '../component/Data';
import dot from '../assets/icons8-dot-10.png';

export const Mainboard = () => {
  return (
    <Box w={'80%'} fontFamily={'Space Grotesk'}>
      <Navbar />
      <Box px={'60px'} py={'30px'}>
        <Flex>
          <Text>Recent Activity</Text>
          <Spacer />
          <Box>See all</Box>
        </Flex>
        <Navigation />
        {/* <DataItems /> */}
        <Data />
      </Box>
    </Box>
  );
};

// function DataItems() {
//   return (
//     <Container>
//       <Box>
//         <Flex
//           justify={'space-between'}
//           w={'100%'}
//           fontSize={'14px'}
//           align={'center'}
//         >
//           <Button bg={'none'}>
//             <Image src={dot} alt="dot" w={'70%'} />
//           </Button>
//           <Text>Name, phone</Text>
//           <Text>Company</Text>
//           <Text>Date</Text>
//           <Text>Status</Text>
//           <Button bg={'none'}>
//             <Image src={dot} alt="dot" w={'70%'} />
//           </Button>
//         </Flex>
//       </Box>
//     </Container>
//   );
// }

function Navigation() {
  return (
    <Box py={'20px'} w={'90%'} fontSize={'12px'} fontWeight={'bold'}>
      <Flex
        justify={'space-between'}
        border={'1px solid #7D7C7C'}
        px={'10px'}
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

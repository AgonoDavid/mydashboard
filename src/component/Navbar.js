import React from 'react';
import {
  Box,
  Text,
  Flex,
  Image,
  Spacer,
  Divider,
  Button,
} from '@chakra-ui/react';
import search from '../assets/icons8-search-22.png';
import questionMark from '../assets/icons8-where-what-quest-22.png';
import notification from '../assets/icons8-notification-bell-22.png';
import plus from '../assets/icons8-plus-22.png';
import profileImage from '../assets/profileImage.jpg';

export const Navbar = () => {
  return (
    <Box width={['100%', '100%', '100%']}>
      <Flex px={['10px', '30px', '30px']} py={'30px'}>
        <Box>
          <Text
            fontFamily={'Lora'}
            fontWeight={'bold'}
            fontSize={['14px', '10px', '2xl']}
            as={'h1'}
          >
            Welcome, John Doe 👋
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Flex gap={['10px', '25px', '25px']}>
            <Image
              src={search}
              objectFit={'contain'}
              w={['20%', '15%', '20%']}
              border={'1px solid #7D7C7C '}
              borderRadius={'20px'}
              p={'7px'}
              alt="search"
            />
            <Image
              src={questionMark}
              border={'1px solid #7D7C7C '}
              borderRadius={'20px'}
              objectFit={'contain'}
              w={['20%', '15%', '20%']}
              p={'5px'}
              alt="question"
            />
            <Image
              border={'1px solid #7D7C7C '}
              borderRadius={'20px'}
              p={'5px'}
              src={notification}
              objectFit={'contain'}
              w={['20%', '15%', '20%']}
              alt="notificationBell"
            />

            <Image />
          </Flex>
        </Box>
        <Box
          bg={'none'}
          border={'1px solid #7D7C7C'}
          borderRadius={'15px'}
          p={'7px'}
          boxSize={'10%'}
        >
          <Flex align={'center'} gap={['4px', '10px', '10px']}>
            <Image
              src={plus}
              w={['15%', '13%', '18%']}
              objectFit={'contain'}
              alt="plus"
            />
            <Text
              fontSize={['5px', '10px', '12px']}
              fontFamily={'Space Grotesk'}
            >
              Add item
            </Text>
          </Flex>
        </Box>
        <Button pl={'7px'} align={'center'} bg={'none'}>
          <Image
            src={profileImage}
            w={['25px', '45px', '45px']}
            borderRadius={'25px'}
          />
        </Button>
      </Flex>
      <Divider />
    </Box>
  );
};

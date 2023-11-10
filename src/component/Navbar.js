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
    <Box>
      <Flex p={'30px'}>
        <Box>
          <Text
            fontFamily={'Lora'}
            fontWeight={'bold'}
            fontSize={'30px'}
            as={'h1'}
          >
            👋 Welcome, David
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Flex gap={'25px'}>
            <Image
              src={search}
              objectFit={'contain'}
              w={'20%'}
              border={'1px solid #7D7C7C '}
              borderRadius={'20px'}
              p={'5px'}
              alt="search"
            />
            <Image
              src={questionMark}
              border={'1px solid #7D7C7C '}
              borderRadius={'20px'}
              objectFit={'contain'}
              w={'20%'}
              p={'5px'}
              alt="question"
            />
            <Image
              border={'1px solid #7D7C7C '}
              borderRadius={'20px'}
              p={'5px'}
              src={notification}
              objectFit={'contain'}
              w={'20%'}
              alt="notificationBell"
            />

            <Image />
          </Flex>
        </Box>
        <Button
          bg={'none'}
          border={'1px solid #7D7C7C'}
          borderRadius={'15px'}
          p={'7px'}
          w={'10%'}
        >
          <Flex align={'center'} gap={'10px'}>
            <Image src={plus} w={'18%'} alt="plus" />
            <Text fontSize={'13px'}>Add item</Text>
          </Flex>
        </Button>
        <Button pl={'7px'} align={'center'} bg={'none'}>
          <Image src={profileImage} w={'45px'} borderRadius={'25px'} />
        </Button>
      </Flex>
      <Divider />
    </Box>
  );
};

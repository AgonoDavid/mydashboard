import React, { useState } from 'react';
import { Box, Flex, Image, Text, Container, Button } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import calender from '../assets/icons8-calender-20.png';
import cases from '../assets/icons8-case-20.png';
import contact from '../assets/icons8-contacts-20.png';
import funnel from '../assets/icons8-funnel-20.png';
import home from '../assets/icons8-home-20 (1).png';
import mail from '../assets/icons8-mail-20.png';
import settings from '../assets/icons8-settings-20.png';
import support from '../assets/icons8-support-20.png';
import task from '../assets/icons8-task-20.png';
import workers from '../assets/icons8-user-groups-100.png';
import download from '../assets/icons8-umbrella-in-circle-22.png';

export const Sidebar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Box
      p={['8px']}
      w={{ base: '20%', md: '20%', lg: '20%' }} // Full width on small screens (base), 20% width on medium and larger screens (md)
      display={{ base: toggle ? 'none' : 'block', md: 'block' }} // Hide on small screens when toggle is true
      borderRight={'blue'}
      border={'1.5px solid #F1EFEF'}
      borderTop={'none'}
      borderBottom={'none'}
      borderLeft={'none'}
      fontFamily={'Space Grotesk'}
      h={'100vh'}
      pos={'fixed'}
    >
      <Box pt={'17px'} pos={'fixed'}>
        <Flex direction={'column'} p={[0, '5%']}>
          <Image
            objectFit={'cover'}
            src={logo}
            alt="logo"
            w={['20%', '50%', '60%']}
          />
          <Flex direction={'column'}>
            <Box mt={['10%', '8%', '8%']} textColor={'#7D7C7C'}>
              <Flex direction={'column'} lineHeight={['10', '2.8', '2.8']}>
                <Text fontSize={['11px', '15px', '15px']} fontWeight={'bold'}>
                  Account
                </Text>
                <Flex
                  border={'1px solid #362fd9'}
                  borderRadius={'25px'}
                  pl={'2px'}
                  bg={'#D6D5F7'}
                  textColor={'white'}
                  w={['10%', '55%']}
                >
                  <Image
                    src={home}
                    objectFit={'contain'}
                    w={['60%', '10%', '20%']}
                    alt="home"
                  />
                  <Text
                    fontSize={{ base: '0', md: '11px' }}
                    pl={{ base: '0', md: '6px' }}
                    textColor={'#362fd9'}
                  >
                    Home
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    src={calender}
                    w={['6%', '9%', '7%']}
                    objectFit={'contain'}
                    alt="calender"
                  />
                  <Text
                    fontSize={{ base: '0', md: '11px' }}
                    pl={{ base: '0', md: '6px' }}
                  >
                    Calender
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    src={task}
                    objectFit={'contain'}
                    w={['6%', '9%', '7%']}
                    alt="task"
                  />
                  <Text
                    fontSize={{ base: '0', md: '11px' }}
                    pl={{ base: '0', md: '6px' }}
                  >
                    Task
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    src={contact}
                    objectFit={'contain'}
                    w={['6%', '9%', '7%']}
                    alt="contact"
                  />
                  <Text
                    fontSize={{ base: '0', md: '11px' }}
                    pl={{ base: '0', md: '6px' }}
                  >
                    Contacts
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    src={cases}
                    objectFit={'contain'}
                    w={['6%', '7%', '7%']}
                    alt="cases"
                  />
                  <Text
                    fontSize={{ base: '0', md: '11px' }}
                    pl={{ base: '0', md: '6px' }}
                  >
                    Cases
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    src={mail}
                    objectFit={'contain'}
                    w={['6%', '7%', '7%']}
                    alt="communication"
                  />
                  <Text
                    fontSize={{ base: '0', md: '11px' }}
                    pl={{ base: '0', md: '6px' }}
                  >
                    Communication
                  </Text>
                </Flex>
                <Flex>
                  <Image
                    src={funnel}
                    objectFit={'contain'}
                    w={['6%', '7%', '7%']}
                    alt="leads"
                  />
                  <Text
                    fontSize={{ base: '0', md: '11px' }}
                    pl={{ base: '0', md: '6px' }}
                  >
                    Leads
                  </Text>
                </Flex>
              </Flex>
            </Box>
            <Box
              lineHeight={['10', '2.8', '2.8']}
              textColor={'grey'}
              pt={'15px'}
            >
              <Text fontSize={['12px', '14px', '14px']} fontWeight={'bold'}>
                Help
              </Text>
              <Flex>
                <Image
                  src={support}
                  objectFit={'contain'}
                  w={['6%', '7%', '7%']}
                  alt="support"
                />
                <Text
                  fontSize={{ base: '0', md: '11px' }}
                  pl={{ base: '0', md: '6px' }}
                >
                  Support
                </Text>
              </Flex>
              <Flex>
                <Image
                  src={settings}
                  objectFit={'contain'}
                  w={['6%', '7%', '7%']}
                  alt="settings"
                />
                <Text
                  fontSize={{ base: '0', md: '11px' }}
                  pl={{ base: '0', md: '6px' }}
                >
                  Settings
                </Text>
              </Flex>
            </Box>
          </Flex>
          <Box>
            <Image
              src={workers}
              objectFit={'contain'}
              w={['15%', '45%']}
              alt="workers"
              pb={'5px'}
              pt={'5px'}
            />
            <Text
              textColor={'grey'}
              fontSize={{ base: '0', md: '6px', lg: '9px' }}
              fontWeight={'bold'}
              pb={'3px'}
              pt={'3px'}
            >
              Download our Mobile App and be up to date
            </Text>
            <Button
              bg={'#362FD9'}
              textColor={'white'}
              mt={'10px'}
              size={['sm', 'sm', 'sm']}
              display={{ base: 'none', md: 'block', lg: 'block' }}
            >
              <Flex>
                <Image src={download} objectFit={'contain'} w={'13%'} />
                <Text pl={'6px'} fontSize={'9px'}>
                  Donwload App
                </Text>
              </Flex>
            </Button>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

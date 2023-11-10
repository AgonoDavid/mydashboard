import React from 'react';
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
  return (
    <Container
      w={'20%'}
      borderRight={'blue'}
      border={'1.5px solid #F1EFEF'}
      borderTop={'none'}
      borderBottom={'none'}
      borderLeft={'none'}
      fontFamily={'Space Grotesk'}
    >
      <Flex direction={'column'} pos={'sticky'} h={'100vh'} p={'10%'}>
        <Image objectFit={'cover'} src={logo} alt="logo" w={'80%'} />
        <Box mt={'4%'} textColor={'#7D7C7C'}>
          <Flex direction={'column'} lineHeight={'2.8'}>
            <Text fontSize={'15px'} fontWeight={'bold'}>
              Account
            </Text>
            <Flex
              border={'1px solid #362fd9'}
              borderRadius={'15px'}
              pl={'2px'}
              bg={'#D6D5F7'}
              textColor={'white'}
            >
              <Image src={home} objectFit={'contain'} w={'10%'} alt="home" />
              <Text fontSize={'11px'} pl={'6px'} textColor={'#362fd9'}>
                Home
              </Text>
            </Flex>
            <Flex>
              <Image
                src={calender}
                w={'10%'}
                objectFit={'contain'}
                alt="calender"
              />
              <Text fontSize={'11px'} pl={'6px'}>
                Calender
              </Text>
            </Flex>
            <Flex>
              <Image src={task} objectFit={'contain'} w={'10%'} alt="task" />
              <Text fontSize={'11px'} pl={'6px'}>
                Task
              </Text>
            </Flex>
            <Flex>
              <Image
                src={contact}
                objectFit={'contain'}
                w={'10%'}
                alt="contact"
              />
              <Text fontSize={'11px'} pl={'6px'}>
                Contacts
              </Text>
            </Flex>
            <Flex>
              <Image src={cases} objectFit={'contain'} w={'9%'} alt="cases" />
              <Text fontSize={'11px'} pl={'6px'}>
                Cases
              </Text>
            </Flex>
            <Flex>
              <Image
                src={mail}
                objectFit={'contain'}
                w={'9%'}
                alt="communication"
              />
              <Text fontSize={'11px'} pl={'6px'}>
                Communication
              </Text>
            </Flex>
            <Flex>
              <Image src={funnel} objectFit={'contain'} w={'10%'} alt="leads" />
              <Text fontSize={'11px'} pl={'6px'}>
                Leads
              </Text>
            </Flex>
          </Flex>
        </Box>
        <Box pt={'1%'} lineHeight={'2.4'} textColor={'grey'}>
          <Text fontSize={'14px'} fontWeight={'bold'}>
            Help
          </Text>
          <Flex>
            <Image
              src={support}
              objectFit={'contain'}
              w={'10%'}
              alt="support"
            />
            <Text fontSize={'11px'} pl={'6px'}>
              Support
            </Text>
          </Flex>
          <Flex>
            <Image
              src={settings}
              objectFit={'contain'}
              w={'10%'}
              alt="settings"
            />
            <Text fontSize={'11px'} pl={'6px'}>
              Settings
            </Text>
          </Flex>
        </Box>
        <Box align={'center'}>
          <Image
            src={workers}
            objectFit={'contain'}
            w={'45%'}
            alt="workers"
            pb={'5px'}
            pt={'5px'}
          />
          <Text
            textColor={'grey'}
            fontSize={'10px'}
            textAlign={'center'}
            fontWeight={'bold'}
            pb={'3px'}
            pt={'3px'}
          >
            Download our Mobile App and be up to date
          </Text>
          <Button bg={'#362FD9'} textColor={'white'} mt={'10px'}>
            <Flex>
              <Image src={download} objectFit={'contain'} w={'13%'} />
              <Text pl={'6px'} fontSize={'13px'}>
                Donwload App
              </Text>
            </Flex>
          </Button>
        </Box>
      </Flex>
    </Container>
  );
};

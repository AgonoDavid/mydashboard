import React from 'react';
import { Box, Flex, Image, Text, Container } from '@chakra-ui/react';
import logo from '../assets/logo.png';
import calender from '../assets/icons8-calender-20.png';
import cases from '../assets/icons8-case-20.png';
import contact from '../assets/icons8-contacts-20.png';
import funnel from '../assets/icons8-funnel-20.png';
import home from '../assets/icons8-home-20.png';
import mail from '../assets/icons8-mail-20.png';
import settings from '../assets/icons8-settings-20.png';
import support from '../assets/icons8-support-20.png';
import task from '../assets/icons8-task-20.png';

export const Sidebar = () => {
  return (
    <Container w={'20%'} borderRight={'blue'} border={'2px solid red'}>
      <Flex direction={'column'} pos={'sticky'} h={'100vh'} p={'10%'}>
        <Image objectFit={'cover'} src={logo} alt="logo" w={'80%'} />
        <Box border={'2px solid blue'} mt={'10%'}>
          <Flex direction={'column'} lineHeight={'2'}>
            <Text>Account</Text>
            <Flex>
              <Image src={home} objectFit={'contain'} w={'10%'} alt="home" />
              <Text textAlign={'start'}>Home</Text>
            </Flex>
            <Flex>
              <Image
                src={calender}
                w={'10%'}
                objectFit={'contain'}
                alt="calender"
              />
              <Text>Calender</Text>
            </Flex>
            <Flex>
              <Image src={task} objectFit={'contain'} w={'10%'} alt="task" />
              <Text>Task</Text>
            </Flex>
            <Flex>
              <Image
                src={contact}
                objectFit={'contain'}
                w={'10%'}
                alt="contact"
              />
              <Text>Contacts</Text>
            </Flex>
            <Flex>
              <Image src={cases} objectFit={'contain'} w={'10%'} alt="cases" />

              <Text>Cases</Text>
            </Flex>
            <Flex>
              <Image
                src={mail}
                objectFit={'contain'}
                w={'10%'}
                alt="communication"
              />
              <Text>Communication</Text>
            </Flex>
            <Flex>
              <Image src={funnel} objectFit={'contain'} w={'10%'} alt="leads" />
              <Text>Leads</Text>
            </Flex>
          </Flex>
        </Box>
        <Box pt={'10%'} lineHeight={'2'}>
          <Text>Help</Text>
          <Flex>
            <Image
              src={support}
              objectFit={'contain'}
              w={'10%'}
              alt="support"
            />
            <Text>Support</Text>
          </Flex>
          <Flex>
            <Image
              src={settings}
              objectFit={'contain'}
              w={'10%'}
              alt="settings"
            />
            <Text>Settings</Text>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

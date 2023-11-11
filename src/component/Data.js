import React from 'react';
import profile1 from '../assets/profileImage.jpg';
import { Box, Flex, Image, Text, Card, Container } from '@chakra-ui/react';

const Content = [
  {
    icon: '.',
    profile: 'Name, phone',
    work: 'Company',
    year: 'Date',
    stat: 'Status',
    img: profile1,
    clientName: 'Kathryn Murphy',
    phoneNo: '(201) 555-0124',
    company: 'Plusstrip',
    date: '2020-06-09',
    status: 'status',
  },
  {
    img: profile1,
    clientName: 'Devon Lane',
    phoneNo: '(201) 555-0124',
    company: 'Lexiqvolak',
    date: '2020-03-09',
    status: 'status',
  },
  {
    img: profile1,
    clientName: 'Esther Howard',
    phoneNo: '(201) 555-0124',
    company: 'Sunnamplex',
    date: '2020-07-15',
    status: 'status',
  },
  {
    img: profile1,
    clientName: 'Marvin Mkinney',
    phoneNo: '(201) 555-0124',
    company: 'year-job',
    date: '2020-01-12',
    status: 'status',
  },
  {
    img: profile1,
    clientName: 'Wade Warren',
    phoneNo: '(201) 555-0124',
    company: 'dambase',
    date: '2020-05-06',
    status: 'status',
  },
  {
    img: profile1,
    clientName: 'Leslie Alexander',
    phoneNo: '(201) 555-0124',
    company: 'Treequote',
    date: '2020-05-30',
    status: 'status',
  },
  {
    img: profile1,
    clientName: 'Dianne Russell',
    phoneNo: '(201) 555-0124',
    company: 'Nam-Zim',
    date: '2020-07-23',
    status: 'status',
  },
  {
    img: profile1,
    clientName: 'Albert Flores',
    phoneNo: '(201) 555-0124',
    company: 'Iselectrics',
    date: '2020-06-18',
    status: 'status',
  },
];

export const Data = () => {
  return (
    <Box>
      {Content.map(info => (
        <Profile profileData={info} key={info.clientName} />
      ))}
    </Box>
  );
};

function Profile({ profileData }) {
  return (
    <Flex justify={'space-between'} border={'2px solid red'}>
      <Container>
        <Text pb={'10px'}>{profileData.icon}</Text>
        <Box border={'2px solid red'}>
          <Image src={profileData.img} objectFit={'cover'} w={'20%'} />
        </Box>
      </Container>

      <Container fontSize={'12px'}>
        <Text pb={'10px'}>{profileData.profile}</Text>
        <Box>
          <Text>{profileData.clientName}</Text>
          <Text>{profileData.phoneNo}</Text>
        </Box>
      </Container>
      <Container fontSize={'12px'}>
        <Text pb={'10px'}>{profileData.work}</Text>
        <Box border={'2px solid red'} fontSize={'10px'}>
          <Text>{profileData.company}</Text>
        </Box>
      </Container>
      <Container fontSize={'12px'}>
        <Text>{profileData.year}</Text>
        <Box border={'2px solid red'}>
          <Text pb={'10px'}>{profileData.date}</Text>
        </Box>
      </Container>
      <Container fontSize={'12px'}>
        <Text pb={'10px'}>{profileData.stat}</Text>
        <Box border={'2px solid red'}>
          <Text>{profileData.status}</Text>
        </Box>
      </Container>
      <Container fontSize={'12px'}>
        <Box border={'2px solid red'}>
          <Text>...</Text>
        </Box>
      </Container>
    </Flex>
  );
}

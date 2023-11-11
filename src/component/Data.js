import React from 'react';
import profile1 from '../assets/profileImage.jpg';
import { Box, Flex, Image, Text, Container, Divider } from '@chakra-ui/react';

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
      {Content.map((info, index) => (
        <React.Fragment key={info.clientName}>
          <Profile profileData={info} />
          {index < Content.length - 1 && <Divider pb={'2px'} />}
        </React.Fragment>
      ))}
    </Box>
  );
};

function Profile({ profileData }) {
  return (
    <Box>
      <Flex direction={'row'}>
        <Container w={['40%', '30%', '25%']}>
          <Text pb={'10px'} pl={'50%'}>
            {profileData.icon}
          </Text>
          <Image
            src={profileData.img}
            objectFit={'cover'}
            w={'100%'}
            borderRadius={'20px'}
          />
        </Container>

        <Container fontSize={['5px', '12px', '12px']}>
          <Text pb={'10px'}>{profileData.profile}</Text>
          <Text>{profileData.clientName}</Text>
          <Text>{profileData.phoneNo}</Text>
        </Container>

        <Container fontSize={['5px', '12px', '12px']}>
          <Text pb={'10px'}>{profileData.work}</Text>

          <Text>{profileData.company}</Text>
        </Container>
        <Container fontSize={['5px', '12px', '12px']}>
          <Text pb={'10px'}>{profileData.year}</Text>
          <Text>{profileData.date}</Text>
        </Container>
        <Container fontSize={['5px', '12px', '12px']}>
          <Text pb={'10px'}>{profileData.stat}</Text>
          <Text>{profileData.status}</Text>
        </Container>
        <Box fontSize={['5px', '12px', '12px']}>
          <Text>{profileData.icon}</Text>
          <Text>...</Text>
        </Box>
      </Flex>
    </Box>
  );
}

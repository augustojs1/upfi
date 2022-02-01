import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  // const {
  //   data,
  //   isLoading,
  //   isError,
  //   isFetchingNextPage,
  //   fetchNextPage,
  //   hasNextPage,
  // } = useInfiniteQuery(
  //   'images',
  //   // TODO AXIOS REQUEST WITH PARAM
  //   ,
  //   // TODO GET AND RETURN NEXT PAGE PARAM
  // );

  // const formattedData = useMemo(() => {
  //   // TODO FORMAT AND FLAT DATA ARRAY
  // }, [data]);

  // TODO RENDER LOADING SCREEN

  // TODO RENDER ERROR SCREEN

  // mock button logic
  const hasNextPage = true;

  // mock data (delete after use)
  const formattedData = [
    {
      title: 'Doggy',
      description: 'The best doggy',
      url: './dog.png',
      ts: 3,
      id: '1276534',
    },
    {
      title: 'Doggy',
      description: 'The best doggy',
      url: './dog.png',
      ts: 3,
      id: '1245634',
    },
    {
      title: 'Doggy',
      description: 'The best doggy',
      url: './dog.png',
      ts: 3,
      id: '1214334',
    },
    {
      title: 'Doggy',
      description: 'The best doggy',
      url: './dog.png',
      ts: 3,
      id: '12134',
    },
  ];

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage ? (
          <Button backgroundColor="orange.500" color="pGray.50" mt="2.5rem">
            Carregar Mais
          </Button>
        ) : null}
      </Box>
    </>
  );
}

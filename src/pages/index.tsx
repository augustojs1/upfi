import { Button, Box } from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { AxiosResponse } from 'axios';
import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const fetchImages = async ({ pageParam = null }): Promise<any> => {
    const response = await api.get('api/images', {
      params: {
        after: pageParam,
      },
    });

    return response.data;
  };

  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery('images', fetchImages, {
    getNextPageParam: (lastPage, pages) => {
      if (pages[0].after) {
        return pages[0].after;
      }
      return null;
    },
  });

  const formattedData = useMemo(() => {
    if (data) {
      return data.pages[0].data;
    }
  }, [data]);

  console.log('formattedData', formattedData);

  // TODO RENDER LOADING SCREEN

  // TODO RENDER ERROR SCREEN

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

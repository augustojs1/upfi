/* eslint-disable no-param-reassign */
import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images',
    async ({ pageParam = null }) => {
      const response = await api.get(`/api/images`, {
        params: {
          after: pageParam,
        },
      });

      return response.data;
    },
    {
      getNextPageParam: lastPage => {
        return lastPage.after;
      },
    }
  );

  const formattedData = useMemo(() => {
    return data?.pages.reduce((acc, page) => {
      acc = acc?.concat(page.data);
      return acc;
    }, []);
  }, [data]);

  if (isLoading) {
    return (
      <>
        <Loading />;
      </>
    );
  }

  if (isError) {
    return (
      <>
        <Error />
      </>
    );
  }

  return (
    <>
      <Header />

      <Box
        maxW={1120}
        px={20}
        mx="auto"
        my={20}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button
            onClick={() => fetchNextPage()}
            width="10rem"
            marginTop="2rem"
          >
            {isFetchingNextPage ? 'Carregando...' : 'Carregar mais'}
          </Button>
        )}
      </Box>
    </>
  );
}

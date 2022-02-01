import { Grid, SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();

  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE
  function viewImage(url: string): void {
    onOpen();
  }

  return (
    <>
      <Grid templateColumns="1fr 1fr 1fr" columnGap="2.5rem" rowGap="2.5rem">
        {cards &&
          cards.map(card => (
            <>
              <Card data={card} viewImage={() => viewImage(card.url)} />
              <ModalViewImage
                isOpen={isOpen}
                onClose={onClose}
                imgUrl={card.url}
              />
            </>
          ))}
      </Grid>

      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}

import { InfiniteLoader, List } from 'react-virtualized';
import { IGif } from '../../../models/IGif';
import { useState } from 'react';
import GifItem from '../gif-item/GifItem';
import VirtualScroller from 'virtual-scroller/react';
import { Box } from '@mui/material';
import { gifsStyles } from './gifsStyles';

interface VirtualScrollProps {
  gifs: IGif[];
}
export function VirtualScroll({ gifs }: VirtualScrollProps) {
  console.log('VirtualScroll: ', gifs);

  return (
    <Box mx={gifsStyles}>
      <VirtualScroller
        getColumnsCount={() => 3}
        items={gifs}
        itemComponent={GifItem}
      />
    </Box>
  );
}

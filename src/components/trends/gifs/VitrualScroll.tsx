import { IGif } from '../../../models/IGif';
import GifItem from '../gif-item/GifItem';
import VirtualScroller from 'virtual-scroller/react';
import { Box } from '@mui/material';
import { gifsStyles } from './gifsStyles';
import type { ScrollableContainer } from 'virtual-scroller';

interface VirtualScrollProps {
  gifs: IGif[];
}
export function VirtualScroll({ gifs }: VirtualScrollProps) {
  const getColumnsCount = (container: ScrollableContainer<number>): number => {
    if (container.getWidth() > 500) {
      return 3;
    }
    return 2;
  };
  return (
    <Box sx={gifsStyles}>
      <VirtualScroller
        getColumnsCount={getColumnsCount}
        items={gifs}
        itemComponent={GifItem}
      />
    </Box>
  );
}

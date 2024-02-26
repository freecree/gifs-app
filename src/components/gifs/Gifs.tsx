import Box from '@mui/material/Box';
import VirtualScroller from 'virtual-scroller/react';
import type { ScrollableContainer } from 'virtual-scroller';
import { IGif } from '../../models/IGif';
import GifItem from './gif-item/GifItem';
import { gifsStyles } from './gifsStyles';

function Gifs({ gifs }: { gifs: IGif[] }) {
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
export default Gifs;

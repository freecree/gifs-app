import { IGif } from '../../../models/IGif';
import { gifItemStyles } from './gifItemStyles';
import { Box } from '@mui/material';

function GifItem({ item: gif }: { item: IGif }) {
  return (
    <Box sx={gifItemStyles}>
      <img src={gif.images.original.url} />
    </Box>
  );
}

export default GifItem;

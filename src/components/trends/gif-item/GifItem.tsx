import ImageListItem from '@mui/material/ImageListItem';
import { IGif } from '../../../models/IGif';
import { gifItemStyles } from './gifItemStyles';

function GifItem({ gif }: { gif: IGif }) {
  return (
    <ImageListItem sx={gifItemStyles}>
      <img src={gif.images.original.url} />
    </ImageListItem>
  );
}

export default GifItem;

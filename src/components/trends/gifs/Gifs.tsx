import ImageList from '@mui/material/ImageList';
import { useGetTrendGifsQuery } from '../../../services/gifService';
import GifItem from '../gif-item/GifItem';
import CircularProgress from '@mui/material/CircularProgress';

function Gifs() {
  const { data: gifs, error, isLoading } = useGetTrendGifsQuery();

  return (
    <>
      {error ? (
        <div>Opps, something went wrong...</div>
      ) : isLoading ? (
        <CircularProgress />
      ) : gifs ? (
        <ImageList rowHeight={200} gap={10} cols={3}>
          {gifs.data.map((gif) => (
            <GifItem gif={gif} key={gif.id} />
          ))}
        </ImageList>
      ) : null}
    </>
  );
}
export default Gifs;

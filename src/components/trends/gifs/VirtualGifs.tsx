import { useGetTrendGifsQuery } from '../../../services/gifService';
import CircularProgress from '@mui/material/CircularProgress';
import { useEffect, useState } from 'react';
import { VirtualScroll } from './VitrualScroll';

function VirtualGifs() {
  const [page, setPage] = useState(0);
  const {
    data: gifs,
    error,
    isFetching,
    isLoading,
  } = useGetTrendGifsQuery(page);
  console.log('page: ', page);

  useEffect(() => {
    const scrollHandler = () => {
      const scrolledToBottom =
        document.body.offsetHeight - (window.innerHeight + window.scrollY) <
        100;
      if (scrolledToBottom && !isFetching) {
        setPage(page + 1);
      }
    };

    document.addEventListener('scroll', scrollHandler);
    return function () {
      document.removeEventListener('scroll', scrollHandler);
    };
  }, [page, isFetching]);

  return (
    <>
      {error ? (
        <div>Opps, something went wrong...</div>
      ) : isLoading ? (
        <CircularProgress />
      ) : gifs ? (
        <VirtualScroll gifs={gifs.data} />
      ) : null}
    </>
  );
}
export default VirtualGifs;

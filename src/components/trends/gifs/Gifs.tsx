import { useGetTrendGifsQuery } from '../../../services/gifService';
import CircularProgress from '@mui/material/CircularProgress';
import { useState } from 'react';
import { VirtualScroll } from './VitrualScroll';
import useInfinityScroll from '../../../hooks/useInfinityScroll';

function Gifs() {
  const [page, setPage] = useState(0);

  const {
    data: gifs,
    error,
    isFetching,
    isLoading,
  } = useGetTrendGifsQuery(page);

  useInfinityScroll(isFetching, page, setPage);

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
export default Gifs;

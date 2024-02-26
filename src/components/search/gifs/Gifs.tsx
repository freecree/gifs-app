import { useState } from 'react';
import { useGetSearchedGifsQuery } from '../../../services/gifService';
import useInfinityScroll from '../../../hooks/useInfinityScroll';
import { CircularProgress } from '@mui/material';
import { VirtualScroll } from '../../trends/gifs/VitrualScroll';

function Gifs({ searchValue }: { searchValue: string }) {
  const [page, setPage] = useState(0);
  const {
    data: gifs,
    error,
    isLoading,
    isFetching,
  } = useGetSearchedGifsQuery({ searchQuery: searchValue, page });

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

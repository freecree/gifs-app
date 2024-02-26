import { useState } from 'react';
import useInfinityScroll from '../../hooks/useInfinityScroll';
import { useGetTrendGifsQuery } from '../../services/gifService';
import AppNavigation from '../app-navigation/AppNavigation';
import PageWrapper from '../page-wrapper/PageWrapper';
import Gifs from '../gifs/Gifs';
import CircularProgress from '@mui/material/CircularProgress';

function Trends() {
  const [page, setPage] = useState(0);

  const {
    data: gifs,
    error,
    isFetching,
    isLoading,
  } = useGetTrendGifsQuery(page);

  const scrollBottomHandler = () => {
    setPage(page + 1);
  };

  useInfinityScroll(isFetching, scrollBottomHandler);
  return (
    <PageWrapper>
      <AppNavigation />
      {error ? (
        <div>Opps, something went wrong...</div>
      ) : isLoading ? (
        <CircularProgress />
      ) : gifs ? (
        <Gifs gifs={gifs.data} />
      ) : null}
    </PageWrapper>
  );
}

export default Trends;

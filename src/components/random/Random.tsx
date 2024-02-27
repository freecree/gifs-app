import Button from '@mui/material/Button';
import AppNavigation from '../app-navigation/AppNavigation';
import PageWrapper from '../page-wrapper/PageWrapper';
import CachedIcon from '@mui/icons-material/Cached';
import { useGetRandomGifQuery } from '../../services/gifService';
import Box from '@mui/material/Box';
import { gifItemStyles } from './randomStyles';
import CircularProgress from '@mui/material/CircularProgress';

function Random() {
  const { data: gif, refetch, error, isFetching } = useGetRandomGifQuery();

  const handleButtonClick = () => {
    refetch();
  };
  return (
    <PageWrapper>
      <AppNavigation />
      <Button
        variant='contained'
        endIcon={<CachedIcon />}
        onClick={handleButtonClick}
      >
        Update
      </Button>
      <Box sx={gifItemStyles}>
        {error ? (
          <div>Opps, something went wrong...</div>
        ) : isFetching ? (
          <CircularProgress />
        ) : gif ? (
          <img src={gif.data.images.original.url} />
        ) : null}
      </Box>
    </PageWrapper>
  );
}

export default Random;

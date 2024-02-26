import AppNavigation from '../app-navigation/AppNavigation';
import PageWrapper from '../page-wrapper/PageWrapper';
import { CircularProgress, InputAdornment, TextField } from '@mui/material';
import { searchInputStyles } from './searchStyles';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { useGetSearchedGifsQuery } from '../../services/gifService';
import Gifs from '../gifs/Gifs';
import useInfinityScroll from '../../hooks/useInfinityScroll';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 2000);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const [page, setPage] = useState(0);
  const {
    data: gifs,
    error,
    isLoading,
    isFetching,
  } = useGetSearchedGifsQuery({ searchQuery: debouncedSearchValue, page });

  const scrollBottomHandler = () => {
    setPage(page + 1);
  };

  useInfinityScroll(isFetching, scrollBottomHandler);

  return (
    <PageWrapper>
      <AppNavigation />
      <TextField
        sx={searchInputStyles}
        variant='outlined'
        onChange={handleSearch}
        value={searchValue}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      >
        <SearchIcon />
      </TextField>
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

export default Search;

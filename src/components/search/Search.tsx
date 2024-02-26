import AppNavigation from '../app-navigation/AppNavigation';
import PageWrapper from '../page-wrapper/PageWrapper';
import { InputAdornment, TextField } from '@mui/material';
import { searchInputStyles } from './searchStyles';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import useDebounce from '../../hooks/useDebounce';
import Gifs from './gifs/Gifs';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const debouncedSearchValue = useDebounce(searchValue, 2000);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

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
      <Gifs searchValue={debouncedSearchValue} />
    </PageWrapper>
  );
}

export default Search;

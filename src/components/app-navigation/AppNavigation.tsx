import { Box, Button, ButtonGroup } from '@mui/material';
import { appNavigationStyles, buttonGroupStyles } from './appNavigationStyles';
import { settingButtonStyles } from './appNavigationStyles';
import { Link } from 'react-router-dom';

function AppNavigation() {
  return (
    <Box mx={appNavigationStyles}>
      <ButtonGroup
        sx={buttonGroupStyles}
        variant='contained'
        aria-label='Basic button group'
      >
        <Link to={'/find-gifs/'}>
          <Button variant='contained'>Trends</Button>
        </Link>
        <Link to={'/find-gifs/search/'}>
          <Button variant='contained'>Search</Button>
        </Link>
        <Button variant='contained'>Random</Button>
        <Button sx={settingButtonStyles} variant='contained' color='primary'>
          Settings
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default AppNavigation;

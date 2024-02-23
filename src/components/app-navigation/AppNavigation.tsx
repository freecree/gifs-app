import { Box, Button, ButtonGroup } from '@mui/material';
import { appNavigationStyles, buttonGroupStyles } from './appNavigationStyles';
import { settingButtonStyles } from './appNavigationStyles';

function AppNavigation() {
  return (
    <Box mx={appNavigationStyles}>
      <ButtonGroup
        sx={buttonGroupStyles}
        variant='contained'
        aria-label='Basic button group'
      >
        <Button variant='contained'>Trends</Button>
        <Button variant='contained'>Search</Button>
        <Button variant='contained'>Random</Button>
        <Button sx={settingButtonStyles} variant='contained' color='primary'>
          Settings
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default AppNavigation;

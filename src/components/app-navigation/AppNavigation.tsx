import { Box, Button, ButtonGroup } from '@mui/material';
import { appNavigationStyles } from './appNavigationStyles';
import SettingsButton from '../buttons/settings-button/SettingsButton';

function AppNavigation() {
  return (
    <Box mx={appNavigationStyles}>
      <ButtonGroup variant='contained' aria-label='Basic button group'>
        <Button variant='contained'>Trends</Button>
        <Button variant='contained'>Search</Button>
        <Button variant='contained'>Random</Button>
        <SettingsButton>Settings</SettingsButton>
      </ButtonGroup>
    </Box>
  );
}

export default AppNavigation;

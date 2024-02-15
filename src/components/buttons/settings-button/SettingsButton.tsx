import { Button } from '@mui/material';
import { settingButtonStyles } from './settingsButtonStyles';

function SettingsButton({ children }: { children: React.ReactNode }) {
  return (
    <Button sx={settingButtonStyles} variant='contained' color='primary'>
      {children}
    </Button>
  );
}

export default SettingsButton;

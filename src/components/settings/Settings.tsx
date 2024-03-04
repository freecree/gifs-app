import Button from '@mui/material/Button';
import AppNavigation from '../app-navigation/AppNavigation';
import PageWrapper from '../page-wrapper/PageWrapper';
import { Box } from '@mui/material';
import { buttonGroupStyles } from './settingsStyles';
import { useAppDispatch } from '../../hooks/reduxHooks';
import { setAnimation } from '../../slices/animationSlice';
import { AnimationOptions } from '../../types/AnimationOptions';

function Settings() {
  const dispatch = useAppDispatch();
  const handleSettingsChange = (animation: AnimationOptions) => {
    localStorage.setItem('animation', animation);
    dispatch(setAnimation(animation));
  };
  return (
    <PageWrapper>
      <AppNavigation />
      <Box sx={buttonGroupStyles}>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => handleSettingsChange(AnimationOptions.SQUARES)}
        >
          Squares
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => handleSettingsChange(AnimationOptions.BUBBLES)}
        >
          Bubbles
        </Button>
        <Button
          variant='contained'
          color='secondary'
          onClick={() => handleSettingsChange(AnimationOptions.CIRCLES)}
        >
          Circles
        </Button>
      </Box>
    </PageWrapper>
  );
}

export default Settings;

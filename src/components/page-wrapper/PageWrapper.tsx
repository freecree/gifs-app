import { Box, Container } from '@mui/material';
import { pageWrapperStyles } from './pageWrapperStyles';
import Squares from '../animations/squares/Squares';
import Circles from '../animations/circles/Circles';
import { useAppSelector } from '../../hooks/reduxHooks';
import { AnimationOptions } from '../../types/AnimationOptions';
import Bubbles from '../animations/bubbles/Bubbles';

function PageWrapper({ children }: { children: React.ReactNode }) {
  const animation: AnimationOptions = useAppSelector(
    (state) => state.animation.option,
  );

  const animationComponents = {
    [AnimationOptions.CIRCLES]: <Circles />,
    [AnimationOptions.SQUARES]: <Squares />,
    [AnimationOptions.BUBBLES]: <Bubbles />,
  };
  return (
    <Box mx={pageWrapperStyles}>
      {animationComponents[animation]}
      <Container>{children}</Container>
    </Box>
  );
}

export default PageWrapper;

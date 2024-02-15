import { Box, Container } from '@mui/material';
import { pageWrapperStyles } from './pageWrapperStyles';
import Squares from '../animations/squares/Squares';

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Box mx={pageWrapperStyles}>
      <Squares />
      <Container>{children}</Container>
    </Box>
  );
}

export default PageWrapper;

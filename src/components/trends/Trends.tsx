import AppNavigation from '../app-navigation/AppNavigation';
import PageWrapper from '../page-wrapper/PageWrapper';
import Gifs from './gifs/Gifs';

function Trends() {
  return (
    <PageWrapper>
      <AppNavigation />
      <Gifs />
    </PageWrapper>
  );
}

export default Trends;

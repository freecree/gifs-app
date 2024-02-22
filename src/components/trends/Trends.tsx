import AppNavigation from '../app-navigation/AppNavigation';
import PageWrapper from '../page-wrapper/PageWrapper';
import Gifs from './gifs/Gifs';
import VirtualGifs from './gifs/VirtualGifs';

function Trends() {
  return (
    <PageWrapper>
      <AppNavigation />
      {/* <Gifs /> */}
      <VirtualGifs />
    </PageWrapper>
  );
}

export default Trends;

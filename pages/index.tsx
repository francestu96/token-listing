import { Default } from 'components/templates/Default';
import { Home } from 'components/templates/Home';
import type { NextPage } from 'next';

const HomePage: NextPage = () => {
  return (
    <Default pageName="Home">
      <Home />
    </Default>
  );
};

export default HomePage;
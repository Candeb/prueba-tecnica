import { Categories } from './components/categories/Categories';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import { InfoSection } from './components/info-section/InfoSection';
import Layout from './components/layout/Layout';
import { MostSoldSection } from './components/most-sold/MostSoldSection';
import { NavDesktop } from './components/nav/NavDesktop';
import { Trends } from './components/trends/Trends';

function App() {
  return (
    <Layout>
      <Header />
      <NavDesktop />
      <Hero />
      <Trends />
      <Categories />
      <MostSoldSection />
      <InfoSection />
    </Layout>
  );
}

export default App;

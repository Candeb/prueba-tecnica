import { Categories } from './components/categories/Categories';
import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
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
    </Layout>
  );
}

export default App;

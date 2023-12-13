import { Header } from './components/header/Header';
import { Hero } from './components/hero/Hero';
import Layout from './components/layout/Layout';
import { NavDesktop } from './components/nav/NavDesktop';

function App() {
  return (
    <Layout>
      <Header />
      <NavDesktop />
      <Hero />
    </Layout>
  );
}

export default App;

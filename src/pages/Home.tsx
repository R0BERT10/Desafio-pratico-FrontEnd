import Celebrities from '../ui/partials/Home/Celebrities';
import Footer from '../ui/partials/Home/Footer';
import Header from '../ui/partials/Home/Header';
import Highlights from '../ui/partials/Home/Highlights';
import Recommended from '../ui/partials/Home/Recommended';
import Releases from '../ui/partials/Home/Releases';
import Watched from '../ui/partials/Home/Watched';
import './index.css';

export default function Home() {
  return (
    <div
      style={{
        width: '1440px',
        height: '2286px',
        backgroundColor: '#121212',
        borderRadius: '24px',
        position: 'relative',
        overflow: 'hidden',
        margin: '0 auto',
      }}
      className='main-container'
    >
      <Header></Header>
      <Highlights></Highlights>
      <Recommended></Recommended>
      <Releases></Releases>
      <Watched></Watched>
      <Celebrities></Celebrities>
      <Footer></Footer>
    </div>
  );
}
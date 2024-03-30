import './homepage.modules.css';
import { Shelf } from './drawers';
import { Footer } from '../footer';
import { Header } from '../header';
import { Welcome } from './welcome';

export default function Homepage() {
  return (
    <>
      <div className='Landing-container'>
        <Header />
        <div className='Home-container'>
          <Welcome />
        </div>
      </div>
      <Footer />
    </>
  );
}
import './homepage.modules.css';
import { Shelf } from './drawers';
import { Footer } from '../footer';
import { Header } from '../header2';
import { Welcome } from './welcome';

export default function Homepage() {
  return (
    <>
      <Header />
      <div className='Landing-container'>
        <Welcome />
      </div>
      <Footer />
    </>
  );
}
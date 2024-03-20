import './App.css';
import { Bio } from './elements/bio';
import { Shelf } from './elements/drawers';
import { Footer } from './elements/footer';
import { Header } from './elements/header';

export default function Homepage() {
  return (
    <>
      <Header />
      <div className='Landing-container'>
        <div className='Element-column'>
          <Bio />
        </div>
        <div className='Element-column'>
          <Shelf />
        </div>
      </div>
      <Footer />
    </>
  );
}
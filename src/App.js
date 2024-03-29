import './App.css';
import { Bio } from './elements/bio';
import { Shelf } from './elements/drawers';
import { Footer } from './elements/footer';
import { Header } from './elements/header';
import { Welcome } from './elements/welcome';

export default function Homepage() {
  return (
    <>
      <div className='Landing-container'>
        <Header />
        <div className='Home-container'>
          <Welcome />
          <Shelf />
        </div>
      </div>
      <Footer />
    </>
  );
}
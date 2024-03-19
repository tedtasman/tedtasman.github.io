import './App.css';
import { Bio } from './elements/bio';
import { Shelf } from './elements/drawers';

export default function Homepage() {
  return (
    <>
      <div>
        hello
      </div>
      <div className='Landing-container'>
        <div className='element column'>
          <Bio />
        </div>
        <div className='element column'>
          <Shelf />
        </div>
      </div>
    </>
  );
}
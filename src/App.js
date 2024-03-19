import { useState } from 'react';
import './App.css';
import texts from './content/texts.json';

export default function Homepage() {
  return (
    <>
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

function Bio() {

  return (
    <div className='Bio'>
      <h1>{texts.bio.name}</h1>
      <p>{texts.bio.body}</p>   
    </div>
  )
}

function Drawer({ title, content, isOpen, onToggle, onClose }) {

  return (
    <p>
      <div className='Drawer' >
        {isOpen ? (
          <div>
            <button className='Drawer-back-button' onClick={onClose}>Back</button>
            <h2>{title}</h2>
            <div className='Drawer-content'>{content}</div>
          </div>
        ) : (
          <button className='Drawer-button' onClick={onToggle}>{title}</button>
        )}
      </div>
    </p>
  );
}

function Shelf() {

  const [drawers, setDrawers] = useState([
    { index: 1, title: texts.drawer1.title, content: texts.drawer1.body, isOpen: false },
    { index: 2, title: texts.drawer2.title, content: texts.drawer2.body, isOpen: false },
    { index: 3, title: texts.drawer3.title, content: texts.drawer3.body, isOpen: false }
  ]);

  const [openDrawerID, setOpenDrawerId] = useState(null);

  // handle clicking on any drawer
  const handleDrawerToggle = (index) => {
    setOpenDrawerId(index === openDrawerID ? null : index);
  }

  // handle closing drawers
  const handleDrawerClose = () => {
    // check through drawers
    const updatedDrawers = drawers.map(drawer => ({

      ...drawer, // copy drawer objects
      // if current drawer was clicked -> close, else -> close
      isOpen: drawer.index === openDrawerID ? false : drawer.isOpen
    }));

    setDrawers(updatedDrawers);
    setOpenDrawerId(null);
  };

  return (
    <div className='Shelf'>
      {drawers.map((drawer) => (
        <div key={drawer.index}>
          {openDrawerID !== null && openDrawerID !== drawer.index ? null : (
            <Drawer 
              title={drawer.title}
              content={drawer.content}
              isOpen={drawer.index === openDrawerID}
              onToggle={() => handleDrawerToggle(drawer.index)}
              onClose={handleDrawerClose}
            />
          )}
        </div>
      ))}
    </div>
  );
}
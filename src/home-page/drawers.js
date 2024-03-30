import { useState } from 'react';
import texts from './content/texts.json';

export function Drawer({ title, content, isOpen, onToggle, onClose }) {

    return (
        <div className='Drawer' >
            {isOpen ? (
            <div>
                <button className='Drawer-back-button' onClick={onClose}>Back</button>
                <h2 className='Drawer-title'>{title}</h2>
                <div className='Drawer-content'>{content}</div>
            </div>
            ) : (
            <button className='Drawer-button' onClick={onToggle}>{title}</button>
            )}
        </div>
    );
}
  
export function Shelf() {
  
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
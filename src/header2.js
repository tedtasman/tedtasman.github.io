import './header2.modules.css';
import { useState } from "react";
import { Link } from 'react-router-dom';

export function Header() {

    const [expanded, setExpanded] = useState(false);

    const expandHeader = () => {
        setExpanded(true);
    }

    const closeHeader = () => {
        setExpanded(false)
    }

    return (
        <>
            <div className={`Header ${expanded ? 'expanded' : ''}`} onMouseLeave={closeHeader}>
                <div className='Left-header'>
                    <PagesButton className={'Home-button'} title='Ted Tasman' page={'/'} />
                </div>
                <div style={{display: 'flex', alignItems: 'center', gap: '2em'}}>
                    <PagesButton className={'Tab-button'} title={'About Me'} page={'/about'} action={expandHeader} />
                    <PagesButton className={'Tab-button'} title={'Experience'} page={'/experience'} action={expandHeader} />
                    <PagesButton className={'Tab-button'} title={'Projects'} page={'/projects'} action={expandHeader} />
                </div>
                <div className='Right-header'>
                    <PagesButton className={'Home-button'} title='Contact' page={'/'} />
                </div>
            </div>
        </>
    );

}

const PagesButton = ( {className, title, page, action} ) => {
    return (
        <Link to={page}>
            <button className={className} onMouseEnter={action}>{title}</button>
        </Link>
    );
}
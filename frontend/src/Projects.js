import './App.js'
import { Header } from './PageHeader';
import { Footer } from './PageFooter';

export function Projects() {
    return (
        <div style={{ display: 'flex' , flexDirection: 'column'}}>
            <Header className='Header-bg expanded'/>
            <div className='Wrapper'>
                <div className='Inner'>
                    Projects
                </div>
            </div>
            <Footer className='Footer-bg expanded'/>
        </div>
    )
}
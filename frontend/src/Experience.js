import './App.js'
import { Header } from './PageHeader';
import { Footer } from './PageFooter';

export function Experience() {
    return (
        <div style={{ display: 'flex' , flexDirection: 'column'}}>
            <Header className='Header-bg expanded'/>
            <div className='Wrapper'>
                <div className='Inner'>
                    Experience
                </div>
            </div>
            <Footer className='Footer-bg expanded'/>
        </div>
    )
}
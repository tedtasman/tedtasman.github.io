import { Header } from './PageHeader';
import './Header.css'
import { Footer } from './PageFooter';
import './Footer.css'

export function About() {
    return(
        <>
            <Header className={'Header-bg expanded'}/>
            <Footer className={'Footer-bg expanded'}/>
        </>
    )
}
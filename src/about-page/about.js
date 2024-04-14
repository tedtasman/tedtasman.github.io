import { Footer } from "../footer";
import { Header } from "../header2";
import './about.modules.css'

export default function About() {

    return (
        <>
            <Header />
            <div className='About-landing'>
                <div className='Page-title'>
                    <h1>About Me</h1>
                    <h2>Insight into my interests, motivations, and goals</h2>
                    <h1><i class="fa-solid fa-chevron-down fa-xl"></i></h1>
                </div>
            </div>
            <Footer />
        </>
    );
}
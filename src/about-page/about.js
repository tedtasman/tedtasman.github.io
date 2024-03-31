import { Header } from "../header";
import './about.modules.css'

export default function About() {

    return (
        <>
            <div className='About-landing'>
                <Header />
                <div className='Page-title'>
                    <h1>About Me</h1>
                    <h2>Insight into my interests, motivations, and goals</h2>
                    <h1><i class="fa-solid fa-chevron-down fa-xl"></i></h1>
                </div>
            </div>
        </>
    );
}
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'

export default function Home() {
    return (
        <div className='homesec'>

            <div className='container'>

                <section>
                    <p> Hey , I’am Aya! </p>

                    <h1>I Build & Design Web Interfaces.</h1>

                    <p>I am a front end developer from Egypt , i enjoy building everything from small sites to rich interactive websites. I have a serious passion for coding.</p>

                    <Link to='/contact'>Work With ME</Link>
                </section>

            </div>
        </div>
    )
}

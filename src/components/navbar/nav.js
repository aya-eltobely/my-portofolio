import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

export default function Nav() {

    const [clck , setclck] = useState(false);

    const opennav = () =>
    {
        setclck(!clck);
    }

    const closenav = () =>
    {
        setclck(false);
    }



    return (
        <div className='sec1'>

            <nav>
                <i className="fa-solid fa-bars-staggered" onClick={opennav}></i>
            </nav>

            <section className={ clck? 'opennavv' : 'navsec'  }>

                <div className='container'>

                    <article >
                        <div className='closeicon'>
                            <i className="fa-solid fa-xmark" onClick={closenav}></i>
                        </div>
                        <h1>Aya</h1>

                        <ul className='navlink'>
                            <li> <NavLink to='/' onClick={closenav} > Home </NavLink>  </li>
                            <li> <NavLink to='/about' onClick={closenav} > About </NavLink>  </li>
                            <li> <NavLink to='/skills' onClick={closenav} > Skills </NavLink>  </li>
                            <li> <NavLink to='/portfolio' onClick={closenav}  > Portfolio </NavLink>  </li>
                            <li> <NavLink to='/contact' onClick={closenav} > Contact </NavLink>  </li>
                        </ul>

                        <ul className='social'>
                            <li> <a href='https://github.com/aya-eltobely' target='_blank'> <i className="fa-brands fa-github"></i> </a>   </li>
                            <li> <a href='https://www.linkedin.com/in/aya-eltobely-b141141a7' target='_blank'> <i className="fa-brands fa-linkedin"></i> </a>   </li>
                            <li> <a href='https://www.Wuzzuf.net/me/Aya-Eltobely-691863e108' target='_blank'> <i className="fa-solid fa-w"></i> </a>   </li>
                        </ul>

                        <div className='footer'>
                            &copy; 2022 aya eltobely. All rights reserved.
                        </div>
                    </article>

                </div>


            </section>

        </div>
    )
}

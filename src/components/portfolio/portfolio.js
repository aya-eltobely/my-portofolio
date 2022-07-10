import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import './style.css'

export default function Portfolio() {

  const [porto, setporto] = useState([]);

  useEffect(() => {
    axios.get('data.json').then((res) => {
      setporto(res.data.portofolio)
    })
  }, [])

  const finalporto = porto.map((i) => {
    return (

      <figure key={i.id}>
        <a href={i.linkk} target='_blank'>
          <img src={i.img} />
        </a>
        <h2>{i.title}</h2>
        <p>{i.par}</p>
      </figure>

    )
  })
  return (
    <div className='portfoliossec'>
      <div className='container'>

        <section>

          <h1>PORTFOLIO</h1>

          <article>

            {finalporto}
          </article>

        </section>
      </div>
    </div>
  )
}

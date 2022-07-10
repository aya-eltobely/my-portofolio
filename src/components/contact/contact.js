import React from 'react'
import './style.css'

export default function Contact() {
  return (
    <div className='contactsec'>
      <div className='container'>

        <section>

          <h1>Contact Information</h1>

          <article>
            
            <figure>

              <p> <span>Address:</span> 10th Of Ramadan City, Egypt </p>
              <p> <span>Phone:</span> +2 01067628973 </p>
              <p> <span>Email:</span> aya.eltobely@gmail.com </p>
              <p> <span>Linked In:</span> <a href='https://www.linkedin.com/in/aya-eltobely-b141141a7' target='_blank'>linkedin/aya.eltobely</a> </p>
              <p> <span>GitHub:</span> <a href='https://github.com/aya-eltobely' target='_blank'>github/aya-eltobely</a> </p>

            </figure>

            <form>

              <input type='text' name='name' placeholder='Your Name' />
              <input type='text' name='email' placeholder='Your Email' />
              <input type='text' name='subject' placeholder='Subject' />
              <textarea placeholder='Message'></textarea>
              <input type='submit' value='Send Message' />

            </form>
          </article>

        </section>

      </div>
    </div>
  )
}

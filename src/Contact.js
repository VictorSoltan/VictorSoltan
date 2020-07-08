import React from 'react'
import './contact.scss'

class Contact extends React.Component {
  render(){
    return (
      <div className="contact">
       <div>
        <p>Свяжитесь со мной:</p>
        <div className="input">
         <div>
          <label>Имя</label>
          <input />
         </div>
         <div>
          <label>Фамилия</label>
          <input />
         </div>
        </div>
        <div className="input-text">
         <label>Email</label>
         <input />
         <label>Ваше сообщение</label>
         <input />
        </div>
       </div>
      </div>
    )
  }
}

export default Contact;

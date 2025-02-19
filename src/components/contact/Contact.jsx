import style from './contact.module.css'
import { FaEnvelope, FaPhone, FaUser } from "react-icons/fa";

export function Contact() {
  return (
    <div className={style.contact} id='contact'>
      <h2>
        <span>CONTACT </span>US
      </h2>
      <div className={style.contactDiv}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13184.754459476679!2d48.92286726977539!3d-15.04375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2219e3b240201a29%3A0xc44ac21a3832a910!2sAntsakabary!5e1!3m2!1sfr!2smg!4v1662193099972!5m2!1sfr!2smg"
            width="600"
            height="450"
            frameborder="0"
            style={{border: "0"}}
            allowfullscreen
          >
          </iframe>
        <div className={style.contacts}>
          <h2>GET IN TOUCH</h2>
          <label><FaUser className={style.Fa}/>
            <input type="text" placeholder="name" />
          </label>
          <label><FaEnvelope className={style.Fa}/>
            <input type="email" placeholder="e-mail" />
          </label>
          <label><FaPhone className={style.Fa}/>
            <input type="number" placeholder="number" />
          </label>
          <a href="#"><button className={style.buttonContact}>Contact Now </button></a>
        </div>
      </div>
    </div>
  );
}

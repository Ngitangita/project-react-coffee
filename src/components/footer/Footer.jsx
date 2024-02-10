import style from './footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPinterest} from "react-icons/fa";

export function Footer() {
  return (
    <div className={style.footer}>
      <div className={style.medias}>
        <FaFacebook className={style.media}/>
        <FaTwitter className={style.media}/>
        <FaInstagram className={style.media}/>
        <FaLinkedin className={style.media}/>
        <FaPinterest className={style.media}/>
      </div>
      <div className={style.footerButtons}>
        <button className={style.footerButton}>Hom</button>
        <button className={style.footerButton}>About</button>
        <button className={style.footerButton}>Menu</button>
        <button className={style.footerButton}>Products</button>
        <button className={style.footerButton}>Review</button>
        <button className={style.footerButton}>Contact</button>
        <button className={style.footerButton}>Blogs</button>
      </div>
      <p>
      Created By  <span> Mr. Web Designer </span>  | All Rights Reserved  
        réservés
      </p>
    </div>
  );
}

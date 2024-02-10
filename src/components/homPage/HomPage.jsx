import style from './homPage.module.css'
import { FaTimes } from 'react-icons/fa'
import { useOpen} from "../contex/ThemContex"
import { FaSearch} from "react-icons/fa";

export function HomPage() {
  const { onOpenBar, openBar, openSearch } = useOpen();

  return (
    <header>
      <div className={style.div_header} id='homPage'>
        <h1>FRESH COFFEE IN THE MORNING</h1>
        <span>
        I'm sorry, the pain will be good and weight gain will be achieved. 
        Let the work be enjoyable and let there be a distinction between covetousness and rejection of the times.
        </span>
        <br />
        <button className={style.button}>Get Yours NOw</button>
      </div>
      <div>
          {openSearch && (<label className={ style.label}><input type="text" placeholder='search here...'/><FaSearch className={style.search}/></label>)}
      </div>
      <div>
      {openBar && (
          <>
           <div className={style.cartItems}>
            <div className={style.cartItem}>
              <img src="../../../public/cart-item-1.png" alt="" />
              <div className={style.cart}>
                <p> Cart Item 01</p>
                <span>$15.99/-</span>
              </div>
              <FaTimes className={style.faTimes}/>
            </div>
            <div className={style.cartItem}>
              <img src="../../../public/cart-item-2.png" alt="" />
              <div className={style.cart}>
                <p> Cart Item 02 </p>
                <span>$15.99/-</span>
              </div>
              <FaTimes className={style.faTimes}/>
            </div>
            <div className={style.cartItem}>
              <img src="../../../public/cart-item-3.png" alt="" />
              <div className={style.cart}>
                <p> Cart Item 03</p>
                <span>$15.99/-</span>
              </div>
              <FaTimes className={style.faTimes}/>
            </div>
            <div className={style.cartItem}>
              <img src="../../../public/cart-item-4.png" alt="" />
              <div className={style.cart}>
                <p> Cart Item 04 </p>
                <span>$15.99/-</span>
              </div>
              <FaTimes className={style.faTimes}/>
            </div>
            <button className={style.buttons} onClick={onOpenBar}>Checkout Now</button>
            </div>
          </>
        )}
      </div>
    </header>
  );
}

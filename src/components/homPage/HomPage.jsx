import style from './homPage.module.css'
import { FaTimes } from 'react-icons/fa'
import { FaSearch} from "react-icons/fa";
import cartItem1 from '../../assets/cart-item-1.png'
import cartItem2 from '../../assets/cart-item-2.png'
import cartItem3 from '../../assets/cart-item-3.png'
import cartItem4 from '../../assets/cart-item-4.png'
import { useOpen } from '../context/ThemContex';

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
              <img src={cartItem1} alt="cart-item-1.png" />
              <div className={style.cart}>
                <p> Cart Item 01</p>
                <span>$15.99/-</span>
              </div>
              <FaTimes className={style.faTimes}/>
            </div>
            <div className={style.cartItem}>
            <img src={cartItem2} alt="cart-item-2.png" />
              <div className={style.cart}>
                <p> Cart Item 02 </p>
                <span>$15.99/-</span>
              </div>
              <FaTimes className={style.faTimes}/>
            </div>
            <div className={style.cartItem}>
            <img src={cartItem3} alt="cart-item-3.png" />
              <div className={style.cart}>
                <p> Cart Item 03</p>
                <span>$15.99/-</span>
              </div>
              <FaTimes className={style.faTimes}/>
            </div>
            <div className={style.cartItem}>
            <img src={cartItem4} alt="cart-item-4.png" />
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

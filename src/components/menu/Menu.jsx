import style from './menu.module.css'
import menu1 from '../../assets/menu-1.png'
import menu2 from '../../assets/menu-2.png'
import menu3 from '../../assets/menu-3.png'
import menu4 from '../../assets/menu-4.png'
import menu5 from '../../assets/menu-5.png'
import menu6 from '../../assets/menu-6.png'

export function Menu() {
  return (
    <div className={style.menu} id='menu'>
      <h2>
      OUR <span>MENU</span>
      </h2>
      <div className={style.menuDiv}>
        <div className={style.menus}>
          <img src={menu1} alt='menu-1.png' />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <a href="#"><button className={style.buttonAdd}>Add To Cart</button></a>
        </div>
        <div className={style.menus}>
        <img src={menu2} alt='menu-2.png' />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <a href="#"><button className={style.buttonAdd}>Add To Cart</button></a>
        </div>
        <div className={style.menus}>
        <img src={menu3} alt='menu-3.png' />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <a href="#"><button className={style.buttonAdd}>Add To Cart</button></a>
        </div>
        <div className={style.menus}>
        <img src={menu4} alt='menu-4.png' />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <a href="#"><button className={style.buttonAdd}>Add To Cart</button></a>
        </div>
        <div className={style.menus}>
        <img src={menu5} alt='menu-5.png' />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <a href="#"><button className={style.buttonAdd}>Add To Cart</button></a>
        </div>
        <div className={style.menus}>
        <img src={menu6} alt='menu-6.png' />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <a href="#"><button className={style.buttonAdd}>Add To Cart</button></a>
        </div>
      </div>
    </div>
  );
}

import style from './menu.module.css'

export function Menu() {
  return (
    <div className={style.menu} id='menu'>
      <h2>
      OUR <span>MENU</span>
      </h2>
      <div className={style.menuDiv}>
        <div className={style.menus}>
          <img src="../../../public/menu-1.png" />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <button className={style.buttonAdd}>Add To Cart</button>
        </div>
        <div className={style.menus}>
          <img src="../../../public/menu-2.png" />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <button className={style.buttonAdd}>Add To Cart</button>
        </div>
        <div className={style.menus}>
          <img src="../../../public/menu-3.png" />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <button className={style.buttonAdd}>Add To Cart</button>
        </div>
        <div className={style.menus}>
          <img src="../../../public/menu-4.png" />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <button className={style.buttonAdd}>Add To Cart</button>
        </div>
        <div className={style.menus}>
          <img src="../../../public/menu-5.png" />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <button className={style.buttonAdd}>Add To Cart</button>
        </div>
        <div className={style.menus}>
          <img src="../../../public/menu-6.png" />
          <p>Tasty And Healty</p>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>20.99</span>
          </span>
          <button className={style.buttonAdd}>Add To Cart</button>
        </div>
      </div>
    </div>
  );
}

import style from './product.module.css'
import {   FaStar,FaStarHalf, FaShoppingCart, FaHeart, FaEye } from 'react-icons/fa';

export function Product() {
  return ( 
    <div className={style.product} id='products'>
      <h2>
      OUR <span>PRODUCTS</span>
      </h2>
      <div className={style.productDiv}>
        <div className={style.products}>
        <div className={style.Fas}>
          <FaShoppingCart className={style.Fa1}/>
          <FaHeart className={style.Fa1}/>
          <FaEye className={style.Fa1}/>
        </div>
          <img src="../../../public/product-1.png" />
          <p>Fresh Coffee</p>
          <div className={style.Fa}>
            <FaStar/>  
            <FaStar/>  
            <FaStar/>  
            <FaStar/>  
            <FaStarHalf/>  
          </div>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>$20.99</span>
          </span>
        </div>
        <div className={style.products}>
          <div className={style.Fas}>
            <FaShoppingCart className={style.Fa1}/>
            <FaHeart className={style.Fa1}/>
            <FaEye className={style.Fa1}/>
          </div>
          <img src="../../../public/product-2.png" />
          <p>Fresh Coffee</p>
          <div className={style.Fa}>
            <FaStar/>  
            <FaStar/>  
            <FaStar/>  
            <FaStar/>  
            <FaStarHalf/>  
          </div>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>$20.99</span>
          </span>
        </div>
        <div className={style.products}>
        <div className={style.Fas}>
            <FaShoppingCart className={style.Fa1}/>
            <FaHeart className={style.Fa1}/>
            <FaEye className={style.Fa1}/>
          </div>
          <img src="../../../public/product-3.png" />
          <p>Fresh Coffee</p>
          <div className={style.Fa}>
            <FaStar/>  
            <FaStar/>  
            <FaStar/>  
            <FaStar/>  
            <FaStarHalf/>  
          </div>
          <span>
            <span className={style.span1}>$15.99 </span>
            <span className={style.span2}>$20.99</span>
          </span>
        </div>
      </div>
    </div>
  );
}

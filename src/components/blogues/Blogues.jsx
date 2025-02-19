import style from './blogues.module.css'
import blog1 from '../../assets/blog-1.jpeg'
import blog2 from '../../assets/blog-2.jpeg'
import blog3 from '../../assets/blog-3.jpeg'

export function Blogues() {
  return (
    <div className={style.blogue} id='blogues'>
      <h2>
      OUR <span>BLOGS</span>
      </h2>
      <div className={style.blogueDiv}>
        <div className={style.blogues}>
          <img src={blog1} alt='blog-1.jpeg' />
          <p className={style.p1}>Tasty and refreshing coffee</p>
          <span>By Admin / 10th February, 2024</span>
          <p className={style.p2}>
            It is very painful to get rid of obesity. No, says.
          </p>
          <a href="#"><button className={style.buttonBlogue}>Read More</button></a>
        </div>
        <div className={style.blogues}>
        <img src={blog2} alt='blog-2.jpeg' />
          <p className={style.p1}>Tasty and refreshing coffee</p>
          <span>By Admin / 10th February, 2024</span>
          <p className={style.p2}>
            It is very painful to get rid of obesity. No, says.
          </p>
          <a href="#"><button className={style.buttonBlogue}>Read More</button></a>
        </div>
        <div className={style.blogues}>
        <img src={blog3} alt='blog-3.jpeg' />
          <p className={style.p1}>Tasty and refreshing coffee</p>
          <span>By Admin / 10th February, 2024</span>
          <p className={style.p2}>
            It is very painful to get rid of obesity. No, says.
          </p>
          <a href="#"><button className={style.buttonBlogue}>Read More</button></a>
        </div>
      </div>
    </div>
  );
}

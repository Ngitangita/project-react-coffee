import style from './blogues.module.css'

export function Blogues() {
  return (
    <div className={style.blogue} id='blogues'>
      <h2>
      OUR <span>BLOGS</span>
      </h2>
      <div className={style.blogueDiv}>
        <div className={style.blogues}>
          <img src="../../../public/blog-1.jpeg" />
          <p className={style.p1}>Tasty and refreshing coffee</p>
          <span>By Admin / 10th February, 2024</span>
          <p className={style.p2}>
            It is very painful to get rid of obesity. No, says.
          </p>
          <button className={style.buttonBlogue}>Read More</button>
        </div>
        <div className={style.blogues}>
          <img src="../../../public/blog-2.jpeg" />
          <p className={style.p1}>Tasty and refreshing coffee</p>
          <span>By Admin / 10th February, 2024</span>
          <p className={style.p2}>
            It is very painful to get rid of obesity. No, says.
          </p>
          <button className={style.buttonBlogue}>Read More</button>
        </div>
        <div className={style.blogues}>
          <img src="../../../public/blog-3.jpeg" />
          <p className={style.p1}>Tasty and refreshing coffee</p>
          <span>By Admin / 10th February, 2024</span>
          <p className={style.p2}>
            It is very painful to get rid of obesity. No, says.
          </p>
          <button className={style.buttonBlogue}>Read More</button>
        </div>
      </div>
    </div>
  );
}

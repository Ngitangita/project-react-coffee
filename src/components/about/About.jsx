import style from './about.module.css'

export function About() {
  return (
    <div className={style.aboutWe} id='about'>
      <h2>
        <span>ABOUT </span>US
      </h2>
      <div className={style.aboutDiv}>
        <div className={style.aboutImg}></div>
        <div className={style.about}>
          <h3>What Makes Our Coffee Special?</h3>
          <p>
          It is very painful to get rid of obesity. For the pleasures, which are these, 
          for the times themselves that are slipping away. 
          That no one is easy with desire. From, where?
          </p>
          <p>
          It is very painful to get rid of obesity. He hates love for the sake of the truth, 
          nothing is the fault of pleasure! 
          Is it not possible for a blind man to be blinded by a wise man?
          </p>
          <br />
          <button className={style.buttonLearn}>Learn More</button>
        </div>
      </div>
    </div>
  );
}

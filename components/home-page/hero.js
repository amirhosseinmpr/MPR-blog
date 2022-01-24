import Image from 'next/image';
import classes from './hero.module.css';

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src='/images/site/mpr.png'
          alt=' an image showing mr.mpr'
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm AmirHossein </h1>
      <p>
        I blog about web development -specially front-end frameworks like React
      </p>
    </section>
  );
}
export default Hero;

import Image from 'next/image';
import classes from './hero.module.css';
import Particles from 'react-tsparticles';

function Hero() {
  const particlesInit = main => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = container => {
    console.log(container);
  };
  return (
    <section className={classes.hero}>
      <Particles
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fpsLimit: 1000,

          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: 'push',
              },
              onHover: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 40,
                duration: 2,
                opacity: 0.8,
                size: 8,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            number: {
              value: 20,
              density: {
                enable: true,
                value_area: 789.1850086415761,
              },
            },
            color: {
              value: '#87848b',
            },
            shape: {
              type: 'triangle',
              stroke: {
                width: 1,
                color: '#87848b',
              },
              polygon: {
                nb_sides: 7,
              },
              image: {
                src: 'img/github.svg',
                width: 100,
                height: 100,
              },
            },
            opacity: {
              value: 0.0721084511104702,
              random: true,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false,
              },
            },
            size: {
              value: 13,
              random: true,
              anim: {
                enable: false,
                speed: 197.2002434570908,
                size_min: 2.434570906877665,
                sync: true,
              },
            },
            line_linked: {
              enable: true,
              distance: 224.33740345479617,
              color: '#87848b',
              opacity: 0.4086145562926645,
              width: 0.9614460148062693,
            },
            move: {
              enable: true,
              speed: 3,
              direction: 'bottom',
              random: false,
              straight: false,
              out_mode: 'out',
              bounce: false,
              attract: {
                enable: true,
                rotateX: 1762.6510271448274,
                rotateY: 1041.5665160401252,
              },
            },
          },
          interactivity: {
            detect_on: 'canvas',

            events: {
              onhover: {
                enable: true,
                mode: 'repulse',
              },
              onclick: {
                enable: true,
                mode: 'repulse',
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 400,
                line_linked: {
                  opacity: 1,
                },
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              push: {
                particles_nb: 4,
              },
              remove: {
                particles_nb: 2,
              },
            },
          },
          retina_detect: true,
        }}
      />
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
        blog about web development -specially front-end frameworks like React &&
        About my skills and more familiarity to collaborate
      </p>
    </section>
  );
}
export default Hero;

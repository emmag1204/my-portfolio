import React from 'react';
import './Hero.css';
import Carousel from '../Carousel/Carousel';
import emma from './img/hero-img.jpg';

function Hero() {
    return (
    <div>
        <div className='cajablanca'>
            <div className='veo'>
                    <img className='foto' src={emma} alt='me'/>
                </div>
            <div className='soy'>
                <h1>Who is Emma ?</h1>
                <p>
                    👋 I am currently a Computer Science 👩‍💻 Student at Tec de Monterrey in Guadalajara, Jalisco.
                    Throughout my career, I have developed different kinds of projects 💻 , some of which have made me developed skills 🛠️
                    that have helped me wanting to become a better programmer  day by day. Right now, I'm really interested in
                    web 🌐 development. This is a website I created using some of my acquired skills to present the 
                    projects I am the most proud of, hope you enjoy it as much as I enjoyed developing it ! ☺️ 
                </p>
            </div>
        </div>
        <div className='cajaazul'>
            <div className='proyectos'>
                <h2>Projects Section</h2>
                <Carousel />
            </div>
            <footer>
                made with ❤️ using React and Django. thanks for visiting my website !
            </footer>
        </div>

    </div>
  );
}
export default Hero;


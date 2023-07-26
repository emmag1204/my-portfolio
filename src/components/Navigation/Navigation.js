import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Navigation.css';
import nombre from './img/navbar-logo.png';

function Navigation() {
    return (
        <Navbar className='principal'>
            <Container className='marca'>
                <a href='/'>
                    <img width='120' height='120' src={nombre} alt='logo'/>
                </a>
            </Container>
            <Container className='presentacion'>
                <h1>Welcome to my Portfolio !</h1>
            </Container>
            <Container className='informacion'>
                <a href='/'>About me</a>
                <a href='https://drive.google.com/file/d/12jpsrIvL_w2BTGRn41784gi1SZ9gICzv/view?usp=sharing' target="_blank" rel="noopener noreferrer">Resume</a>
                <a href='mailto:emma.alfarod@gmail.com'>Contact</a>
            </Container>
        </Navbar>
    );
}
export default Navigation;
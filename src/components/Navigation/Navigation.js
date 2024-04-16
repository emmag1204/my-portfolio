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
                <h1>Welcome to my Portfolio!</h1>
            </Container>
            <Container className='informacion'>
                <a href='https://github.com/emmag1204' target='_blank' rel='noopener noreferrer'>GitHub</a>
                <a href='https://drive.google.com/file/d/1amt89V2XLUKB9DhPEKUgcV4H2u7plcVQ/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Resume</a>
                <a href='mailto:emma.alfarod@gmail.com'>Contact</a>
            </Container>
        </Navbar>
    );
}
export default Navigation;
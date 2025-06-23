import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../styles/Header.css';
import { FaUser } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import GitHiredLogo from '../assets/GitHiredLogo.png';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };

  return (
    <Navbar bg='white' data-bs-theme="light" fixed="top" className={`header-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <Container>
        <Navbar.Brand href="/" className="clickable-logo">
          <img alt="GitHired Logo" src={GitHiredLogo} className='logo-size'/>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/officers">Officers</Nav.Link>
          </Nav>
          
          <Nav>
            {currentUser ? (
              <NavDropdown title={<FaUser />} id="basic-nav-dropdown">
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href='/login' className="sign-in-link">Sign In</Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
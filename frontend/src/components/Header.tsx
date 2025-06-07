import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import '../styles/Header.css';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar 
      bg='white' 
      data-bs-theme="light" 
      fixed="top"
      className={`header-navbar ${isScrolled ? 'scrolled' : ''}`}
    >
      <Container>
        <Navbar.Brand href="/" className="clickable-logo">swe_academy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/events">Events</Nav.Link>
                <Nav.Link href="/officers">Officers</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
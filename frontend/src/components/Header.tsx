import { Navbar, Nav, Container } from 'react-bootstrap';

export const Header = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
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
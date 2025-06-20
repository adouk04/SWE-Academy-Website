import { Navbar, Container } from "react-bootstrap";
import { FaDiscord } from 'react-icons/fa';
import './officer/OfficerCard.css';

export const Footer = () => {

  return (
    <footer>
      <Navbar bg="offwhite" variant="light" expand="lg" className="header-container">
        <Container className="d-flex flex-column align-items-center justify-content-center pt-2 pb-0">
          <a href="https://discord.gg/sSzzyJrHK3" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaDiscord size={30} color="#5865F2" />
          </a>

          <Navbar.Text className="mt-3 small text-dark">
            © GitHired {new Date().getFullYear()}
          </Navbar.Text>
        </Container>
      </Navbar>
    </footer>
  );
}; 
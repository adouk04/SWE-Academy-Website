import { Navbar, Container } from "react-bootstrap";
import { FaDiscord, FaLinkedin } from 'react-icons/fa';
import './officer/OfficerCard.css';

export const Footer = () => {

  return (
    <footer>
      <Navbar bg="offwhite" variant="light" expand="lg" className="header-container">
        <Container className="d-flex flex-column align-items-center justify-content-center pt-2 pb-0">
          
          <div className="d-flex flex-row gap-3">
            <a href="https://discord.gg/sSzzyJrHK3" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaDiscord size={30} color="#5865F2" />
            </a>
            <a href="https://www.linkedin.com/company/githired-uwt/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <FaLinkedin size={30} color="#5865F2" />
            </a>
          </div>

          <Navbar.Text className="mt-1 small text-dark">
            © GitHired {new Date().getFullYear()}
          </Navbar.Text>

        </Container>
      </Navbar>
    </footer>
  );
}; 
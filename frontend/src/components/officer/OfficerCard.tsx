import Card from 'react-bootstrap/Card';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import type { OfficerCardProps } from './officer.types';
import './OfficerCard.css';

export const OfficerCard = (props: OfficerCardProps) => {
    return (
        <Card style={{ width: '18rem', backgroundColor: '#ffffff'}}>
          <Card.Img variant="top" src={props.image} style={{ maxHeight: "300px"}}/>

          <Card.Body style={{ padding: "10px" }}>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.name}</Card.Text>
            <div className="d-flex align-items-center gap-3">
            
            {props.linkedin && (
              <a href={props.linkedin} className="social-icon linkedin-icon" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={24} color="#0a66c2" />
              </a>
            )}

            {props.github && (
              <a href={props.github} className="social-icon github-icon" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} color="#000000" />
              </a>
            )}
            
            </div>
          </Card.Body>
        </Card>
      );
};
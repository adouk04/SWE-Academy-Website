import { OfficerCard } from "./OfficerCard";
import { Container, Nav } from "react-bootstrap";
import { useState } from "react";
import { officer24_25, officer25_26 } from './officerData';

type YearKey = '24_25' | '25_26';

export const Officers = () => {
  const [activeTab, setActiveTab] = useState<YearKey>('25_26');
  
  const officerData = {
    '25_26': officer25_26,
    '24_25': officer24_25
  };

  const gridConfig = {
    '25_26': 'col-lg-4 col-md-6 col-sm-12', // 3 columns per row
    '24_25': 'col-lg-3 col-md-6 col-sm-12'  // 4 columns per row
  };

  return (
    <div className="container mt-4">
      <h1 className='mb-4'>Officers</h1>

      <Nav variant="tabs" defaultActiveKey={activeTab} onSelect={(key) => key && setActiveTab(key as YearKey)}>
        <Nav.Item>
          <Nav.Link eventKey='25_26'>25 - 26</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='24_25'>24 - 25</Nav.Link>
        </Nav.Item>
      </Nav>

      <Container className="py-4">
        <div className="row">
          {officerData[activeTab].map(officer => (
            <div key={officer.name} className={`${gridConfig[activeTab]} mb-4 d-flex justify-content-center`} >
              <OfficerCard {...officer} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};
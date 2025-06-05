import { OfficerCard } from "./OfficerCard";
import { Nav } from "react-bootstrap";
import { useState } from "react";
import { officer24_25, officer25_26 } from './officerData';

type YearKey = '24_25' | '25_26';

export const Officers = () => {
  const [activeTab, setActiveTab] = useState<YearKey>('25_26');
  
  const officerData = {
    '25_26': officer25_26,
    '24_25': officer24_25
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

      <div className='d-flex flex-wrap justify-content-evenly mt-4'>
        {officerData[activeTab].map(officer => 
          <OfficerCard key={officer.name} {...officer} />
        )}
      </div>
    </div>
  );
};
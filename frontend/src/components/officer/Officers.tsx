import { OfficerCard } from "./OfficerCard";
import DuyImg from '../../assets/officerPics/DuyImg.jpeg';
import AlexImg from '../../assets/officerPics/AlexImg.jpeg';
import YusufImg from '../../assets/officerPics/YusufImg.jpeg';

const officerData = [
  {
    image: AlexImg,
    title: 'President',
    name: 'Alex Douk',
    linkedin: 'https://www.linkedin.com/in/alex-douk1/',
    github: 'https://github.com/adouk04'
  },
  {
    image: YusufImg,
    title: 'Vice President',
    name: 'Yusuf Shakhpaz',
    linkedin: 'https://www.linkedin.com/in/yusufshakhpaz/',
    github: 'https://github.com/Shakhpazy'
  },
  {
    image: DuyImg,
    title: 'Officer',
    name: 'Nhat-Duy Ly',
    linkedin: 'https://www.linkedin.com/in/ndly/',
    github: 'https://github.com/notduyly'
  }
]

export const Officers = () => {
  return (
    <div className="container mt-4">
      <h1>Officers</h1>
      <p>Meet the team behind SWE Academy!</p>

      <div className='d-flex'>
        {officerData.map(officer => (
          <OfficerCard {...officer} />
        ))}
      </div>
    </div>
  );
};
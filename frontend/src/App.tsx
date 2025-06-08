import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Officers } from './components/officer/Officers';
import { Home } from './components/home/Home';
import { Footer } from './components/Footer';
import { Login } from './components/login/Login';

export const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<Home />}/>
        <Route path='/officers' element={<Officers/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Officers } from './components/officer/Officers';
import { Home } from './components/home/Home';
import { Footer } from './components/Footer';
import { Login } from './components/login/Login';
import { AuthProvider } from './context/AuthContext';
import { Events } from './components/events/Events'
import { About } from './components/about/About';

export const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Home />}/>
          <Route path='/officers' element={<Officers/>} />
          <Route path='/events' element= {<Events/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
};

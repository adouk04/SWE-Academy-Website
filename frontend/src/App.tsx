import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/Header'
import { Officers } from './components/officer/Officers'

export const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' />
        <Route path='/officers' element={<Officers/>} />
      </Routes>
    </BrowserRouter>
  )
}

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Header } from './components/header/Header'
import { Officers } from './components/body/Officers'

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

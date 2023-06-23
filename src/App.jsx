import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import City from './pages/city/City'
import Products from './pages/products/Products'
import CommonPage from './pages/common-page/Common'
import Homepage from './pages/homepage/Homepage'

function App() {

  return (
    <>
      <BrowserRouter>
        <div>
          <CommonPage />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/city/:cityname" element={<City />} />
            <Route path="/product/:productname" element={<Products />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}


export default App;
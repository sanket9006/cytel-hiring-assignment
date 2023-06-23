import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import City from './pages/city/City'
import Products from './pages/products/Products'
import CommonPage from './pages/common-page/Common'
import Homepage from './pages/homepage/Homepage'
import './index.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <CommonPage />
        <div className='px-8'>

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/city/:cityname" element={<City />} />
            <Route path="/product/:productname" element={<Products />} />
          </Routes>
          {/* Notes */}
          <h5 className='font-bold ml-2 mt-4'>Note : Redux dev tools are configured as well: <a className='text-red-500' href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">Install Chrome Extension</a></h5>
        </div>

      </BrowserRouter>
    </>
  )
}


export default App;
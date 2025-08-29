import {BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Home from './home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import India from './pages/India'

const App = () => {

   
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/india" element={<India/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
import {BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Home from './home/Home'
import Navbar from './components/Navbar'

const App = () => {

   
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
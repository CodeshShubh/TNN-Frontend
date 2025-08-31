import {BrowserRouter ,Route ,Routes} from 'react-router-dom'
import Home from './home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import India from './pages/India'
import Election from './pages/Election'
import Entertainment from './pages/Entertainment'
import LifeStyle from './pages/LifeStyle'
import Sports from './pages/Sports'
import Live from './pages/Live'
import Interview from './pages/Interview'
import Shopping from './pages/Shopping'
import Article from './articles/Article'

const App = () => {

   
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/india" element={<India/>}/>
         <Route path="/election" element={<Election/>}/>
         <Route path="/entertainment" element={<Entertainment/>}/>
         <Route path="/lifestyle" element={<LifeStyle/>}/>
         <Route path="/sports" element={<Sports/>}/>
         <Route path="/live" element={<Live/>}/>
         <Route path="/interview" element={<Interview/>}/>
         <Route path="/shopping" element={<Shopping/>}/>
         <Route path="/article" element={<Article/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
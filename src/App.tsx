import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './home/Home'
import India from './pages/India'
import Election from './pages/Election'
import Entertainment from './pages/Entertainment'
import LifeStyle from './pages/LifeStyle'
import Sports from './pages/Sports'
import Live from './pages/Live'
import Interview from './pages/Interview'
import Shopping from './pages/Shopping'
import Article from './articles/Article'
import Dashboard from './dashboard/Dashboard'
import MainLayout from './MainLayout'
import DashboardLayout from './DashboardLayout'

const App = () => {


  return (
    <div>
      <BrowserRouter>
        <Routes>
           {/* MainLayout */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/india" element={<India />} />
            <Route path="/election" element={<Election />} />
            <Route path="/entertainment" element={<Entertainment />} />
            <Route path="/lifestyle" element={<LifeStyle />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/live" element={<Live />} />
            <Route path="/interview" element={<Interview />} />
            <Route path="/shopping" element={<Shopping />} />
            <Route path="/article" element={<Article />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>


          {/* Dashboard Layout */}
          <Route path='/dashboard' element={<DashboardLayout />}>
            <Route index element={<Dashboard />} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
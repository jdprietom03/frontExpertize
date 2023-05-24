
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Background from './components/FloatingCubes/FloatingCubes'
import LoginForm from './components/LoginForm'
import Navbar from './components/Navbar'
import CertificatesView from './views/CertificatesView'
import Home from './views/Home'
import LeaderboardView from './views/LeaderboardView'
import ProfileView from './views/ProfileView'
import ProgressView from './views/ProgressView'
import SeniorityView from './views/SeniorityView'
import TechnologiesView from './views/TechnologiesView'
import PendingRequestsView from './views/PendingRequestsView'
import SeniorityRequestsView from './views/SeniorityRequestsView'

function App() {
  return (
    <div className="App">
      <Background />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/seniorities' element={<SeniorityView/>} />
        <Route path='/technologies' element={<TechnologiesView/>} />
        <Route path='/leaderboard' element={<LeaderboardView/>} />
        <Route path='/certificates' element={<CertificatesView/>} />
        <Route path='/progress' element={<ProgressView/>} />
        <Route path='/profile' element={<ProfileView/>} />
        <Route path='/pending_requests' element={<PendingRequestsView/>} />
        <Route path='/seniority_requests' element={<SeniorityRequestsView/>} />
        <Route path='/login' element={<LoginForm/>} />
      </Routes>
    </div>
  )
}

export default App

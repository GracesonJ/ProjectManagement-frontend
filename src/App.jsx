
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import ProjectManagement from './Pages/ProjectManagement'
import TaskManagement from './Pages/TaskManagement'
import Reports from './Pages/Reports'
import Testimonials from './Pages/Testimonials'
import Contact from './Pages/Contact'
import UserManagement from './Pages/UserManagement'
import PagenotFound from './Pages/PagenotFound'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Auth from './Pages/Auth'
import WorkspaceReg from './Pages/WorkspaceReg'
import ViewUser from './Pages/ViewUser'
import EditUser from './Components/EditUser'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/Projectmanagement' element={<ProjectManagement />} />
        <Route path='/taskmanagement' element={<TaskManagement />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/testimonials' element={<Testimonials />} />
        <Route path='/usermanagement' element={<UserManagement />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Auth />} />
        <Route path='/workspaceregister' element={<WorkspaceReg />} />
        <Route path="/view-user/:id" element={<ViewUser />} />
        <Route path='/edit-user' element={<EditUser />} />
        <Route path='/*' element={<PagenotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Admin from './pages/Admin'
import EditForm from './components/Edit/EditForm'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/edit" element={<EditForm />} />
      </Routes>
    </Router>
  )
}

export default App

import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import './App.scss'
import Nav from './components/Navigation/Nav'
import Login from './components/Login/Login'

function App() {
  return (
    <Router>

      <div className='App'>
        {/* <Nav /> */}

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>

    </Router>
  )
}

function HomePage() {
  return <h3>Home Page</h3>
}

function NewPage() {
  return <h3>New Page</h3>
}

function AboutPage() {
  return <h3>About Page</h3>
}

function ContactPage() {
  return <h3>Contact Page</h3>
}

function NotFoundPage() {
  return <h3>404 not found!!!</h3>
}

export default App

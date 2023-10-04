import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import _ from 'lodash'
import './App.scss'
import Nav from './components/Navigation/Nav'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Users from './components/Users/Users'

function App() {
  const [account, setAccount] = useState("")

  useEffect(() => {
    let session = sessionStorage.getItem('account')
    if (session) {
      setAccount(JSON.parse(session))
    }
  }, [])

  return (
    <Router>

      <div className='App'>
        {
          account && !_.isEmpty(account) && account.isAuthenticated
            && <Nav />
        }

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/news' element={<NewPage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/users' element={<Users />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

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
  return <h3 style={{ color: 'red' }}>404 not found!!!</h3>
}

export default App

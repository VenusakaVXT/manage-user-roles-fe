import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import _ from 'lodash'
import './App.scss'
import Nav from './components/Navigation/Nav'
import AppRoutes from './routes/AppRoutes'

function App() {
  const [account, setAccount] = useState("")

  useEffect(() => {
    let session = sessionStorage.getItem('account')
    if (session) {
      setAccount(JSON.parse(session))
    }
  }, [])

  return (
    <div className='App'>
      <Router>
        <div className='App-header'>
          {
            account && !_.isEmpty(account) && account.isAuthenticated
            && <Nav />
          }
        </div>

        <div className='App-container'>
          <AppRoutes />
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
    </div>
  )
}

export default App

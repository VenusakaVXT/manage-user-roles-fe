import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './scss/App.scss'
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
      <BrowserRouter forceRefresh={true}>
        <div className='App-header'>
          <Nav />
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
      </BrowserRouter>
    </div>
  )
}

export default App

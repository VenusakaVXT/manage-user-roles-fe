import axios from 'axios'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Register.scss'

function Register() {
    let navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    useEffect(() => {
        axios.get("https://reqres.in/api/users?page=2").then(data => {
            console.log(data)
        })
    }, [])

    return (
        <div className="Register">
            <div className="container">
                <div className="row px-3 px-sm-0">
                    <div className="content-left col-12 d-none col-sm-7 d-sm-block">
                        <span className="icon-brand material-symbols-outlined">
                            bolt
                        </span>
                        <div className='brand text-center mb-3'>VenusakaVXT</div>
                        <div className='detail'>
                            Welcome to the user hierarchy website created by me using
                            technologies: React, NodeJS, MySQL, Sequelize, JWT (JSON Web Tokens), ...
                        </div>
                    </div>
                    <div className="content-right border col-sm-5 col-12 d-flex flex-column gap-2 px-sm-3 py-3">
                        <div className='brand-wrap d-sm-none'>
                            <span className="icon-brand material-symbols-outlined">
                                bolt
                            </span>
                            <div className='brand text-center mb-3'>VenusakaVXT</div>
                        </div>

                        <div className='from-group'>
                            <label>Email adress:</label>
                            <input className='form-control rounded-pill' type='text' placeholder='Enter email'/>
                        </div>
                        <div className='from-group'>
                            <label>Number phone:</label>
                            <input className='form-control rounded-pill' type='text' placeholder='Enter phone'/>
                        </div>
                        <div className='from-group'>
                            <label>Username:</label>
                            <input className='form-control rounded-pill' type='text' placeholder='Enter username'/>
                        </div>
                        <div className='from-group'>
                            <label>Password:</label>
                            <input className='form-control rounded-pill' type='password' placeholder='Enter password'/>
                        </div>
                        <div className='from-group'>
                            <label>Re-enter password:</label>
                            <input className='form-control rounded-pill' type='password' placeholder='Re-enter password'/>
                        </div>


                        <button className='btn register-btn bg-btn rounded-pill'>Register</button>
                        <hr />
                        <button className='btn create-btn rounded-pill border' onClick={() => handleLogin()}>
                            You already have an account ...?
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
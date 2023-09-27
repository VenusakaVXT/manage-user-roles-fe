import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import './Register.scss'

function Register() {
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    useEffect(() => {
        // let isMounted = true

        // axios.get("http://localhost:8080/api/test-api").then(data => {
        //     if (isMounted) {
        //         console.log(data)
        //     }
        // })

        // return () => {
        //     isMounted = false
        // }
    }, [])
    
    let navigate = useNavigate()

    const handleLogin = () => {
        navigate('/login')
    }

    const handleRegister = () => {
        isValidInputs()
        let userData = { email, phoneNumber, username, password }
        console.log(userData)
    }

    const isValidInputs = () => {
        const regexEmail = /\S+@\S+\.\S+/
        const regexPhoneNumber = /(((\+|)84)|0)(3|5|7|8|9)+([0-9]{8})\b/

        if (!email || !regexEmail.test(email)) {
            toast.error("Invalid email, may be missing @, gmail, .com!!!")
            return false
        }
        if (!phoneNumber || !regexPhoneNumber.test(phoneNumber)) {
            toast.error("Invalid phone number!!!")
            return false
        }
        if (!username) {
            toast.error("Invalid username!!!")
            return false
        }
        if (!password) {
            toast.error("Invalid password!!!")
            return false
        }
        if (confirmPassword != password) {
            toast.error("The authentication password is not the same as the password above!!!")
            return false
        }
        else {
            toast.success("Register success <3<3<3")
            return true
        }
    }

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
                            <input className='form-control rounded-pill' type='text' placeholder='Enter email' 
                                value={email} onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className='from-group'>
                            <label>Number phone:</label>
                            <input className='form-control rounded-pill' type='text' placeholder='Enter phone' 
                                value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}
                            />
                        </div>
                        <div className='from-group'>
                            <label>Username:</label>
                            <input className='form-control rounded-pill' type='text' placeholder='Enter username' 
                                value={username} onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <div className='from-group'>
                            <label>Password:</label>
                            <input className='form-control rounded-pill' type='password' placeholder='Enter password' 
                                value={password} onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div className='from-group'>
                            <label>Re-enter password:</label>
                            <input className='form-control rounded-pill' type='password' placeholder='Re-enter password' 
                                value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>


                        <button className='btn register-btn bg-btn rounded-pill' onClick={() => handleRegister()}>
                            Register
                        </button>
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
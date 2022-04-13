import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import auth from '../../firebase.init';
import './SignUp.css'

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    console.log(user)

    const handleEmailBlur = (event) => {
        setEmail(event.target.value)
    };
    const handlePasswordBlur = (event) => {
        setPassword(event.target.value)
    };
    const handleConfirmPasswordBlur = (event) => {
        setConfirmPassword(event.target.value)
    }
    if (user) {
        navigate('/')
    }
    const handleCreatUser = (event) => {
        event.preventDefault()
        setError('')
        if (password !== confirmPassword) {
            setError('Your two Passwords did not match')
            return;
        }
        if (password.length < 6) {
            setError('Password must be 6 characters or longer')
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreatUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handleEmailBlur} placeholder='Email' type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handlePasswordBlur} placeholder='Password' type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Confirm Password</label>
                        <input onBlur={handleConfirmPasswordBlur} placeholder='Confirm Password' type="password" name="confirm-password" id="" required />
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p>
                    Already have an account? <Link className='form-link' to="/login">Login</Link>
                </p>
                <div className='div-or'>
                    <div className='div-1'>

                    </div>
                    <p>or</p>
                    <div className='div-1'>

                    </div>
                </div>
                <button><img src="https://www.digitalexaminer.com/wp-content/uploads/2017/03/google-index.png" alt="" /> Continue with Google</button>
            </div>
        </div>
    );
};

export default SignUp;
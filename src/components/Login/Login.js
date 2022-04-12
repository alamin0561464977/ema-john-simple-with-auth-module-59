import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input placeholder='Email' type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input placeholder='Password' type="password" name="password" id="" required />
                    </div>
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>
                    New to Ema-John? <Link className='form-link' to="/signup">Create an account</Link>
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

export default Login;
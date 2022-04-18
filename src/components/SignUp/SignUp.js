import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useSignInWithGithub } from 'react-firebase-hooks/auth';
import auth from '../../init.firebase';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [password, setPassword] = useState('');
    const [conPass, setConPass] = useState('');
    const [check, setCheck] = useState(false);
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handelEmail = e => {
        setEmail(e.target.value);
    }
    const handelPassword = e => {
        setPassword(e.target.value);
    }
    const handelConPass = e => {
        setConPass(e.target.value);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    const handelSubmit = e => {
        e.preventDefault();
        if (password !== conPass) {
            setError('Your two passwoard did not match');
            console.log(error);
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);
    return (
        <div className="container">
            <div className='w-50 mx-auto my-5 p-3 border '>
                <h1 className='text-center text-primary py-2'>SignUp</h1>
                <form onSubmit={handelSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPassword} type="password" name="password" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={handelConPass} type="password" name="confirm-password" id="" required />
                    </div>
                    <div className="form-check">
                        <input onClick={() => setCheck(!check)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Already have an Account
                        </label>
                        {
                            check && navigate('/login')
                        }
                    </div>
                    <p style={{ color: 'red' }}>{error}</p>
                    <input className='bg-primary text-light border-0 rounded w-25 mx-auto d-block p-2 mb-3' type="submit" value="SignUp" />
                </form>
                <div className='d-flex'>
                    <hr className='w-100 h-25 bg-primary border ' />
                    <p className='px-2 mt-1'>or</p>
                    <hr className='w-100 h-25 bg-primary border ' />
                </div>
                <button onClick={() => signInWithGoogle()} className='d-block w-100 my-2 border-0 p-2'>Google</button>
                <button onClick={() => signInWithGithub()} className='d-block w-100 my-2 border-0 p-2'>GitHub</button>
            </div>

        </div >
    );
};

export default SignUp;
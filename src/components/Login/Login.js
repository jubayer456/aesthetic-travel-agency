import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import './Login.css';
import auth from '../../init.firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [check, setCheck] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const [signInWithEmailAndPassword,
        user,
        error] = useSignInWithEmailAndPassword(auth);
    const from = location.state?.from?.pathname || "/";
    const handelEmail = e => {
        setEmail(e.target.value);
    }
    const handelPassword = e => {
        setPassword(e.target.value);
    }
    if (user) {
        navigate(from, { replace: true });
    }
    console.log(user);
    const handelSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    }
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [signInWithGithub] = useSignInWithGithub(auth);

    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('please enter your email address');
        }
    }
    return (
        <div className="container">
            <div className='w-50 mx-auto my-3 p-3 border rounded '>
                <h1 className='text-center text-primary py-2'>Login</h1>
                <form onSubmit={handelSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={handelEmail} type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={handelPassword} type="password" name="password" id="" required />
                    </div>
                    <p className='text-denger'>{error?.message}</p>
                    <div className="form-check">
                        <input onClick={() => setCheck(!check)} className="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                        <label className="form-check-label" for="flexCheckChecked">
                            New to Travel agency
                        </label>
                        {
                            check && navigate('/signUp')
                        }
                    </div>
                    <input className='bg-primary text-light border-0 rounded w-25 mx-auto d-block p-2 mb-3' type="submit" value="Login" />
                </form>
                <p>Forget Password? <button className='btn btn-link text-primary ps-0 ' onClick={resetPassword}>Reset Password</button> </p>
                <div className='d-flex'>
                    <hr className='w-100 h-25 bg-primary border ' />
                    <p className='px-2 mt-1'>or</p>
                    <hr className='w-100 h-25 bg-primary border ' />
                </div>
                <button onClick={() => signInWithGoogle()} className='d-block w-100 my-2 border-0 p-2'>Google</button>
                <button onClick={() => signInWithGithub()} className='d-block w-100 my-2 border-0 p-2'>GitHub</button>
                <ToastContainer />
            </div>

        </div >
    );
};

export default Login;
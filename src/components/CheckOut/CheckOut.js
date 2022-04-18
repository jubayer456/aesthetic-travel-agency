import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../init.firebase';

const CheckOut = () => {
    const [user] = useAuthState(auth);
    const handelSubmit = e => {
        const name = e.target.name.value;
        const password = e.target.password.value;
        const phone = e.target.phone.value;
        const address = e.target.address.value;
    }
    return (
        <div className="container">
            <div className='w-50 mx-auto my-3 p-3 border rounded '>
                <h1 className='text-center text-primary py-2'>CheckOut Information</h1>
                <form onSubmit={handelSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" name="name" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input disabled type="email" name="email" id="" value={user?.email} required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Your Phone</label>
                        <input type="text" name="phone" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Your Address</label>
                        <input type="text" name="address" id="" required />
                    </div>
                    <input className='w-50 mx-auto d-block p-2 m-3' type="submit" value="Add to CheckOut" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;
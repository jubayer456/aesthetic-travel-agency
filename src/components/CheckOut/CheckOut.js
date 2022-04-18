import React from 'react';

const CheckOut = () => {
    const handelSubmit = e => {

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
                        <input type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="phone">Your Phone</label>
                        <input type="text" name="phone" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Your Address</label>
                        <input type="text" name="address" id="" required />
                    </div>
                    <input className='w-50 mx-auto d-block p-2 mb-3' type="submit" value="Add to CheckOut" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2 className='text-center'>Welcome to detail: {serviceId}</h2>
            <p>{serviceId.name}</p>
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
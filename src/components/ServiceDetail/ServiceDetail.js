import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/jubayer456/services.json/main/services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, []);
    const findservice = services?.find(service => service.id === serviceId);
    console.log(findservice);
    return (
        <div className='w-75 mx-auto'>
            <h2 className='text-center'>Welcome to detail: {serviceId}</h2>
            <img src={findservice?.img} alt="" />
            <img src={findservice?.name} alt="" />
            <img src={findservice?.price} alt="" />
            <img src={findservice?.description} alt="" />
            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-primary pb-5 mb-5'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;
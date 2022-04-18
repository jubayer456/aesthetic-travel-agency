import React from 'react';

const Service = ({ service }) => {
    const { price, name, description, img } = service;
    return (

        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text">{description}</p>
                </div>
                <div className='p-3'>
                    <button className='w-50 d-block border-0 p-2 bg-primary rounded text-light '>Add to Cart</button>
                </div>

            </div>
        </div>

    );
};

export default Service;
import React from 'react';

const Service = ({ service }) => {
    const { price, name, id, description, img } = service;
    return (

        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price: {price}</p>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer p-0 m-0">
                    <button className=' w-100 border-0 p-2 bg-primary '>Add to Cart</button>
                </div>
            </div>
        </div>

    );
};

export default Service;
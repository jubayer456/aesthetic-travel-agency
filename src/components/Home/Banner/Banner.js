import React from 'react';
import img_1 from '../../../img/img-1.png'
import img_2 from '../../../img/img-2.png'
import img_3 from '../../../img/img-3.png'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img style={{ height: '550px' }} src={img_1} className="d-block w-100 " alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Swizerland</h5>
                            <p>Enjoy the best travelling experience with us.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: '550px' }} src={img_2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Sri Lanka</h5>
                            <p>Travel More to explore the world.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img style={{ height: '550px' }} src={img_3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Nepal</h5>
                            <p>Travel makes people more powerfull.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Banner;
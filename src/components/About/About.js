import React from 'react';
import imgofMe from '../../img/Agency.3f27f9eb.jpeg'

const About = () => {
    return (
        <div className='container p-5 m-5'>
            <h2 className='text-center p-5 m-2'>About Aesthetic Travel Agency</h2>
            <div className="row g-5">
                <div className="col-12 col-lg-7">
                    <p>Aesthetic travel agency is a trusted and reliable tour and travel agency among all the leading and updated tour-operating services in Bangladesh. We are here to bring the luxury to your traveling. obokash is a proud member of Association of Travel Agents of Bangladesh-ATAB and Tour Operators Association of Bangladesh. Safe traveling, your security, and your enjoyment are our focus during your travels. Our experienced and expert traveling guides ensure that you do not need to move an inch from your comfort zone and make sure that you always have a beautiful satisfactory smile on your face. We believe that your smile is our success and obokash will do anything to keep you smiling.</p>
                </div>
                <div className="col-12 col-lg-5">
                    <img className='img-fluid' src={imgofMe} alt="" />
                </div>

            </div>




        </div>
    );
};

export default About;
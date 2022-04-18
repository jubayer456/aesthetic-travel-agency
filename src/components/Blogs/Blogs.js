import React from 'react';

const Blogs = () => {
    return (
        <div className='w-50 mx-auto m-5'>
            <h4>what is the difference between authentication and authorization?</h4>
            <p>Simply put, authentication is the process of verifying someone, whereas authentication is the process of verifying which user has access to a particular application, file and data. The situation is like an airline that has to decide which person can come on board.</p>
            <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
            <p>Firebase provides authentication backend services, an easy-to-use SDK, and a UI library built into your app to authenticate users. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter and many more.
                <br />
                Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.
            </p>
            <h4>What other services does firebase provide other than authentication</h4>
            <p>
                1.Hosting.
                2.Cloud Storage.
                3.Google Analytics.
                4.Cloud Firestore.
                5.Cloud Functions.
                6.Authentication.
                7.Predictions.
                8.Cloud Messaging.</p>

        </div>
    );
};

export default Blogs;
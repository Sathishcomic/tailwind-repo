import React from 'react';
import './Ani.css';  // Import the CSS file for styling and animations

const Animation = () => {
    return (
        <div className="relative h-screen bg-gray-900 flex items-center justify-center">
            <h1 className="absolute text-white text-5xl font-bold glow">Welcome to my page</h1>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full icon-container">
                    <img src="https://cdn.iconscout.com/icon/free/png-256/free-zoho-282840.png?f=webp"
                         className="icon icon-1 glow-effect" alt="zoho"/>
                    <img src="https://companieslogo.com/img/orig/TCS.NS-7401f1bd.png?t=1720244494"
                         className="icon icon-2 glow-effect" alt="tcs"/>
                    <img src="https://iconape.com/wp-content/png_logo_vector/accenture.png"
                         className="icon icon-3 glow-effect" alt="accenture"/>
                    <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x673-w3o7skkh.png"
                         className="icon icon-4 glow-effect" alt="google"/>
                    <img src="https://iconape.com/wp-content/png_logo_vector/accenture.png"
                         className="icon icon-5 glow-effect" alt="accenture"/>
                    <img src="https://static-00.iconduck.com/assets.00/google-icon-2048x673-w3o7skkh.png"
                         className="icon icon-6 glow-effect" alt="google"/>
                </div>
            </div>
        </div>
    );
};

export default Animation;

import React from 'react';
import './updatedmoving.css';
import disney from './images/disney.svg';
import google from './images/google.svg';

const iconPositions = [
    { left: '5%', top: '5vh', classname: 'icon1', path: disney },
    { left: '30%', top: '10vh', classname: 'icon2', path: google },
    { left: '50%', top: '50%', classname: 'icon3', path: disney },
    { left: '10%', top: '40vh', classname: 'icon4', path: disney },
    { left: '15%', top: '65vh', classname: 'icon5', path: disney },
    { left: '50%', top: '60vh', classname: 'icon6', path: disney },
    { left: '70%', top: '25vh', classname: 'icon7', path: disney },
    { left: '90%', top: '3vh', classname: 'icon8', path: disney },
    { left: '80%', top: '50vh', classname: 'icon9', path: disney },
    { left: '90%', top: '30vh', classname: 'icon10', path: disney },
];

const MovingIcons = () => {
    return (
        <div className="container_wrapper">
            <div className="container">
                {iconPositions.map(({ left, top, classname, path }, index) => (
                    <div
                        key={index}
                        className={`icon ${classname}`}
                        style={{ left, top }}
                    >
                        <img src={path} alt={`icon-${index}`} />
                    </div>
                ))}
                <div className="text_container">
                    <br/><br/>
                    <h2 style={{color: 'white', fontSize: '20px'}}>A growing library of</h2>
                    <div className="text">
                        1,069 apps <br/> 347,427 screens <br/> 68,140 flows
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovingIcons;

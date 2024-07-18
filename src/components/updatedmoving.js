import React from 'react';
import './updatedmoving.css'; // Ensure this is the correct path to your CSS file

const iconPositions = [
    { left: "5%", top: "5vh", classname: "icon1", path: "angular.svg" },
    { left: "30%", top: "10vh", classname: "icon2", path: "react.svg" },
    { left: "50%", top: "3vh", classname: "icon7", path: "saas.svg" },
    { left: "10%", top: "40vh", classname: "icon6", path: "python.svg" },
    { left: "15%", top: "65vh", classname: "icon10", path: "github.svg" },
    { left: "50%", top: "60vh", classname: "icon3", path: "node.svg" },
    { left: "70%", top: "25vh", classname: "icon4", path: "aws.svg" },
    { left: "90%", top: "3vh", classname: "icon5", path: "java.svg" },
    { left: "80%", top: "50vh", classname: "icon8", path: "mern.svg" },
    { left: "90%", top: "30vh", classname: "icon9", path: "embed.svg" },
];

const MovingIcons = () => {
    return (
        <div className="container_wrapper">
            <div className="text_container">
                <div className="text">hello page</div>
            </div>
            <div className="container">
                {iconPositions.map((pos, index) => (
                    <div
                        key={index}
                        className={pos.classname}
                        style={{
                            left: pos.left,
                            top: pos.top,
                        }}
                    >
                        <img src={pos.path} alt="" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovingIcons;

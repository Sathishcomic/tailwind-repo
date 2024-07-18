// src/MovingText.js

import React, { useState, useEffect } from 'react';

const texts = [
    { text: 'apple', center: { top: '20%', left: '20%' }, radius: 10 },
    { text: 'orange', center: { top: '20%', left: '80%' }, radius: 10 },
    { text: 'banana', center: { top: '80%', left: '20%' }, radius: 10 },
    { text: 'mango', center: { top: '80%', left: '80%' }, radius: 10 },
];

const getCircularPosition = (center, angle, radius) => {
    const radian = (angle * Math.PI) / 180;
    const top = `calc(${center.top} + ${radius * Math.sin(radian)}px)`;
    const left = `calc(${center.left} + ${radius * Math.cos(radian)}px)`;
    return { top, left };
};

const MovingText = () => {
    const [angles, setAngles] = useState([0, 0, 0, 0]);

    useEffect(() => {
        const interval = setInterval(() => {
            setAngles(prevAngles => prevAngles.map(angle => (angle + 1) % 360));
        }, 100); // Update position every 100ms
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen bg-gray-100">
            {texts.map((item, index) => {
                const position = getCircularPosition(item.center, angles[index], item.radius);
                return (
                    <div
                        key={index}
                        className="absolute text-2xl font-bold text-red-500"
                        style={{
                            top: position.top,
                            left: position.left,
                            transition: 'top 0.5s ease, left 0.5s ease',
                        }}
                    >
                        {item.text}
                    </div>
                );
            })}
        </div>
    );
};

export default MovingText;

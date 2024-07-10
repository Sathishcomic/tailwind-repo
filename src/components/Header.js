import React from 'react';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold">Master Class</h1>
                <nav>
                    <a href="#courses" className="ml-4">Courses</a>
                    <a href="#about" className="ml-4">About</a>
                    <a href="#contact" className="ml-4">Contact</a>
                </nav>
            </div>
        </header>
    );
}

export default Header;

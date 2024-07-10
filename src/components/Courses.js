import React from 'react';
import CourseCard from './CourseCard';

const courses = [
    {
        title: 'Web Development',
        description: 'Learn to build modern web applications.',
        image: 'https://st2.depositphotos.com/1350793/8224/i/450/depositphotos_82249918-stock-photo-hand-pressing-an-online-course.jpg'
    },
    {
        title: 'Data Science',
        description: 'Analyze data and make data-driven decisions.',
        image: 'https://st2.depositphotos.com/1350793/8224/i/450/depositphotos_82249918-stock-photo-hand-pressing-an-online-course.jpg'
    },
    {
        title: 'Digital Marketing',
        description: 'Master digital marketing strategies.',
        image: 'https://st2.depositphotos.com/1350793/8224/i/450/depositphotos_82249918-stock-photo-hand-pressing-an-online-course.jpg'
    }
];

const Courses = () => {
    return (
        <section id="courses" className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {courses.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </section>
    );
}

export default Courses;

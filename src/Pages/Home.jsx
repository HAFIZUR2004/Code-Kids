import React from 'react';
import PopularCourses from './PopularCourses';
import PopularSkills from '../Components/PopularSkills';
import Hero from './Hero';

const Home = () => {
    return (
        <div><Hero />
            <PopularSkills></PopularSkills>
            <PopularCourses></PopularCourses>
        </div>
    );
};

export default Home;
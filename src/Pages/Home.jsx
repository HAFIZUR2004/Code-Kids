import React from 'react';
import PopularCourses from './PopularCourses';
import PopularSkills from '../Components/PopularSkills';
import Hero from './Hero';
import TopRatedProviders from './TopRatedProviders';
import HowItWorks from './HowItWorks';
import Review from './Review';


const Home = () => {
    return (
        <div className=''>
            <Hero />
            <PopularSkills></PopularSkills>
            <PopularCourses></PopularCourses>
        <Review></Review>
            <TopRatedProviders></TopRatedProviders>
            <HowItWorks></HowItWorks>
        </div>
    );
};

export default Home;
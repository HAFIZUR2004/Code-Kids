import React from 'react';
import { Outlet } from "react-router-dom";
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import Hero from '../Pages/Hero';

const Homelayouts = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>
            <main>
                <section>
                    <Hero></Hero>
                </section>
                <Outlet></Outlet>
                <section></section>
            </main>
            <footer>
               <Footer></Footer>
            </footer>

        </div>
    );
};

export default Homelayouts;
import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Components/Footer";
import Hero from "../Pages/Hero";
import Navbar from "../Components/Navbar";

const Homelayouts = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <section>
          
        </section>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Homelayouts;

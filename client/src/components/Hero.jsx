import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {

  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);


  return (
    <div className="bg-unsplashBgImage relative flex h-full items-center justify-center bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-70" />
      <div className="relative z-10 w-full max-w-[860px] text-center text-white">
        <h1 className="text-5xl font-serif font-bold md:text-7xl">STORE AN FIND 
          <br />
          MY NOTES
        </h1>
        <p className="px-5 mt-5 text-lg font-light md:text-xl md:font-normal">
          Welcome to Find & Store My Notes – Securely store and effortlessly find your notes anytime, anywhere. Stay organized with our intuitive and reliable note-keeping app!
        </p>
        <div className="mt-5">
          <div
            className="flex items-center justify-center gap-5
          "
          >
            {isAuthenticated ? (
              <Link to="/search" className="mr-10 rounded-xl bg-white px-6 py-3 text-lg font-bold text-blue-500 hover:bg-gray-100">Get Started</Link>
            ) : (
              <>
                <Link to="/login">
                  <button className="rounded-xl bg-white px-7 py-4 text-blue-500 font-semibold">
                    Login
                  </button>
                </Link>
                <Link to="/signup">
                  <button className="rounded-xl bg-white px-7 py-4 font-semibold text-blue-500 ">
                    Signup
                  </button>
                </Link>

              </>
            )}

          </div>
        </div >
      </div >
    </div >
    
  );
};

export default Hero;

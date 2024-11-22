import React from "react";
import background from '../../assets/images/background-university.jpg';
import {TextField} from "@mui/material";
import { Heart, Search, CircleUserRound, ShoppingCart, AlignJustify} from "lucide-react";
function HeroSection() {

  return (
      <div className="relative rounded-lg overflow-hidden mx-3">
          <img
              src={background}
              alt="College Students"
              className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center gap-5 p-8 lg:p-20 max-w-3xl">
              <h1 className="text-4xl lg:text-6xl text-white font-extrabold">
                  Tailored for Students: Housing Made Simple.
              </h1>

              <p className="text-lg lg:text-xl text-white font-light">
                  Discover Your Perfect Place Near Campus.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-2 w-full">
                  <div className="relative flex items-center w-full sm:w-auto">
                      <Search className="absolute left-3 text-gray-500" />
                      <input
                          type="text"
                          placeholder="Search"
                          className="pl-10 rounded-xl py-4 w-full sm:w-[420px]"
                      />
                  </div>
                  <button className="text-white font-medium bg-blue-600 px-5 py-4 rounded-lg hover:bg-blue-700">
                      Explore Near You!
                  </button>
              </div>
          </div>
      </div>

  )
}

export default HeroSection;

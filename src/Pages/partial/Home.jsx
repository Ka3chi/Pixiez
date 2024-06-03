import { Contactus } from "./Contactus";
import undrawfront from "../../Assets/undrawfront.png"
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="">
      {/* intro */}
      <div className=" flex justify-center items-center">
        <div className="flex flex-row p-2">
          <div className="p-2">  
            <img src={ undrawfront } alt="" className="w-auto h-[455px]" />
          </div>
          <div className="p-2 flex flex-col justify-center items-center">
            <span className="font-bold text-[64px] flex justify-center">Welcome to <span className="text-blue-500">&nbsp;Pixiez</span></span>
            <div className="flex justify-center items-center text-wrap text-center text-[24px] font-thin text-gray-600">
            Unlock your potential with Pixiez! Create, inspire, and thrive. <br/> Let's transform your ideas into achievements with Pixiez.
            </div>
            <div className="p-2 flex justify-center">
            <button className="flex justify-center items-center p-2 border border-light-blue-500 text-blue-500 rounded-[10px] text-[20px] hover:text-white hover:bg-blue-500 h-[60px] w-[150px] ">Get Started!</button>
            </div>
          </div>  
        </div>
      </div>
      {/* feedback */}
      <div>


      </div>
    </div>
    
  );
};

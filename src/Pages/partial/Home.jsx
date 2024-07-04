import { Contactus } from "./Contactus";
import { Button } from "@material-tailwind/react";
import undrawfront from "../../Assets/undrawfront.png";
import teamwork from "../../Assets/teamwork.jpg";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { About } from "./About";
import homepage from "../../Assets/homepage.gif"
import "../../index.css"

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" bg-gray-200 flex flex-col justify-center space-y-32 overflow-y-hidden">
      {/* HomePage */}
      <div className=" frontbackground w-full flex justify-start p-16 h-[700px]"
      >
        <div className="flex justify-center flex-row p-2">
          <div
            data-aos="fade-left"
            className="p-2 flex flex-col justify-center "
          >
            <p className="font-bold text-[64px] flex justify-start flex-wrap">
              Welcome to <span className=" text-white">&nbsp;Pixiez</span>
            </p>
            <div className="flex justify-start text-wrap text-[24px] font-thin text-gray-600">
              Unlock your potential with Pixiez! Create, inspire, and thrive.
              <br /> Let's transform your ideas into achievements with Pixiez.
            </div>
            <div className="p-2 flex justify-center">
              <button className="flex justify-center items-center p-2 border border-light-blue-500 text-blue-500 rounded-[10px] text-[20px] hover:text-white hover:bg-blue-500 h-[60px] w-[150px] ">
                Get Started!
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Intro */}
      <div className="flex justify-center items-center p-[20px]">
        <div
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className=" flex justify-center items-center sm:flex-col lg:flex-row"
        >
          <div className="flex flex-col p-5">
            <div className="font-bold text-[40px]">Who we are?</div>
            <div className="text-wrap text-[24px] text-left w-[600px]">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quam placeat voluptate dicta odit quasi ad voluptatum fugiat?
              Inventore, deserunt. Aut quae enim corrupti tenetur non illo ut
              hic ratione?
            </div>
            <Button className="flex justify-center items-center p-2 border mt-2 rounded-[10px] text-[16px] hover:text-white h-[60px] w-[150px] ">
              See More
            </Button>
          </div>
          <div className="p-2 flex justify-items-center items-center">
            <img src={undrawfront} alt="img" className="rounded-xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center p-5">
        <div
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
          className="flex justify-center items-center"
        >
          <div className="p-2 mx-auto w-[625px] h-[400px]">
            <img className="" src={undrawfront} alt="img1" />
          </div>
          <div className="flex flex-col p-5">
            <div className="font-bold text-[30px]">What We Do?</div>
            <div className="text-wrap text-[20px] text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quam placeat voluptate dicta odit quasi ad voluptatum fugiat?
              Inventore, deserunt. Aut quae enim corrupti tenetur non illo ut
              hic ratione?
            </div>
            <Button className="flex justify-center items-center p-2 border mt-2 rounded-[10px] text-[15px] hover:text-white h-[60px] w-[150px] ">
              See More
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-teamwork min-h-screen bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center h-96">
        <div className="font-bold text-[64px] flex justify-center text-wrap text-white">
          Unite with us and shape the future.
        </div>
      </div>
      <div className="p-2">
        {/* this is about */}
        <About />
      </div>
    </div>
  );
};

import React, { useEffect } from "react";
import { Contactus } from "./Contactus";
import { Services } from "./Services";
import { Button } from "@material-tailwind/react";
import frontpage2 from "../../Assets/frontpage2.jpg";
import mission from "../../Assets/mission.png";
import vision from "../../Assets/vission.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "../../index.css"

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className=" bg-gray-200 flex flex-col justify-center overflow-y-hidden overflow-x-hidden w-full" id="homepage">
      {/* HomePage */}
      <div className="bg-[url('https://i.postimg.cc/6Q3qF4RC/homepage1.png')] w-full flex justify-center p-16 h-[700px] bg-no-repeat bg-center bg-cover transform scale-80 " 
      >
        <div className="flex justify-center flex-row p-2">
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="p-2 flex flex-col justify-center items-center"
          >
            <div className="flex justify-start text-wrap font-semibold">
            <p className="font-bold text-[64px] flex justify-center items-center">
              <span>Welcome to
              <span className="font-extrabold bg-gradient-to-r from-blue-500 to-white bg-clip-text text-transparent">
              &nbsp;Pixiez
              </span>
              </span>
            </p>
            </div>
            <div className="flex justify-start text-wrap text-[20px] font-semibold">
              Unlock your potential with Pixiez! Create, inspire, and thrive.
              <br /> Let's transform your ideas into achievements with Pixiez.
            </div>
            <div className="p-2 flex justify-center items-center">
              <button className="flex justify-center items-center p-2 border bg-gray-300 border-light-blue-500 text-blue-500 rounded-[10px] text-[20px] hover:text-white hover:bg-black hover:border-black h-[60px] w-[200px] text-blue">
                Let's Get Started!
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* About us */}
      <div id="aboutus" className="flex justify-center items-center bg-white p-[20px] h-[800px]">
        <div className=" flex justify-center items-center sm:flex-col lg:flex-row w-[516]"
        >
          <div 
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            className="flex flex-col p-5">
            <div className="font-semibold text-[40px]">About Us</div>
            <div className="text-wrap text-[24px] text-left w-[600px]">
              <p>
              At Pixiez, we are industry-leading experts in business consultation, renowned for our services in planning, market research, financial management, legal compliance, marketing, and operational efficiency.
              </p>
            </div>
            <Button className="flex justify-center items-center p-2 border mt-2 rounded-[10px] text-[16px] hover:text-white h-[60px] w-[150px] ">
            Learn More About Us
            </Button>
          </div>
          <div data-aos="fade-up"
          className="p-2 flex justify-items-center items-center">
            <img src={frontpage2} alt="img" className="rounded-xl h-[392px] w-[624px] shadow-lg" />
          </div>
        </div>
      </div>
      {/* Mission*/}
      <div className="bg-background2 flex justify-center items-center h-[800px] px-[30px]">
        <div className="flex justify-center items-center flex-col">
          <img data-aos="fade-up" src={mission} alt="mission" className="h-[350px] w-[400px] mb-5 rounded-xl"/>
          <div  data-aos="zoom-in" className="flex flex-col justify-center items-center" >
            <h1 className="font-semibold text-[40px] ">Our Mission</h1>
            <p className="text-wrap text-[24px] font-thin text-center text-text2 w-[750px]">
            To empower creativity and innovation, delivering high-quality, tailored solutions that exceed client expectations and foster lasting relationships.
            </p>
            <Button className="flex justify-center items-center p-2 border mt-2 rounded-[10px] text-[16px] hover:text-white h-[60px] w-[150px] ">
            Learn More About Us
            </Button>
          </div>
        </div>
      </div>
      {/* Vision */}
      <div className="bg-white flex justify-center items-center h-[800px] px-[30px]">
        <div className="flex justify-center items-center flex-col">
          <img data-aos="fade-up" src={vision} alt="vision" className="h-[392px] w-[485px] mb-5"/>
          <div data-aos="zoom-in" className="flex flex-col justify-center items-center">
            <h1 className="font-semibold text-[40px]">Our Vision</h1>
            <p className="text-wrap text-[24px] font-thin text-center text-text2 w-[750px]">
            To become a leading force in creative and innovative solutions, inspiring and empowering clients worldwide to realize their unique visions and achieve exceptional success.
            </p>
            <Button className="flex justify-center items-center p-2 border mt-2 rounded-[10px] text-[16px] hover:text-white h-[60px] w-[150px] ">
            Learn More About Us
            </Button>
          </div>
        </div>
      </div>
      {/* Services */}
      <div className="p-2 flex flex-col">
        <div className="flex justify-center items-center pt-10">
          <h1 id="services" className="font-bold text-[50px]">Our Services</h1>
        </div>
        <Services />
      </div>
      <div className="bg-[url('https://i.postimg.cc/VNQ1WSgY/group.jpg')] min-h-screen bg-fixed bg-center bg-no-repeat bg-cover flex justify-center items-center h-96">
        <div className="font-bold text-[64px] flex justify-center text-wrap items-center text-white">
          Unite with us and shape the future.
        </div>
      </div>
      {/* section of contact us */}
      <div>
        <Contactus/>
      </div>
    </div>
  );
};

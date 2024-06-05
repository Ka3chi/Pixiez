import { Contactus } from "./Contactus";
import { Button } from "@material-tailwind/react";
import undrawfront from "../../Assets/undrawfront.png";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="p-2">
      {/* intro */}
      <div className=" flex justify-center items-center">
        <div className="flex flex-row p-2">
          <div className="p-2">
            <img src={undrawfront} alt="" className="w-auto h-[455px]" />
          </div>
          <div className="p-2 flex flex-col justify-center items-center">
            <span className="font-bold text-[64px] flex justify-center">
              Welcome to <span className="text-blue-500">&nbsp;Pixiez</span>
            </span>
            <div className="flex justify-center items-center text-wrap text-center text-[24px] font-thin text-gray-600">
              Unlock your potential with Pixiez! Create, inspire, and thrive.{" "}
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
      <div className="p-2">
        <div className=" flex justify-center items-center">
          <div className="flex flex-col p-5">
            <div className="font-bold text-[40px]">Title</div>
            <div className="text-wrap text-[24px] text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae,
              quam placeat voluptate dicta odit quasi ad voluptatum fugiat?
              Inventore, deserunt. Aut quae enim corrupti tenetur non illo ut
              hic ratione?
            </div>
            <Button className="flex justify-center items-center p-2 border mt-2 rounded-[10px] text-[16px] hover:text-white h-[60px] w-[150px] ">
              See More
            </Button>
          </div>
          <div className="p-2 w-auto flex justify-items-center items-center">
            <img src={undrawfront} alt="img" />
          </div>
        </div>
        <div className="flex justify-center items-center">
        <div className="p-2">
            <img src={undrawfront} alt="img" />
          </div>
          <div className="flex flex-col p-5">
            <div className="font-bold text-[30px]">Title</div>
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
    </div>
  );
};

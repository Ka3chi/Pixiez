import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export function Contactus() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section id="contactus" data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="px-8 py-8 lg:py-16 bg-white">
      <div className="container mx-auto text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 !text-3xl lg:!text-5xl"
        >
          Contact Us
        </Typography>
        <Typography className="mb-10 font-normal !text-lg lg:mb-20 mx-auto max-w-3xl !text-gray-500">
          Whether it&apos;s a question about our services, a request for
          technical assistance, or suggestions for improvement, our team is
          eager to hear from you.
        </Typography>
        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2 items-start">
          <div className="bg-text w-full h-[425px] lg:max-h-[510px] rounded-xl p-[50px]">
            <div className="flex flex-col text-white">
              <div className="mb-[30px]">
                <h1 className="font-bold text-[30px] text-left">Contact Information</h1>
                <p className="text-[20px] font-thin text-left">Fill up the form and our Team will get back to you within 24 hours.</p>
              </div>
              <div className="flex flex-row items-center m-3">
                <FaPhone className="h-6 w-6"/><p className="text-[18px] font-thin ml-5">+1(424) 000 ***</p>
              </div>
              <div className="flex flex-row items-center m-3">
                <IoIosMail className="h-6 w-6"/><p className="text-[18px] font-thin ml-5">hi**@gmail.com</p>
              </div>
            </div>
          </div>
          <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm space-y-6 pt-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Input
                  label="First Name" 
                  color="gray"
                  size="lg"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                />
              </div>
              <div>
                <Input
                  label="Last Name" 
                  color="gray"
                  size="lg"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                />
              </div>
            </div>
            <div>
              <Input
                label="Email" 
                color="gray"
                size="lg"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
              />
            </div>
            <div>
              <Textarea
                label="Message" 
                rows={6}
                color="gray"
                name="message"
                className="focus:border-t-gray-900 border-t-2"
                containerProps={{
                  className: "!min-w-full",
                }}
              />
            </div>
            <Button className="w-full" color="gray">
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

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
    <section  data-aos="fade-up" data-aos-anchor-placement="center-bottom" className="px-8 py-8 lg:py-16">
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
          <div className="bg-blue-gray-600 w-full h-full lg:max-h-[510px] rounded-xl p-[90px]">
            <div className="flex flex-col text-white">
              <h1 className="font-semibold text-[30px]">Contact Information</h1>
              <p className="text-[24px] font-thin">Fill up the form and our Team will get back to you within 24 hours.</p>
              <div className="flex flex-row items-center">
                <FaPhone className="h-5 w-5"/><p className="text-[18px] font-thin ml-5">+1(424) 000 ***</p>
              </div>
              <div className="flex flex-row items-center">
                <IoIosMail className="h-10 w-10"/><p className="text-[18px] font-thin ml-5">hi**@gmail.com</p>
              </div>
            </div>
          </div>
          <form
            action="#"
            className="flex flex-col gap-4 lg:max-w-sm"
          >
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  First Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="First Name"
                  name="first-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
              <div>
                <Typography
                  variant="small"
                  className="mb-2 text-left font-medium !text-gray-900"
                >
                  Last Name
                </Typography>
                <Input
                  color="gray"
                  size="lg"
                  placeholder="Last Name"
                  name="last-name"
                  className="focus:border-t-gray-900"
                  containerProps={{
                    className: "!min-w-full",
                  }}
                  labelProps={{
                    className: "hidden",
                  }}
                />
              </div>
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Email
              </Typography>
              <Input
                color="gray"
                size="lg"
                placeholder="name@email.com"
                name="email"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
                }}
              />
            </div>
            <div>
              <Typography
                variant="small"
                className="mb-2 text-left font-medium !text-gray-900"
              >
                Your Message
              </Typography>
              <Textarea
                rows={6}
                color="gray"
                placeholder="Message"
                name="message"
                className="focus:border-t-gray-900"
                containerProps={{
                  className: "!min-w-full",
                }}
                labelProps={{
                  className: "hidden",
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

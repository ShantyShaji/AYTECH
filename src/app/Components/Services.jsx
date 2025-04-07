import React from 'react';
import Image from 'next/image';
import { Icon } from '@iconify/react';
const Services = () => {
  return (
    <div className="px-4 lg:px-20 py-10 space-y-16 text-gray-700">

        <h1 className='text-4xl font-bold font-sans text-center'>Software Development & Services</h1>

        {/* Section 01 */}
      <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-6">
        {/* Text */}
        <div className="lg:w-[60%] space-y-3">
          <h3 className=" font-bold font-sans text-2xl text-[#006192]">Custom Software Development</h3>
          <p className='font-poppins text-justify text-base w-[90%]'>Our team of experienced developers specializes in building tailored software solutions that align with your business goals. Whether it’s a web application, mobile app, enterprise solution, or cloud-based system, we build high-quality software that drives efficiency and growth. Completed over 40 projects which includes 2 products under Health care & Construction.</p>
        </div>
        {/* Image */}
        <div className="lg:w-[35%] w-full">
          <Image src='/custom.png' width={400} height={300} alt="Trademark Registration" className="w-full h-auto" />
        </div>
      </div>

      <hr className='border border-[#999999] border-[0.5px] w-full'/>
        {/* Section 02 */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
        {/* Text */}
        <div className="lg:w-[60%] space-y-3">
          <h3 className=" font-bold font-sans text-2xl text-[#006192]">Outsourced Development Resources</h3>
          <p className='font-poppins text-justify text-base w-[90%]'>We provide businesses with skilled and dedicated developers, engineers, and technical teams who can seamlessly integrate into your operations. Whether you need short-term project support or long-term resources, our outsourced talent brings specialized expertise to help you meet deadlines and deliver quality results</p>
        </div>
        {/* Image */}
        <div className="lg:w-[35%] w-full">
          <Image src='/outsourced.png' width={400} height={300} alt="Trademark Registration" className="w-full h-auto" />
        </div>
      </div>

      {/* Section 03 */}
      <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-6">
        {/* Text */}
        <div className="lg:w-[60%] space-y-3">
          <h3 className=" font-bold font-sans text-2xl text-[#006192]">Consulting & Strategy</h3>
          <p className='font-poppins text-justify text-base w-[90%]'>We work closely with your business to understand your goals and challenges, offering strategic IT consulting services that drive digital transformation. Our consultants provide expert advice on technology, innovation, and best practices to ensure your projects succeed.</p>
        </div>
        {/* Image */}
        <div className="lg:w-[35%] w-full">
          <Image src='/it.png' width={400} height={300} alt="Trademark Registration" className="w-full h-auto" />
        </div>
      </div>

      <hr className='border border-[#999999] border-[0.5px] w-full'/>
      
       {/* Section 04 */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
        {/* Text */}
        <div className="lg:w-[60%] space-y-3">
          <h3 className=" font-bold font-sans text-2xl text-[#006192]">Company & Trademark Registration
          </h3>
          <p className='font-poppins text-justify text-base w-[90%]'>We can help you in Trademark registration with the Indian government authorities to officially recognize and protect a brand's name, logo, numerals, slogan, device and more. Below given are the different levels of the registration process that we take you through.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li className='flex items-center gap-2'><Icon icon="weui:setting-filled" width="20" height="20" />Trademark Search</li>
            <li>Drafting and Filing</li>
            <li>Objection & Hearing</li>
            <li>Opposition & Hearing</li>
            <li>Certification</li>
          </ul>
        </div>
        {/* Image */}
        <div className="lg:w-[35%] w-full">
          <Image src='/company.png' width={400} height={300} alt="Trademark Registration" className="w-full h-auto" />
        </div>
      </div>

      {/* Section 04 */}
      <div className="flex flex-col lg:flex-row-reverse items-start justify-between gap-6">
        {/* Text */}
        <div className="lg:w-[60%] space-y-3">
          <h3 className="text-[#1D4ED8] font-bold text-lg">04. <span className="text-gray-800">Company & Trademark Registration</span></h3>
          <p>
            We can help you in Trademark registration with the Indian government authorities to officially recognize and
            protect a brand’s name, logo, numerals, slogan, device and more. Below given are the different levels of the
            registration process that we take you through.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>Trademark Search</li>
            <li>Drafting and Filing</li>
            <li>Objection & Hearing</li>
            <li>Opposition & Hearing</li>
            <li>Certification</li>
          </ul>
        </div>
        {/* Image */}
        <div className="lg:w-[35%] w-full">
          <Image src='/company.png' width={400} height={300} alt="Trademark Registration" className="w-full h-auto" />
        </div>
      </div>

    </div>
  );
};

export default Services;

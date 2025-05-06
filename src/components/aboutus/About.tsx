"use client";

import Image from 'next/image';
import React from 'react';
import { StaticImageData } from 'next/image';

type AboutProps = {
  image: StaticImageData;
  title: string;
  descp: string;
  reverse?: boolean;
};

const About = ({ image, title, descp, reverse }: AboutProps) => {
  return (
    <section className="px-4 lg:px-10">
      <div
        className={`flex flex-col lg:flex-row items-start justify-center gap-10 ${reverse ? 'lg:flex-row-reverse' : ''
          }`}
      >
        <div className="flex-1">
          <Image src={image} alt="about1" className="w-full h-auto object-cover" />
        </div>
        <div className="flex flex-col gap-y-5 flex-1">
          <h1 className="text-2xl lg:text-[32px] font-semibold">{title}</h1>
          <p className="lg:text-[20px]">{descp}</p>
        </div>
      </div>
    </section>
  );
};

export default About;

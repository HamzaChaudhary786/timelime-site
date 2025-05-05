import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../public/assets/logo.png';
import facebook from '../../public/assets/Facebook.png';
import X from '../../public/assets/X.png';
import insta from '../../public/assets/Instagram.png';
import linkedIn from '../../public/assets/LinkedIn.png';
import youtube from '../../public/assets/YouTube.png';
import playstore from '../../public/assets/appstore.png';
import googleplay from '../../public/assets/googleplay.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#630404] text-white">
      {/* Top Section */}
      <div className="max-w-screen-xl mx-auto px-4 lg:px-8 py-16 text-center">
        <h1 className="text-xl lg:text-3xl xl:text-4xl 2xl:text-[50px] font-bold max-w-3xl mx-auto">
          The only Ed-Tech company that can support your business at any scale
        </h1>
        <div className="mt-7">
          <button className="bg-white text-black font-medium py-2 px-6 rounded-full hover:bg-[#F06A6A] transition duration-500">
            Get Started
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1540px] mx-auto px-4 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 py-10">
        {/* Contact Info */}
        <div className="flex flex-col gap-5">
          <Image src={logo} alt="logo" />
          <a href="tel:+1234567890" className="text-lg font-medium">
            1234567890
          </a>
          <a href="mailto:ask@timetechnologiesllc.com" className="text-lg font-medium">
            ask@timetechnologiesllc.com
          </a>
          <p className="text-lg font-medium">
            675 North Hunt Club Blvd, Unit 2223, Longwood, Florida, 32779, United States of America.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-start justify-center gap-5">
          <div className="space-y-2">
            <Link href="/" className="text-xl font-medium block">
              Case Studies
            </Link>
            <Link href="/" className="text-xl font-medium block">
              Pricing
            </Link>
            <Link href="/" className="text-xl font-medium block">
              Contact Us
            </Link>
          </div>
          <button className="bg-white text-black font-semibold py-2 px-4 mt-4">
            Get In Touch
          </button>
        </div>

        {/* Newsletter */}
        <div>
          <form className="flex flex-col gap-5">
            <h2 className="text-xl font-medium">Subscribe to our News Channel</h2>

            <div>
              <label className="text-lg font-medium">First Name</label>
              <input
                type="text"
                placeholder="First Name ..."
                className="mt-1 w-full border-2 border-white p-2 bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>

            <div>
              <label className="text-lg font-medium">Last Name</label>
              <input
                type="text"
                placeholder="Last Name ..."
                className="mt-1 w-full border-2 border-white p-2 bg-transparent text-white placeholder-white focus:outline-none"
              />
            </div>

            <button type="submit" className="w-full bg-white text-black font-medium py-2">
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#790303] py-6 px-4">
        <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex gap-4">
            <Image src={X} alt="twitter" />
            <Image src={facebook} alt="facebook" />
            <Image src={insta} alt="instagram" />
            <Image src={linkedIn} alt="linkedin" />
            <Image src={youtube} alt="youtube" />
          </div>

          <Link href="/" className="text-lg font-medium text-white">
            Terms & Privacy
          </Link>

          <div className="flex gap-4">
            <Image src={playstore} alt="playstore" />
            <Image src={googleplay} alt="googleplay" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/about.jpg';

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            Hi there! I recently graduated with my second degree in Information
            Technology, after previously obtaining a degree in Software
            Engineering. With some experience in web development, I'm always
            eager to learn new technologies and expand my skills. On my personal
            page, you can expect to see updates on my latest projects and
            interests, as well as my thoughts on the latest industry trends.
          </p>
          <p className="py-2 text-gray-600">
            Though I am most proficient in building front-end applications using
            HTML, CSS, Javascript, and React, I am a quick learner and can pick
            up new tech stacks as needed. I believe that being a great developer
            is not using one specific language, but choosing the best tool for
            the job.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-1 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;

import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

function Social() {
  return (
    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
      <a
        href="https://www.linkedin.com/in/yuntianshi/"
        target="_blank"
        rel="noreferrer"
      >
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaLinkedinIn />
        </div>
      </a>
      <a href="https://github.com/soyoutry" target="_blank" rel="noreferrer">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <FaGithub />
        </div>
      </a>
      <Link href="/#contact">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <AiOutlineMail />
        </div>
      </Link>
      <Link href="/resume">
        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
          <BsFillPersonLinesFill />
        </div>
      </Link>
    </div>
  );
}

export default Social;

import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import Social from './Social';

const Contact = () => {
  return (
    <div id='contact'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Contact
        </p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='w-full h-[500px] shadow-2xl shadow-gray-400 rounded-xl p-4'>
          <div className='flex flex-col justify-center items-center lg:p-4 h-full '>
            <div>
              <h2 className='py-2'>Terry Shi </h2>
            </div>
            <div>
              <p>Software Developer</p>
            </div>
            <div>
              <p className='py-4 '>
                I am available for full-time positions. Contact me and
                let&apos;s talk.
              </p>
            </div>
            <div>
              <p className='uppercase pt-8'>Connect With Me</p>
            </div>

            <div>
              <Social />
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp
                  className='text-[#5651e5]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;

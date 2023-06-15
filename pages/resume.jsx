import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Yuntian | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Yuntian Shi</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/yuntianshi/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/YuntianYT'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Front-end Developer <span className='px-1'>|</span> Web
              Development <span className='px-1'>|</span> Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Front-end Developer</p>
            <p className='py-2'>Web Development</p>
            <p>Problem Solving</p>
          </div>
        </div>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span>HTML</span>
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span> TypeScript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Redux
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span> Spring
            <span className='px-2'>|</span> Firebase
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Geotab</span>
            <span className='px-2'>|</span>Toronto, ON
          </p>
          <p className='py-1 italic'>Data Platform Developer (2022-2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed enterprise data platform UI components utilizing React
              and Ant Design in Typescript
            </li>
            <li>
              Ensured code quality by performing rigorous unit tests with Jest
              and E2E tests using Cypress
            </li>
            <li>
              Redesigned UX flow using Lucidchart, creating a high‑fidelity
              wireframe prototype with Figma
            </li>
            <li>
              Adapted to an agile work environment with daily stand‑ups and Jira
              for efficient tracking of user stories and bug reports
            </li>
            <li>
              Restructured codebase using Monorepo for modularization,
              facilitating independent deployment of modules via Google
              Kubernetes Engine(GKE), significantly reduced downtime while
              releasing
            </li>
          </ul>
        </div>

        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>BOSS SOFTWARE</span>
            <span className='px-2'>|</span>Fuzhou, CN
          </p>
          <p className='py-1 italic'>Web Developer (2019-2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Designed and implemented a full‑stack web application for internal
              candidate testing and exam result tracking
            </li>
            <li>
              Crafted responsive front‑end for exam module utilizing Vue.js and
              Element UI
            </li>
            <li>
              Developed robust back‑end using Spring framework (Spring, Spring
              MVC, Mybatis), leveraging Spring Cloud for seamless inter‑module
              communication
            </li>
            <li>
              Deployed and maintained the system on Linux servers using Docker
              for enhanced stability and scalability
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Leetcode Solution Website</span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Developed a web application using Next.js framework to allow users
              to search for LeetCode solutions by inputting the problem number
              and selecting the language of the answer.
            </li>
            <li>
              Integrated OpenAI API to retrieve the LeetCode solutions and
              implemented a backend service using Node.js, Express framework,
              and MongoDB database.
            </li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Job Application Tracker</span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Designed and implemented an Application Tracker. Utilized React.js
              for front-end development to create a user-friendly interface,
              enhancing the monitoring and management efficiency of job
              applications
            </li>
            <li>
              Employed Firebase as back-end services, responsible for data
              storage and real-time synchronization, providing users with
              efficient and stable service
            </li>
            <li>
              Developed features for intuitive data visualization of job
              application statistics, providing insights for users
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;

import { socialMedia } from '@/data';
import SparklesDemo from './SparklesDemo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full pb-10' id='contact'>
      <SparklesDemo />

      <div className='flex mt-16 md:flex-row flex-col justify-between items-center mx-[3rem] sm:mx-[6.5rem]'>
        <p className='md:text-base text-sm md:font-normal font-light'>
          Crafted with ❤️ by Vivek Ghimire © 2024. All rights reserved.
        </p>

        <div className='flex items-center md:gap-3 gap-6'>
          {socialMedia.map((info) => (
            <Link
              href={info.link}
              target='_blank'
              key={info.id}
              className='w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 
            bg-black-200 dark:bg-white-200 rounded-lg border 
            border-black-300 dark:border-white-300'
            >
              <img
                src={info.img}
                alt='icons'
                width={20}
                height={20}
                className='invert-0 dark:invert'
              />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

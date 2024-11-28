'use client';

import React, { useEffect, useState } from 'react';
import { SparklesCore } from './ui/Sparkles';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { useTheme } from 'next-themes';

export const useDarkMode = () => {
  const { theme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  // Prevent SSR mismatch
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Only use theme value when mounted
  return isMounted && theme === 'dark';
};

const SparklesDemo = () => {
  const isDarkMode = useDarkMode();

  return (
    <div>
      <div className='h-[40rem] relative w-full flex flex-col items-center justify-center overflow-hidden rounded-md'>
        <div className='w-full absolute inset-0 h-screen'>
          <SparklesCore
            id='tsparticlsfullpage'
            background='transparent'
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className='w-full h-full'
            particleColor={isDarkMode ? '#FFFFFF' : 'rgb(0, 3, 25)'}
          />
        </div>
        <footer className='w-full pt-20 pb-10' id='contact'>
          <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw] text-black dark:text-white'>
              Ready to take{' '}
              <span className='text-yellow-500 dark:text-purple'>your</span>{' '}
              digital presence to the next level?
            </h1>
            <p className='text-gray-800 dark:text-gray-300 md:mt-10 my-5 text-center'>
              Reach out to me today and let&apos;s discuss how I can help you
              achieve your goals.
            </p>
            <a href='mailto:stephengmre@gmail.com'>
              <MagicButton
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position='right'
                className='text-white bg-purple-500 hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-500'
              />
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default SparklesDemo;

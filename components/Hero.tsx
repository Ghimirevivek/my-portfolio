'use client';

import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { Boxes } from './ui/background-boxes';
import { cn } from '@/lib/utils';
import { TextGenerateEffect } from './ui/text-generate-effect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import SparklesDemo, { useDarkMode } from './SparklesDemo';
import SparklesHero from './SparklesHero';

const Hero = () => {
  const isDarkMode = useDarkMode();
  return (
    <div
      className='w-full relative overflow-visible flex flex-col items-center justify-center'
      id='about'
    >
      {/* <Boxes className='' /> */}
      <SparklesHero />
      <div>
        <Spotlight
          className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen'
          fill={`${isDarkMode ? 'white' : '#1E3A8A'}`} // Complementary for white: dark blue
        />
        <Spotlight
          className='h-[80vh] w-[50vw] top-10 left-full'
          fill={`${isDarkMode ? 'purple' : '#FFD580'}`} // Complementary for purple: golden yellow
        />
        <Spotlight
          className='left-80 top-28 h-[80vh] w-[50vw]'
          fill={`${isDarkMode ? 'blue' : '#F59E0B'}`} // Complementary for blue: golden orange
        />
      </div>
    </div>
  );
};

export default Hero;

'use client';

import React, { useEffect, useState } from 'react';
import { SparklesCore } from './ui/Sparkles';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import { TextGenerateEffect } from './ui/text-generate-effect';
import { useDarkMode } from './SparklesDemo';

const SparklesHero = () => {
  const isDarkMode = useDarkMode();

  return (
    <div>
      <div className='h-screen relative w-full flex flex-col items-center justify-center rounded-md'>
        <div className='w-full absolute inset-0 h-screen'>
          <SparklesCore
            id='tsparticlesfullpage'
            background='transparent'
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className='w-full h-full'
            particleColor={isDarkMode ? '#FFFFFF' : 'rgb(0, 3, 25)'}
          />
        </div>
        <div className='absolute inset-0 w-full h-full z-10 [mask-image:radial-gradient(transparent,white)] pointer-events-none' />
        {/* <Boxes className='' /> */}

        <p className='uppercase tracking-widest text-xs text-center text-black dark:text-blue-100 max-w-80 my-2'>
          Dynamic Web Magic with Next.js.
        </p>
        <TextGenerateEffect
          words='Hello, I’m Vivek – Let’s Build Something Amazing!'
          className='text-center text-[40px] md:text-5xl lg:text-6xl dark:text-white text-black relative z-20'
        />
        {/* <h1 className={cn("text-center text-2xl md:text-5xl sm:text-4xl dark:text-white text-black relative z-20")}>
            Hello, I’m Vivek – Let’s Build Something Amazing!
      </h1> */}
        <div className='flex justify-center relative my-1 z-10'>
          <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
            <p className='text-center text-sm md:text-lg sm:text-xl font-normal mb-3 sm:mb-2 mt-4 sm:mt-2 md:mt-0 md:mb-0 text-slate-900 dark:text-neutral-300 relative z-20'>
              Crafting Digital Experiences with Next.js, JavaScript, and
              React.js
            </p>
            <a href=''>
              <MagicButton
                title='Show my work'
                icon={<FaLocationArrow />}
                position='right'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparklesHero;

'use client';

import { Suspense } from 'react';
import * as React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import Hero from '@/components/Hero';
import Grid from '@/components/Grid';
import RecentProjects from '@/components/RecentProjects';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import SparklesDemo from '@/components/SparklesDemo';
import { FloatingNav } from '@/components/ui/FloatingNavbar';
import { navItems } from '@/data';
import Testimonials from '@/components/Testimonials';
import Loader from '@/components/Loader';
import dynamic from 'next/dynamic';

// const Loader = dynamic(() => import('@/components/Loader'), {
//   loading: () => <Loader />,
// });
export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='outline' size='icon'>
          <Sun className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
          <Moon className='absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
          <span className='sr-only'>Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='end'>
        <DropdownMenuItem onClick={() => setTheme('light')}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<Loader />}>
      <main className='relative bg-[#F5F5F5] dark:bg-black-100 flex justify-center items-center flex-col overflow-x-hidden mx-auto sm:px-10 px-5'>
        <div className='max-w-7xl w-full relative'>
          <div className='fixed right-1 top-[46%] z-[6000]'>
            <ModeToggle />
          </div>
          <FloatingNav navItems={navItems} />
          {/* Add negative margins for full-width Hero */}
          <div className='-mx-[1rem] sm:-mx-[2rem] md:-mx-[3rem] lg:-mx-[4rem] xl:-mx-[6.5rem]'>
            <Hero />
          </div>
          <Grid />
          <RecentProjects />
          <Testimonials />
          <Experience />
          <div className='-mx-[1rem] sm:-mx-[2rem] md:-mx-[3rem] lg:-mx-[4rem] xl:-mx-[6.5rem]'>
            {/* <CardSpotlightDemo /> */}
            <Footer />
          </div>
        </div>
      </main>
    </Suspense>
  );
}

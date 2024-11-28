'use client';

import Image from 'next/image';
import React from 'react';
import { CardBody, CardContainer, CardItem } from '../ui/3dCard';
import Link from 'next/link';
import { FaLocationArrow } from 'react-icons/fa';

export function ThreeDCardDemo({
  title,
  description,
  img,
  link,
  iconLists,
}: {
  title: string;
  description: string;
  img: string;
  link: string;
  iconLists: string[];
}) {
  return (
    <CardContainer className='inter-var'>
      <CardBody className='relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  dark:bg-[#13162D] dark:border-white/[0.2]  bg-[#FFFFFF] hover:shadow-2xl hover:shadow-yellow-500/[0.4] border-black/[0.2] rounded-3xl p-6 border w-auto sm:w-[30rem] h-auto'>
        <CardItem
          translateZ='50'
          className='font-bold text-lg lg:text-2xl text-center mb-2 line-clamp-1 dark:text-white'
        >
          {title}
        </CardItem>
        <CardItem
          as='p'
          translateZ='60'
          className='text-sm lg:text-xl font-light line-clamp-2 dark:text-[#BEC1DD] mb-6'
        >
          {description}
        </CardItem>
        <CardItem translateZ='100' className='w-full mt-6'>
          <img
            src={img}
            height='1000'
            width='1000'
            className='h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl'
            alt='thumbnail'
          />
        </CardItem>
        {/* Icon List */}

        <div className='flex justify-between items-center mt-20'>
          <div className='flex items-center justify-center gap-0'>
            {iconLists.map((icon, index) => (
              <div
                key={index}
                className='border border-white/[.2] rounded-full bg-[#E0E0E0] dark:bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                style={{
                  transform: `translateX(-${10 * index + 2}px)`,
                }}
              >
                <Image
                  src={icon}
                  alt={`icon-${index}`}
                  width={24}
                  height={24}
                  className='dark:filter-none filter invert'
                />
              </div>
            ))}
          </div>
          <CardItem
            translateZ={20}
            as='a'
            href={link}
            target='_blank'
            className='flex items-center px-4 py-2 rounded-xl bg-black dark:bg-white text-white dark:text-black text-xs font-bold'
          >
            Visit
            <FaLocationArrow className='ml-2 text-purple' />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}

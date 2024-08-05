// src/components/BestService.js
import React from 'react';
import { BestServiceData } from '../bestServicedata';

export default function BestService() {
  return (
    <div className='w-full md:w-[1280px] mx-auto text-center py-20'>
      <h3 className='text-lg text-sky-700 font-bold'>~~ Our Best Services ~~</h3>
      <h2 className='text-4xl font-bold mt-5 text-blue-950'>Aqua Farming Starts with Us</h2>
      <p className='w-1/2 mx-auto mt-5'>Transforming Water Management with Advanced Robotics and Data Analytics</p>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-14'>
        {BestServiceData.map((item, index) => (
          <div key={index} className={`w-full rounded-md shadow-lg flex flex-col ${index === 0 || index === 2 || index === 3|| index === 5 ? 'md:flex-col-reverse' : 'md:flex-col'}`}>
            <img 
              src={item.img} 
              alt={item.title} 
              className={`w-full h-64 object-cover ${index === 0 || index === 2 || index === 3|| index === 5 ? 'rounded-b-md' : 'rounded-t-md'}`}
            />
            <div className='p-4 flex flex-col gap-4'>
              <h3 className='text-xl font-bold text-blue-950 mt-4'>{item.title}</h3>
              <p>{item.desc}</p>
              {/* <a href='/' className='py-4 text-blue-950 font-semibold'>Read more <i className="fa-solid fa-arrow-right"></i></a> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

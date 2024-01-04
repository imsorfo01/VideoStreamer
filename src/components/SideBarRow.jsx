import React from 'react';


export default function SideBarRow({ title,icon }) {
    
  return (
    
    <div className='SideBarRow px-1  md:px-4 py-1 flex items-center md:gap-5 gap-2  hover:bg-gray-200 cursor-pointer font-medium'>
        <span className='MuIcon '>{icon}</span>
      <h1 className='md:text-[12px] text-[8px] font-bold '>{title}</h1>
      
    </div>
  );
}
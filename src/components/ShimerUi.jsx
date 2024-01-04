import React from 'react';


export default function ShimerUi() {
  const divList = ['a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a','a',]

  
  return (
     <div className='flex flex-wrap'>
      
      {divList.map((e,i)=><div key={i} className="flex md:p-4 border-b border-gray-300 m-1">
      <div className="md:w-80 md:h-48 w-20 h-[40px] md:mb-0 mb-[2px] border border-gray-400  bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-shimmer"></div>
      <div className="flex-1 ml-4">
        <div className="h-4 bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-shimmer mb-2"></div>
        <div className="h-3 bg-gradient-to-r from-transparent via-gray-300 to-transparent animate-shimmer"></div>
      </div>
    </div>)}
  </div>
  );
}
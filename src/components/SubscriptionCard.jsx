import React from 'react';
import { useDispatch } from 'react-redux';
import { unsubcsribe } from '../utlity/subscriberDataSlice';

export default function SubscriptionCard({subData}) {
  
  const disptach = useDispatch()
  const hndleUnsubscribe =()=>{
    // console.log(subData)
    localStorage.removeItem(subData.id)
      disptach(unsubcsribe(subData.id))
  }
  return (
    <div >
        
      <div className='flex md:gap-3 py-3 bg-gray-50 gap-2 w-64 md:w-full '>
        <img className='rounded-full mr-3 md:w-16 w-10 md:h-16 h-10 md:ml-4' src={subData.snippet.thumbnails.medium.url} alt="ChannelImage" />
         
            <div className='relative -top-2'>
                <h1 className='font-bold md:md:text-lg '>{subData.snippet.title}</h1>
                <p className='md:text-[13px] text-[12px] font-semibold'>{subData.statistics.subscriberCount/1000000}M Subscriber</p>
                <p className='md:text-xs text-[7px]'>{subData.statistics.videoCount + " Videos"}</p>
                <p className='md:text-[12px]  text-[7px] md:static relative -top-2 inline '>{subData.statistics.viewCount>1000000?subData.statistics.viewCount/1000000 + "M Views":subData.statistics.viewCount + "K Views"}</p>
                <button onClick={hndleUnsubscribe} className='bg-red-600 text-white block h-fit text-[10px] font-semibold px-1 cursor-pointer'>Unsubscribe</button>
            </div>
            
      </div>
        
        <div className='h-[1px] md:w-screen bg-gray-200 mt-[2px]'></div>
    </div>
  );
}
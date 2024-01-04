import React from 'react';

const VideoCard=({ videoData })=> {
  if (!videoData) return null;
  // console.log(videoData);
  const { statistics,snippet }=videoData
  const {url}=snippet?.thumbnails.medium
  const {title}=snippet
  
  
  return (
    <div className='md:w-80 w-20 mx-1 px-1 h-[160px] md:h-[300px] hover:shadow-2xl shadow-xl md:shadow-none  mb-2'>
      <img  src={url} alt="thumbNail " className='w-full' />
      <div className='flex gap-2 mt-1'>
        <img className='md:w-6 md:h-6 w-3 h-3 rounded-full' src={url} alt="" />
        <p className='md:text-[17px] text-[6px] font-bold w-full'>{title}</p>
      </div>
      <div className='md:ml-8 relative md:static -top-1 md:-top-2 '> 
        <h1 className='md:text-[14px] inline md:px-1 text-[7px]  font-extrabold'>{snippet.channelTitle}</h1>
        <h1 className='md:text-[12px] text-[7px] '><span className='font-semibold'>{statistics.viewCount>1000000?statistics.viewCount/1000000+" M ":statistics.viewCount/1000 + " K "} Subscriber</span>. </h1>
      </div>
    </div>
  );

}




export default VideoCard;
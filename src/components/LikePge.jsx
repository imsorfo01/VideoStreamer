import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LikePageCard from './LikePageCard';
import { Link } from 'react-router-dom';
import { addWatchData } from '../utlity/watchSlice';
import { clearLikeList } from '../utlity/likeSlice';

export default function LikePge() {
    const dispatch = useDispatch()
    const watcData = useSelector(store=>store.watch.watchData)
    const likelist = useSelector(store=>store.like.likeList)
  if (likelist.length == 0) {
    return <div className='absolute left-[45%] text-center mt-4 '>
      <h1 className='text-xl font-semibold'>like List is empty</h1>
      <Link to="/"><button className='px-3 bg-black text-white ml-4 cursor-pointer mt-2 '> Home</button></Link>
    </div>
  }
    const clearLikeListFn =()=>{
      dispatch(clearLikeList());
      localStorage.clear()
    }
  return (
    <div className='h-screen overflow-y-scroll px-3 w-full'>
      <button className='text-white px-1 bg-red-600 text-xs mt-2 mx-2 font-bold cursor-pointer' onClick={clearLikeListFn}>Clear Likelist</button>
      {likelist.map((e)=><div onClick={()=>dispatch(addWatchData(e))} ><LikePageCard likelistData={e}/></div>)}
      
    </div>
  );
}
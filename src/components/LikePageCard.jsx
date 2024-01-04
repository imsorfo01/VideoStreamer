import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromLikeList } from '../utlity/likeSlice';
import { Link } from 'react-router-dom';




export default function LikePageCard({likelistData}) {
  const dispatch = useDispatch()
  const removeLikeHndler =()=>{
localStorage.removeItem(likelistData.id);  
dispatch(removeFromLikeList(likelistData?.id))
  }
  
  return (
    
    <div className='mt-2 py-2 shadow-xl' >
      <div className='md:w-[900px] w-[100%] ml-3 h-[1px] bg-gray-500 '></div>
      <div className='md:w-96 mt-1 ml-3 cursor-pointer flex  gap-3'>
        <div>
          <Link to={"/watch/"+likelistData?.id}><img className='md:hover:shadow-lg md:w-fit w-36' src={likelistData.snippet.thumbnails.medium.url} alt="thumbnails" /></Link>
          <h1 className='md:text-[13px] font-semibold md:w-fit w-36 text-[8px]'>{likelistData.snippet.title}</h1>
          
        </div>
        <button onClick={removeLikeHndler}  className='bg-red-600 px-1 md:font-semibold cursor-pointer text-white text-[10px] md:text-lg h-fit'>Remove</button>

      </div>
      
    </div>
    
  );
}
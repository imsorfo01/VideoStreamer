import React from 'react';
import Sidebar from './Sidebar';
import VideoContainer from './VideoContainer';
import { Route, Routes } from 'react-router-dom';
import SearchPage from './SearchPage';
import WatchPage from './WatchPage';
import { useSelector } from 'react-redux';
import LikePge from './LikePge';
import WatchHistory from './WatchHistory';
import Subscriptions from './Subscriptions';
import Trending from './Trending';

export default function MainContainer() {
  const videoId = useSelector(store=>store.popularVideo.popularVideos)
  
  return (
    <div className='flex w-[100%] md:overflow-x-hidden overflow-x-scroll h-full  '>
      <div className=''>
        <Sidebar/>
      </div>
      <Routes>
        <Route path='/' element={<VideoContainer/>}/>
        <Route path='/search' element={<SearchPage/>}/>
        <Route path='/watch/:videoId' element={<WatchPage/>}/>
        <Route path='/likeVideos' element={<LikePge/>}/>
        <Route path='/likeVideos' element={<LikePge/>}/>
        <Route path='/watchhistory' element={<WatchHistory/>}/>
        <Route path='/subscriptions' element={<Subscriptions/>}/>
        <Route path='/trending' element={<Trending/>}/>
      </Routes>
    </div>
  );
}
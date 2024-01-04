import React from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWatchData, addWatchHistory } from "../utlity/watchSlice";
import ShimerUi from "./ShimerUi";

export default function VideoContainer() {
  const popularVideo = useSelector((store) => store.popularVideo.popularVideos);
  // console.log(popularVideo[1]);
  const dispatch = useDispatch();
 

  return !popularVideo?<ShimerUi/>: (
    <div className="mt-3 h-screen  overflow-y-scroll md:overscroll-y-none flex flex-wrap mx-3">
      {popularVideo?.map((e) => (
        <Link key={e.id} to={"/watch/" + e.id}>
          <div  
            onClick={() => {
              dispatch(addWatchData(e));
              dispatch(addWatchHistory(e))
            }}
          >
            <VideoCard  videoData={e} />
          </div>
        </Link>
      ))}
    </div>
  );
}
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { addWatchData } from "../utlity/watchSlice";

export default function Trending() {
  const popVideos = useSelector((store) => store.popularVideo.popularVideos);
  const dispatch = useDispatch();

  const trendingList = popVideos?.filter(
    (e) => e.statistics.viewCount > 1000000
  );
  //  console.log(trendingList);

  return (
    <div className="mr-4 flex flex-wrap h-screen overflow-y-scroll">
      {trendingList?.map((e) => (
        <Link to={"/watch/" + e.id}>
          <div className="flex flex-wrap" onClick={() => dispatch(addWatchData(e))}>
            <VideoCard videoData={e} />
          </div>
        </Link>
      ))}
    </div>
  );
}
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { addWatchData } from "../utlity/watchSlice";

export default function WatchHistory() {
  const dispatch = useDispatch();

  const watchHistoryList = useSelector((store) => store.watch.watchHistory);
  // console.log(a);
  return (
    <div>
      {watchHistoryList == 0 && (
        <Link to={"/"}>
          <button className="cursor-pointer py-1 px-4 bg-slate-900 text-white  absolute left-[45%] top-[20%] text-xl hover:bg-slate-800">
            {" "}
            Explore
          </button>
        </Link>
      )}
      {watchHistoryList &&
        watchHistoryList.map((e) => (
          <Link key={e.id} to={"/watch/" + e.id}>
            <div  onClick={() => dispatch(addWatchData(e))}>
              <VideoCard videoData={e} />
            </div>
          </Link>
        ))}
    </div>
  );
}
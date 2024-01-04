import React from "react";
import { useDispatch, useSelector } from "react-redux";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { addWatchData } from "../utlity/watchSlice";

export default function SearchPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const searchFilterList = useSelector((store) => store.search.searchList);
  if (!searchFilterList) return null;
  if (searchFilterList.length == 0)
    return (
      <div className="m-auto text-center ">
        <h1 className="text-[10px] md:text-xs mt-3">Your Search did not Match Any Results...!</h1>
        <Link to={'/'}><button className="px-1 bg-violet-500 text-xs font-bold text-white cursor-pointer">Home</button></Link>
      </div>
    );

  return (
    <div className="mt-1 ml-6 flex flex-wrap mb-3 cursor-pointer">
      {searchFilterList.map((e) => (
        <div key={e.id} onClick={() => {
          dispatch(addWatchData(e))
          navigate("/watch/" + e.id)
        }}>
          <VideoCard videoData={e} />
          
        </div>
      ))}
    </div>
  );
}
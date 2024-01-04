import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { closeMenu } from "../utlity/userSlice";
import { useEffect } from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import { youtubeApiKey } from "../utlity/constant";
import {
  addSubscriberData,
  addSubscription,
} from "../utlity/subscriberDataSlice";
import CheckIcon from "@mui/icons-material/Check";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import { addToLikeList, removeFromLikeList } from "../utlity/likeSlice";
import VideoCard from "./VideoCard";
import { addWatchData } from "../utlity/watchSlice";
import LiveChat from "./LiveChat";

export default function WatchPage() {
  const [subscriptionStatus, setsubscriptionStatus] = useState(false);  
  const { videoId } = useParams();
  const dispatch = useDispatch();
  const watchData = useSelector((store) => store.watch.watchData);
  const popularVideo = useSelector((store) => store.popularVideo.popularVideos);
  const subscriberData = useSelector((store) => store.subscriberData.subscriberDataList);
  const subscriptions = useSelector((store) => store.subscriberData.subscriptions);
  const isMenuOpen = useSelector(store => store.user.isMenuOpen)
const hasSubscribed = localStorage.getItem(watchData.snippet.channelId)==="true"
const hasLiked = localStorage.getItem(watchData.id)==="true"

  const likefn = () => {
    if (localStorage.getItem(watchData.id)) {
      localStorage.setItem(watchData.id,"true")
    dispatch(addToLikeList(watchData));
    }
  };

  const disLikefn = () => {
    dispatch(removeFromLikeList());
  };Z

  const channelDetails = async (id) => {
    const data = await fetch(
      "https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=" +
        id +
        "&key=" +
        youtubeApiKey
    );
    const json = await data.json();
    dispatch(addSubscriberData(json.items[0]));
  };

  useEffect(() => {
    dispatch(closeMenu());
    channelDetails(watchData?.snippet?.channelId);
  }, []);

  const subscribeHandler = () => {
    
    // setsubscriptionStatus(true );
    
    if (!hasSubscribed) {
      localStorage.setItem(watchData.snippet.channelId,"true");
      dispatch(addSubscription(subscriberData));
      
    }
  };
  // localStorage.clear()
  // console.log(hasSubscribed)
  return (
    <div className="md:pt-5 pt-2 w-screen h-[100%] flex ">
      <div className="md:px-5 px-1 md:w-9/12 w-[79%]">
        
          <iframe 
          className="md:w-[100%] w-[100%] h-48 md:h-[450px] "
          src={"https://www.youtube.com/embed/" + videoId+"?autoplay=1"}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          
        ></iframe>
        
        
        <div>
          <h1 className="font-bold md:text-xl mt-3 text-[10px] w-10/12">
            {watchData?.snippet?.title}
          </h1>
        </div>
        <div className="w-full h-[1px] bg-gray-200 mt-1"></div>

        <div className="subscribe shadow-lg px-1 py-1 md:px-4 flex justify-between w-full mt-2">
          <div className="flex gap-3 md:gap-5 ">
            <img
              src={subscriberData?.snippet?.thumbnails?.medium?.url}
              alt="channelImage"
              className="md:w-12 md:h-12 w-6 h-fit md:mr-5 rounded-full"
            />
            <div className="subscriberCount md:px-5 md:static relative -left-2 mr-1  rounded-lg px-1">
              <h1 className="md:font-semibold text-[7px] font-extrabold md:text-lg">
                {subscriberData?.snippet?.title}
              </h1>
              <h2 className="md:text-sm text-[5px] ">
                {subscriberData?.statistics?.subscriberCount / 1000000} M
                Subscriber{""}
                
              </h2>
            </div>
             <button disabled={hasSubscribed} className="relative -left-6 md:static md:text-lg px-2 text-white border bg-gray-600 font-semibold h-fit text-[8px] "  onClick={subscribeHandler}>
        {hasSubscribed ? " Subscribed" : "Subscribe"}
      </button>
          </div>
          <div className="  flex items-center md:text-xl text-[2px] relative -top-[10px] -mr-2  ">
            <span
              onClick={likefn}
              disabled={hasLiked}
              className="md:mr-10  hover:cursor-pointer hover:text-green-400"
            >
              {" "}
              <ThumbUpIcon />
              <span className=" font-bold md:text-xs text-[5px]">
                {watchData?.statistics?.likeCount}
              </span>
            </span>
            <span
              onClick={disLikefn}
              className="hover:cursor-pointer hover:text-red-600 text-[5px]"
            >
              <ThumbDownAltIcon />
              <span className=" font-bold md:text-xs text-[5px]">
                {watchData?.statistics?.commentCount}
              </span>
            </span>
          </div>
        </div>
        <div >
          <LiveChat/>
        </div>
      </div>

      <div className="w-fit md:w-fit overflow-y-scroll md:overflow-x-hidden h-screen md:h-[870px] " >
        {popularVideo.map((e) => (
          <Link key={e.id} to={"/watch/" + e.id}>
            <div className="w-full "
              onClick={() => {
                channelDetails(e.snippet.channelId);

                dispatch(addWatchData(e));
                setsubscriptionStatus(false)
              }}
            >
              <VideoCard videoData={e} />
            </div>
          </Link>
        ))}
      </div>
      
    </div>
  );
}
import React, { useState } from "react";
import SideBarRow from "./SideBarRow";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import HomeIcon from "@mui/icons-material/Home";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import HistoryIcon from "@mui/icons-material/History";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShowMorePage from "./ShowMorePage";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function Sidebar() {
  const [showMore, setshowMore] = useState(true);
  const menuToggler = useSelector((store) => store.user.isMenuOpen);


  const showMoreFn =()=>{
    setshowMore(!showMore)
  }

  return !menuToggler ? null : (
    <div className="md:w-52 w-24 shadow-2xl mt-1 ">
      <Link to="/">
        <SideBarRow title="Home" icon={<HomeIcon />} />
      </Link>
      <Link to="/trending">
        <SideBarRow title="Trending" icon={<WhatshotIcon />} />
      </Link>
      <Link to="/subscriptions">
        <SideBarRow title="Subscription" icon={<SubscriptionsIcon />} />
      </Link>
      <div className="h-[.5px] md:mb-3 mb-1 bg-gray-400 w-[80%] m-auto"></div>
      <Link to="/likeVideos">
        <SideBarRow title="liked Videos" icon={<ThumbUpIcon />} />
      </Link>

      <Link to="Watchhistory">
        <SideBarRow title="History" icon={<HistoryIcon />} />
      </Link>

      <SideBarRow title="Watch Later" icon={<WatchLaterIcon />} />

      <div className="h-[1px] md:mb-3 mb-1 bg-gray-400 w-[80%] m-auto"></div>

      <SideBarRow title="Library" icon={<VideoLibraryIcon />} />

      <SideBarRow title="Your Videos" icon={<OndemandVideoIcon />} />
      {showMore && <ShowMorePage />}
      <span  onClick={showMoreFn} className="cursor-pointer ">
         {!showMore?<SideBarRow title="Show More" icon={<ExpandMoreIcon />} />:<SideBarRow title={'Show Less'} icon={<ExpandLessIcon/>}/>}

         
         </span>
    </div>
  );
}

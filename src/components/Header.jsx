import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  suggestedDataApi,
  youtubeApi,
  youtubeApiKey,
  youtubeLogo,
} from "../utlity/constant";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCameraFrontIcon from "@mui/icons-material/PhotoCameraFront";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { toggleMenu } from "../utlity/userSlice";
import { addPopularVideo } from "../utlity/popularVideoSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { addSearchList } from "../utlity/searchSlice";
import { addSuggestedData } from "../utlity/suggestionSlice";

export default function Header() {
  
  const [showSuggestion, setshowSuggestion] = useState(false);
  const [cachaeSuggestedData, setcachaeSuggestedData] = useState(null);
  const cachaeSuggestedDataList = useSelector((store) => store.suggestedData);
  const [apiSuggestions, setapiSuggestions] = useState([]);
  const [searchQuerry, setsearchQuerry] = useState("");

  const dispatch = useDispatch();
  const [poularVideo, setpoularVideo] = useState(null);
  const popularVideoList = useSelector(
    (store) => store.popularVideo.popularVideos
  );
  const searchInput = useRef();

  const menuToggler = () => {
    dispatch(toggleMenu());
  };
  useEffect(() => {
    !popularVideoList && popularVideo();
    dispatch(addPopularVideo(poularVideo));
  });
  // useEffect(() => {
  //   const timer = setTimeout(() => {
      
  //       if (cachaeSuggestedData) {
  //         setapiSuggestions(cachaeSuggestedData)
  //       }else{
  //            suggestedDataFn();
  //       }

      
  //   }, 200);
    // console.log(cachaeSuggestedData);
  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, [searchQuerry]);
  const suggestedDataFn = async () => {
    const data = await fetch(suggestedDataApi + searchQuerry);
    const json = await data.json();
    // setapiSuggestions(json[1]);
    // dispatch(addSuggestedData({ [searchQuerry]: json[1] }));
    // setcachaeSuggestedData(cachaeSuggestedDataList[searchQuerry]);
  };

  const popularVideo = async () => {
    const data = await fetch(youtubeApi + youtubeApiKey);
    const json = await data.json();
    setpoularVideo(json.items);
  };
  const searchfn = () => {
    let searchFilterList = popularVideoList.filter((e) =>
      e.snippet.title
        .toLowerCase()
        .includes(searchInput.current.value.toLowerCase())
    );

    dispatch(addSearchList(searchFilterList));
  };

  return (
    <div className=" flex justify-between items-center shadow-lg sticky z-50 bg-gray-100 top-0 py-1 md:mx-2">
      <div className="flex  gap-1  items-center">
        <span onClick={menuToggler}>
          <MenuIcon />
          
        </span>
        <Link to="/">
          <img className="w-16 absolute top-[10px] h-4" src={youtubeLogo} alt="youtubeLogo" />
        </Link>
      </div>

      <div className="flex items-center relative left-8 ">
        <input
          ref={searchInput}
          onChange={(e) => setsearchQuerry(e.target.value)}
          onFocus={()=>setshowSuggestion(true)}
          onBlur={()=>setshowSuggestion(false)}
          placeholder="Search here"
          type="text"
          className="md:w-96 w-[150px] outline border border-slate-500  px-5 py-1 text-xs font-bold rounded-l-2xl md:h-7 h-5 outline-none  "
        />
        {/* {  showSuggestion && (
          <div className="absolute w-96 px-7 top-10 opacity-80 bg-gray-500 text-white rounded-xl">
            <ul>
              {apiSuggestions.map((e) => (
                <li
                  onClick={() => (searchInput.current.value = e)}
                  className="cursor-pointer hover:opacity-70 font-bold p-1 rounded-lg px-5 bg-gray-800 m-1"
                >
                  🔍 {e}
                </li>
              ))}
            </ul>
          </div>
        )} */}
        <Link to="/search">
          <button
            onClick={searchfn}
            className="bg-gray-200 block md:px-3  border border-slate-500 py-1 md:h-7 h-5 rounded-r-2xl"
          >
            <span className="relative md:-top-1 -top-[7px]"><SearchIcon /></span>
          </button>
        </Link>
      </div>

      <div className="flex md:gap-1 ">
        <PhotoCameraFrontIcon />
        <NotificationAddIcon />
        <AccountCircleIcon />
      </div>
    </div>
  );
}

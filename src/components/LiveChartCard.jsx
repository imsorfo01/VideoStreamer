import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect } from "react";


export default function LiveChartCard({ name, message }) {

//   const url = 'https://youtube-mp3-download1.p.rapidapi.com/dl?id=lCCk8Mh25m0';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '53a73ce611msh95dc71186956143p1b142djsnbcee8565186e',
// 		'X-RapidAPI-Host': 'youtube-mp3-download1.p.rapidapi.com'
// 	}
// };


// const datafn = async()=>{
//   const data = await fetch(url,options)
//   const json = await data.json()
//   // console.log(json);
// }
// useEffect(() => {
//   datafn()
// }, []);
  return (
    <div className="md:px-16 px-2">
      <p className="md:mt-2 ">
        <span className="md:font-semibold text-[10px] md:text-sm font-bold "><AccountCircleIcon/>{name} :</span> <span className="text-[7px] md:text-[12px]">{message}</span>
      
      </p>
      
    </div>
  );
}
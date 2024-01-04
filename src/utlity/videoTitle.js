import { youtubeApiKey } from "./constant"

export const videoTitle = async()=>{
    const data = await fetch('https://youtube.googleapis.com/youtube/v3/captions?true=ACKQDAlAfFE&videoId=ACKQDAlAfFE&key='+youtubeApiKey)
    const json = await data.json()
    // console.log(json);
}
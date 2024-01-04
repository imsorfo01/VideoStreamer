import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from '../utlity/chatSlice';
import LiveChartCard from './LiveChartCard';
import { generateRandomMessage, generateRandomName } from '../utlity/constant';
import SendIcon from '@mui/icons-material/Send';

export default function LiveChat() {
  const [chatMessage, setchatMessage] = useState("");
  const  dispatch = useDispatch();
  const messageData = useSelector(store=>store.chat.message)
  useEffect(() => {
   const i = setInterval(() => {
      // console.log("this")
      
      dispatch(addMessage({
        name: generateRandomName(),
        message: generateRandomMessage()
      }))
    }, 500);
    return ()=>{
      clearInterval(i)
    }
  }, []);
  return (
    <div className='w-full py-1 bg- bg-gray-200 '>
        <h1 className='font-semibold md:text-xl'>Live Chat :-</h1>
      <div className='md:w-1/2 m-auto bg-gray-300  h-fit shadow-xl md:px-6 py-2  flex flex-col-reverse '>
      
        {messageData.map((e)=><LiveChartCard name={e.name} message={e.message}/>)}
      </div>

      <div className='mt-2 relative md:left-[26%]  md:w-1/2  flex items-center justify-center gap-2'>
        <input type="text" className='w-full px-4 py-1 md:py-2 border border-gray-400 outline-none rounded-lg font-semibold'  placeholder='Add Comment' onChange={(e)=>setchatMessage({name:"user",message: e.target.value + "🚀" })
         
        }/>
        <span onClick={()=>{
          dispatch(addMessage(chatMessage))
          
        }}><SendIcon /></span>
      </div>
      
    </div>
  );
}
//  
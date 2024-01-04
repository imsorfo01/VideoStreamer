import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SubscriptionCard from './SubscriptionCard';


export default function Subscriptions() {
  const subscriptions = useSelector(store=>store.subscriberData.subscriptions)
  // console.log(subscriptions);
  if (subscriptions.length==0) {
    return (
      <div className='absolute left-[45%]  mt-4'>
        <h1 className='font-semibold'>No Subscriptions Yet</h1>
        <Link to="/"><button className='px-4 mt-2 py-1 ml-8 text-white bg-black font-semibold hover:bg-slate-800'> Home</button></Link>
      </div>
    )
  }
  return (
    <div className='h-screen '>
      {subscriptions.length !==0  && subscriptions.map((e)=><SubscriptionCard subData={e} key={e.id}/>)}
    </div>
  );
}
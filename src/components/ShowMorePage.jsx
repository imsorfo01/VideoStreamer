import React from 'react'
import SideBarRow from './SideBarRow'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import TheatersIcon from '@mui/icons-material/Theaters';
import RadioIcon from '@mui/icons-material/Radio';
import MicExternalOnIcon from '@mui/icons-material/MicExternalOn';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import CameraFrontIcon from '@mui/icons-material/CameraFront';
import CalendarTodayTwoToneIcon from '@mui/icons-material/CalendarTodayTwoTone';

export default function ShowMorePage() {
  return (
    <div>
        <div className='h-[1px] md:mb-3 mb-1 bg-gray-400 w-[80%] m-auto'></div>
      <SideBarRow title={'music'} icon={<MusicNoteIcon/>}/>
      <SideBarRow title={'Movies'} icon={<TheatersIcon/>}/>
      <SideBarRow title={'Radio'} icon={<RadioIcon/>}/>
      <div className='h-[1px] md:mb-3 mb-1 bg-gray-400 w-[80%] m-auto'></div>
      <SideBarRow title={'Podcast'} icon={<MicExternalOnIcon/>}/>
      
      <SideBarRow title={'New Year'} icon={<CalendarTodayTwoToneIcon/>}/>
    </div>
  )
}

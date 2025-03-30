import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import  HeaderOption  from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'; 
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';


export default function Header() {
  
  return (
    
    <div className="header">
     <div className="header-left">
      <img src="/src/img/linkedin.png" alt="linkdin image" />
     </div>

     <div className="header-search">
      < SearchIcon/>
      <input type="text" placeholder='Search' />
     </div>
     
     <div className="header-right">
      <HeaderOption Icon={HomeIcon} title='Home' />
      <HeaderOption Icon={SupervisorAccountIcon} title='My Network' />
      <HeaderOption Icon={BusinessCenterIcon} title='Jobs' />
      <HeaderOption Icon={ChatIcon} title='Messaging' />
      <HeaderOption Icon={NotificationsIcon} title='Notifications' />
      <HeaderOption Avatar = {Avatar} title= 'me' />
     </div>

    </div>
  )
}

import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import  HeaderOption  from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount'; 

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
     </div>

    </div>
  )
}

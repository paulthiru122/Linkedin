import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
export const Sidebar = () => {
  const recentItem=(topic)=>(
    <div className="sidebar-recentitem">
      <span className='sidebar-hash'>#</span>
      <p>{topic}</p>
    </div>
  )
  return (
    <div className='sidebar'>
       <div className="sidebar-top">
        <img src="/src/img/Thiru bg linkdin.jpg" alt="" />
        <Avatar className='sidebar-avatar'/>
        <h2>Thiru</h2>
        <h4>thiru@gmail.com</h4>
       </div>
       <div className="sidebar-stats">
        <div className="sidebar-stat">
            <p>Who viewed you</p>
            <p className="sidebar-statnumber">1,011</p>
        </div>
        <div className="sidebar-stat">
        <p>Views on post</p>
        <p className="sidebar-statnumber">1,975</p>
        </div>
       </div>
       <div className="sidebar-bottom">
        <p>Recent </p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software engineering')}
        {recentItem('design')}
        {recentItem('developer')}
       </div>

    </div>
  )
}

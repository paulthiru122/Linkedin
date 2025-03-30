import React, { useState } from 'react'
import './Feed.css'
import CreateIcon from '@mui/icons-material/Create'
import { InputOption } from './InputOption'
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalenderViewDayIcon from '@mui/icons-material/CalendarViewDay'
import { Post } from './Post';
export const Feed = () => {
  const [ posts,setPostes] = useState([]);
  const sendPost=(e)=>{
    e.preventDefault()
    // setPostes()
  }

  return (
    <div className='feed'>
      <div className="feed-inputcontainer">
        <div className="feed-input">
          <CreateIcon/>
          <form action="">
            <input type="text" />
            <button type='submit' onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed-inputoptions">
          <InputOption Icon={ImageIcon} color='#70B5F9' title={'Photo'}/>
          <InputOption Icon={SubscriptionsIcon} color='#E7A33E' title={'Video'}/>
          <InputOption Icon={EventNoteIcon} color='#C0CBCD' title={'Event'}/>
          <InputOption Icon={CalenderViewDayIcon} color='#7FC15E' title={'Write article'}/>
        </div>
      </div>
      {posts.map((post)=>
      (<Post/>))}
      <Post name='Thiru' description='This is a test' message='WOW this worked' />
    </div>
  )
}

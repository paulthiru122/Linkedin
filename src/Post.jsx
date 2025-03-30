import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import { InputOption } from './InputOption'
import ThumbUpAltOutLinedIcon from '@mui/icons-material/ThumbUpAltOutlined'
import ChatOutLinedicon from '@mui/icons-material/ChatOutlined'
import ShareOutLinkedIcon from '@mui/icons-material/ShareOutlined'
import SenOutLinedIcon from '@mui/icons-material/SendOutlined'

export const Post = ({name,description,message,photoUrl}) => {
  return (
    <div className='post'>
        <div className="post-header">
            <Avatar/>
            <div className="post-info">
                <h2>{name} </h2>
                <p>{description}</p>
            </div>
        </div>

        <div className="post-body">
            <p>{message}</p>
        </div>
        <div className="post-buttons">
            <InputOption Icon={ThumbUpAltOutLinedIcon} title='Like' color='gray' />
            <InputOption Icon={ChatOutLinedicon} title='Comment' color='gray' />
            <InputOption Icon={ShareOutLinkedIcon} title='Share' color='gray' />
            <InputOption Icon={SenOutLinedIcon} title='Send' color='gray' />
        </div>

    </div>
  )
}

import React from 'react'
import './HeaderOption.css';

export const HeaderOption = ({Icon,Avatar,title}) => {
  return (
    <div className='headeroption'>
        {Icon && <Icon className='headeroption-icon'/>}
        {Avatar &&
        <Avatar className='headeroption-icon' src={Avatar} />}
        <h3 className='headeroption-title'>{title}</h3>

    </div>
  )
}
export default HeaderOption;
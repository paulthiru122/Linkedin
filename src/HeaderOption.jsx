import React from 'react'
import './HeaderOption.css';

export const HeaderOption = ({Icon,title}) => {
  return (
    <div className='headeroption'>
        {Icon && <Icon className='headeroption-icon'/>}
        <h3 className='headeroption-title'>{title}</h3>

    </div>
  )
}
export default HeaderOption;
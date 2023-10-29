import React from 'react'
import { NavLink } from 'react-router-dom'
import NavigationLinks from '../../../../constants/NavigationLinks'

const NavLinks:React.FC = () => {
  return (
    <div className="gap-5 text-xs hidden md:flex tracking-widest">
        {
            NavigationLinks.map((currentLink,index)=>(
                <NavLink className={' hover:text-custom-ascent'} key={index} to={currentLink.link}>{currentLink.title}</NavLink>
            ))
        }
      </div>
  )
}

export default NavLinks
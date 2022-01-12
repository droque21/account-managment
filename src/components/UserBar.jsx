import React from 'react'
import { Link } from 'react-router-dom'


export const UserBar = ({user}) => {
  return (
       <div className='user-bar' id={user.name}>
        <Link to={`user/${user.name}`} className='link-user'>{user.name}</Link>
        <button>JA</button>
      </div>
  )
}

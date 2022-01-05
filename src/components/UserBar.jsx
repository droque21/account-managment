import React from 'react'

export const UserBar = ({user}) => {
  return (
    <div className='user-bar'>
      <p>{user.name}</p>
    </div>
  )
}

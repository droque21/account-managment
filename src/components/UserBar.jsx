import React from 'react'

export const UserBar = ({user}) => {
  return (
    <div className='user-bar' id={user.name}>
      <p>{user.name}</p>
    </div>
  )
}

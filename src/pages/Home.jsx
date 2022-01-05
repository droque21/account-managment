import React, { useRef, useState } from 'react'
import { UserBar } from '../components/UserBar'
import { createUser } from '../helpers/user'

export const Home = () => {
  const [userNameValue, setUserNameValue] = useState('')
  const [users, setUsers] = useState([])
  const input = useRef(null)

  const onChangeValue = (e) => {
    setUserNameValue(e.target.value)
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    if(userNameValue === '') return input.current.focus();
    setUsers(users => validateAndAddUserToCurrentUsers(users, userNameValue))
    setUserNameValue('')
    input.current.blur();
  }

  const onClickHandler = (e) => {
    e.target.blur()
  }

  const validateAndAddUserToCurrentUsers = (users, userName) => {
    if(users.some(user => user.name === userName.toUpperCase())) {
      return users
    }
    return [...users, createUser(userName)]
  }

  const usersToRender = users.map(user => <UserBar key={user.name} user={user} />)
  return (
    <>
      <form className='user-name_input' onSubmit={onSubmitHandler}>
          <input ref={input} type="text" placeholder='Ingresa un Nombre de Usuario' value={userNameValue} onChange={onChangeValue}/>
          <button onClick={onClickHandler}>+</button>
      </form>
      <div className='users_container'>
        {usersToRender}
      </div>
    </>
  )
}

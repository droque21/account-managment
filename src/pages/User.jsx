import React, { useEffect, useState } from 'react'
import { CustomLink } from '../components/CustomLink'
import { Outlet, Link, useNavigate, useParams } from 'react-router-dom'

export const User = () => {
  const params = useParams()
  const [user, setUser] = useState({})
  const navigate = useNavigate()
  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem(`user-${params.user}`))
    if(!user) navigate('/')
  
    setUser(user)
  },[])
  const onChange = (e) => {
    setUser(u => ({...u, data: {...u.data, [e.target.name]: e.target.value}}))
  }
  console.log(user)
  return (
    <div className='user'>
      <div className='userName-bar'>
        <h2>{user.name}</h2>
      </div>
      <div className='user-income'>
        <div className='income'>
          <p>$ {user?.data?.monthly_income}</p> 
          {/* <input maxLength={6} type="text" name='monthly_income' value={user?.data?.monthly_income || 0} onChange={onChange} onFocus={e=> e.target.select()}/> */}
        </div>
      </div>
      <nav>
        <ul className='navigation_user'>
            <CustomLink to={'savings'}>
              <li>
                Ahorros
              </li> 
            </CustomLink>
            <CustomLink to={'expenses'}> 
              <li>
                Gastos
              </li>
            </CustomLink>
        </ul>
      </nav>
      <div className='user-option'>
        <Outlet />
      </div>
    </div>
  )
}

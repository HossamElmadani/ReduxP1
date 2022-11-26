import React from 'react'
import User from './user'
import AddUser from './userForm'
import { useSelector } from 'react-redux'
function ListUser() {
    const users=useSelector(state=>state.users)
    const mumbers = users.map(userInfo =>
        <User  key={userInfo.id}
        {...userInfo}
        />
        )

  return (
    <>
    <div>
        <AddUser/>
    </div>
    <div className='users'>

        {mumbers}
    </div>
    </>
  )
}

export default ListUser
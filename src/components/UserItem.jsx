import React  from 'react'
import { useContext } from 'react'
import { userContext } from '../App'
import "../"
const UserItem = () => {
const user = useContext(userContext);
  return (
    <div className='container'>
    <span className='text'>Usernames:</span>
    {user.map(useritem => (useritem.id === 10)?(useritem.name + " "):(useritem.name + ", "))}
    </div>
  )
}

export default UserItem
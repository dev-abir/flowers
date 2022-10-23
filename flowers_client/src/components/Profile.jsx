import React from 'react'
import User from '../user.png'

const Profile = () => {
  return (
    <div className="container p-4">
        <h1 className='text-center'>User Profile</h1>
        <div className="d-flex justify-content-center">
            <img src={User} alt="User image" />
        </div>
    </div>
  )
}

export default Profile
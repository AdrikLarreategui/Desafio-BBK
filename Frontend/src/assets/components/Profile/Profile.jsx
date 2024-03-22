import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const { user } = useSelector((state) => state.auth)

    return(
        <>
        <h1>Profile</h1>
        <p>{user.username}</p>
        <p>{user.email}</p>
        </>
    )
}

export default Profile
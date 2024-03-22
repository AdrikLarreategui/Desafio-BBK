// import React, { useEffect } from 'react'
// import User from './User/User'
// import { useDispatch, useSelector } from 'react-redux'
// import { getAll, reset } from '../../../assets/redux/auth/authSlice'

// const Users = () => {
//     const { isLoading } = useSelector((state) => state.auth)
//     const dispatch = useDispatch()
//     useEffect(()=> {
//         dispatch(getAll())
//         dispatch(reset())
//     }, [])
//     return(
//         <div>
//             <div>Users</div>
//             {isLoading ? 'Loading...' : <User />}
//         </div>
//     )
// }

// export default Users
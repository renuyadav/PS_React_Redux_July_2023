import React from 'react'
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/store/store';
const Dashboard:React.FC = () => {
    const userData = useSelector((store:AppState) => store.users);
  return (
    <h1 className='text-center m-4'>
      Welcome {userData.user?.username}
    </h1>
  )
}

export default Dashboard;

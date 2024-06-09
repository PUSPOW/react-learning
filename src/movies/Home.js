import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {

  const {users} = useSelector((state) => state.userSlice);


  return (
    <div>
    {users.map((user) => {
      return <div key={user.id}>
      <h1>{user.email}</h1>
      <img src={user.imageReview} alt="" />
      <button>edit</button>
      </div>
    })}
    </div>
  )
}

export default Home
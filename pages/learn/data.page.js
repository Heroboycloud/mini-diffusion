import { useState, useEffect } from 'react';
import Loader from "../loaders";

function Profile() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
 
  useEffect(() => {
    fetch('/user.json')
      .then((res) => res.json())
      .then((data) => {
        setData(data)
        setLoading(false)
      })
  }, [])
 
  if (isLoading) return <Loader />
  if (!data) return <p>No profile data</p>
 
  return (
    <div>
      <h1>{data.user}</h1>
      <p>{data.bio}</p>
    </div>
  )
}
export default Profile;

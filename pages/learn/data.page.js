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
    <div class="bg-gray-50 p-10"> 
    <div class="mb-10">
    <div class="flex justify-center bg-white-300 shadow-2xl ">
<div class="mx-4 self-center text-center p-10">
      <h1 class="text-blue-700 text-6xl font-bold text-center self-center hover:text-slate-300 ">{data.user}</h1>
      <h2 class="text-3xl font-semibold text-blue-300"> { data.bio } </h2>
      <button class="my-4 px-4 py-2 border-2 border-blue-300 rounded-lg text-white bg-blue-900"> Learn More </button>
    </div></div></div></div>
  )
}
function Projects(){

return (
<div class="grid grid-cols-2  gap-4"> 
<div class="border text-slate-400 font-semibold p-5 bg-green-300 text-center shadow-2xl">Java Apps</div> <div class="border bg-gray-300 text-center shadow-2xl">Mini-Diffusion</div> <div class="border bg-gray-300 text-center shadow-xl">C</div> <div class="border bg-gray-300 text-center shadow-xl">Android web dev</div> </div>

);

}
export default function Full(){

return (
<>
<Profile />
<Projects />
</>
);


};

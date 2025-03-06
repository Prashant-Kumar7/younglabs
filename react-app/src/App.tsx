import axios from 'axios'
import { useState } from 'react'


function App() {
  const [response , setResponse] = useState("")
  const [name , setName] = useState("")

function handleClick(){
  axios.get(`https://younglabs-backend.tumsab.xyz/api/greet?name=${name}`).then((res)=>{
    setResponse(res.data.message)
  }).catch((err)=>{
    console.log(err)
  })
}

  return (
    <div className='bg-zinc-900 h-screen w-screen flex justify-center items-center gap-6'>
      <div className='flex flex-col justify-center'>
        <div className='flex gap-4 items-center'>
          <label className='text-gray-200' htmlFor="name">Name </label>
          <input onChange={(e)=>setName(e.target.value)} type="text" name='name' className='border-0 px-2 py-1 text-gray-200 outline-none focus:outline-none bg-zinc-800' placeholder='Enter Name' required/>
          <button onClick={handleClick} className='p-1 rounded-md text-gray-200 hover:cursor-pointer hover:bg-indigo-800 bg-indigo-700'>Submit</button>
        </div>
        <span className='text-gray-200 mt-10 text-xl'>{response}</span>
      </div>
    </div>
  )
}

export default App

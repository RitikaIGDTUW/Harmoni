import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useSentMessage from '../../hooks/useSentMessage';

const MessageInput = () => {
  const [message, setMessage]=useState("");
  const {laoding,sendMessage}=useSentMessage()
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if(!message) return ;
    await sendMessage(message);
    setMessage("")
  }
  return (
    <form className='px-4 my-3' onSubmit={handleSubmit}>
        <div className='w-full relative'>
            <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-yellow-100 border-gray-400 text-slate-800'
             placeholder='Send a message' value={message} 
             onChange={(e)=>setMessage(e.target.value)}/>
             <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
                {laoding ? <div className='loading loading-spinner'></div>:<BsSend className='text-slate-800 '/>}
             </button>
        </div>
    </form>
  )
}

export default MessageInput





// import React from 'react'
// import {BsSend} from "react-icons/bs"

// const MessageInput = () => {
//   return (
//     <form className='px-4 my-3'>
//         <div className='w-full'>
//             <input type="text" className='border text-sm rounded-lg block w-full p-2.5 bg-gray-600 border-gray-400 text-white'
//              placeholder='Send a message' />
//              <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-3'>
//                 <BsSend/>
//              </button>
//         </div>
//     </form>
//   )
// }

// export default MessageInput

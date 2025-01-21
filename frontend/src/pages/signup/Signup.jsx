import React from 'react'
import GenderCheckbox from './GenderCheckbox'

const Signup = () => {
  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
            <h1 className='text-3xl font-semibold text-center text-gray-100 '>Signup
                <span className='text-blue-900'> Chat App</span>
            </h1>

            <form>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-800'>Full name</span>
                    </label>
                    <input type="text" placeholder='Your Name' className='w-full input input-bordered h-10' />
                </div>
                <div>
                    <label className='label p-2'>
                        <span className='text-base label-text text-gray-800'>Username</span>
                    </label>
                    <input type="text" placeholder='Enter UserName' className='w-full input input-bordered h-10' />
                </div>

                <div>
                    <label className='label'>
                        <span className='text-base label-text text-gray-800'>Password</span>
                    </label>  
                    <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />                  
                </div>
                <div>
                    <label className='label'>
                        <span className='text-base label-text text-gray-800'>Confirm Password</span>
                    </label>  
                    <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />                  
                </div>

                 <GenderCheckbox/>

                <a href="#" className='text-sm hover:underline hover:text-blue-900 mt-2 font-semibold inline-block'>Already have an account?</a>
                <div>
                    <button className='btn btn-block btn-sm mt-2 border-slate-600'>Signup</button>
                </div>
            </form>
        </div>
    </div>
  )
}






//startter code for signup

// const Signup = () => {
//     return (
//       <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
//           <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10'>
//               <h1 className='text-3xl font-semibold text-center text-gray-100 '>Signup
//                   <span className='text-blue-900'> Chat App</span>
//               </h1>
  
//               <form>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text text-gray-800'>Full name</span>
//                       </label>
//                       <input type="text" placeholder='Your Name' className='w-full input input-bordered h-10' />
//                   </div>
//                   <div>
//                       <label className='label p-2'>
//                           <span className='text-base label-text text-gray-800'>Username</span>
//                       </label>
//                       <input type="text" placeholder='Enter UserName' className='w-full input input-bordered h-10' />
//                   </div>
  
//                   <div>
//                       <label className='label'>
//                           <span className='text-base label-text text-gray-800'>Password</span>
//                       </label>  
//                       <input type="password" placeholder='Enter Password' className='w-full input input-bordered h-10' />                  
//                   </div>
//                   <div>
//                       <label className='label'>
//                           <span className='text-base label-text text-gray-800'>Confirm Password</span>
//                       </label>  
//                       <input type="password" placeholder='Confirm Password' className='w-full input input-bordered h-10' />                  
//                   </div>
  
//                    <GenderCheckbox/>
  
//                   <a href="#" className='text-sm hover:underline hover:text-blue-900 mt-2 font-semibold inline-block'>Already have an account?</a>
//                   <div>
//                       <button className='btn btn-block btn-sm mt-2 border-slate-600'>Signup</button>
//                   </div>
//               </form>
//           </div>
//       </div>
//     )
//   }

export default Signup
import React from 'react'
import {useSelector} from 'react-redux'
export default function Home() {
    const stateForRedux=useSelector((state)=>state.auth)
    console.log('stateForRedux: ', stateForRedux);
  return (
    <div className='p-5 text-2xl text-center text-yellow-300 bg-black'>Welcome Home and this is Redux Storage {JSON.stringify(stateForRedux)}</div>
  )
}
//  react hooks
// createContext & useContext

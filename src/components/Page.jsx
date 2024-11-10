import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tryEnter,tryPass,tryButton } from '../features/entery'
import "../App.css"

export const Page = () => {
const dispatch = useDispatch()
const{id,password}=useSelector((state)=>state.enter)


  return (
    <div className="container">
<h1>Login</h1>
<input placeholder='id'  value={id} onChange={(e)=>dispatch(tryEnter(e.target.value))} ></input>
<input placeholder='password'  value={password} onChange={(e)=>dispatch(tryPass(e.target.value))} ></input>
<button type='submit' onClick={()=>dispatch(tryButton())}>Send</button>



    </div>
  )
}




import { Button } from '@mui/base'
import React, { useState } from 'react'

const Addbooks = () => {
  var navigate = useNavigate();
const var[inp,setInput]=useState({BookName:" ",Author:" ", Language:" ",Genre:" ",Bookno:"" })

  const inputHandler =(e)=>{
    const {name,value}=e.target
  }

  const readHandler =()=>{
    console.group("clicked")
    axios.post("http://localhost:3007/addbooks",inp)
    .then((response)=>{
      alert("data added");
      
    })
    .catch(err=>console.log(err))
  }
  return (
    <div>
      <Textfield name='Bookanme' value={inp.BookName} Onchange={inputHandler}/>
      <Textfield name='Bookanme' value={inp.Author} Onchange={inputHandler}/>
      <Textfield name='Bookanme' value={inp.Language} Onchange={inputHandler}/>
      <Textfield name='Bookanme' value={inp.Genre} Onchange={inputHandler}/>
      <Textfield name='Bookanme' value={inp.Bookno} Onchange={inputHandler}/>
      <Button onClick={}{readHandler}>Add</Button>
    </div>
  )
}

export default Addbooks
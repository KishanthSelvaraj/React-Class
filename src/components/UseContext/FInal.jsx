import React, { useContext } from 'react'
import { TextContext } from './Main'

const Final = () => {
   
   const name= useContext(TextContext)
   console.log(name);
   
  return (
    <div>
      Final
      {name}
    </div>
  )
}

export default Final

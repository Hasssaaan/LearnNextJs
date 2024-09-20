'use client'
import Image from "next/image";
import { useState } from "react";
export default function Home() {
  //const counter =10;
  const [counter,setCounter]=useState(0)
  function handleMinus(){
    setCounter((counter)=>{
      if(counter===0)
        return counter
      else
      return counter-1
    }
  )
  }
  function handlePlus(){
    setCounter((counter)=>{
      if(counter>=10)
        return counter=counter-counter
      else
      return counter+1
    }

  )
  }
 
  return (
    <div className="border border-gray-300 rounded-md p-4 ">
      <button className="bg-blue-500 hover:bg-blue-700 border border-gray-300 p-5" onClick={handleMinus}>-</button>
      <span className="p-5">{counter}</span>
      <button className="bg-blue-500 hover:bg-blue-700 border border-gray-300 p-5" onClick={handlePlus}>+</button>
    </div>
  );
}

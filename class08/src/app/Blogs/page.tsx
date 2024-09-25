'use client'
import React,{useEffect,useState} from 'react'
import PostCard from '../PostCard/PostCard'
import Link from 'next/link'

export default function Blogs() {
    const [postData, setpostData] = useState([])
    useEffect(() => {
     getAllPosts()
        
    }, [])
    
    const getAllPosts=async()=>{
        const response =await fetch("https://jsonplaceholder.typicode.com/posts")
        const data=await response.json()
        console.log(data)
        setpostData(data)

    }
  return (
    <div className='flex flex-wrap m-5 justify-center'>
        {postData.map((item:any)=>{
    return (
        <Link href={`/Blogs/${item.id}`}><PostCard postData={item}/></Link>
    )
    })}</div>
  )
}

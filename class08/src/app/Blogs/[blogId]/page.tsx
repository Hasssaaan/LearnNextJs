'use client'
import React,{useEffect,useState} from 'react'
import Comments from '@/app/Components/Comments/page';
interface Post {
  body: string;
  id: number;
  title: string;
  userId: number;
}
export default function page({params}:any) {
  const [postData, setpostData] = useState<Post|null>(null)
  const [comments, setcomments] = useState([])
  useEffect(() => {
   getspecific()
  }, [])
  
  const getspecific=async()=>{
    const response=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogId}`)
    if(response.ok){
      const data = await response.json()
      setpostData(data)
    const commentsResponse=await fetch(`https://jsonplaceholder.typicode.com/posts/${params.blogIs}/comments`)
    const commentsData=await commentsResponse.json()
    setcomments(commentsData)
    }
    
  }
  return (
    <div>
      <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-60 m-4">
   
    {comments && comments.map(com=>{
      return (
      <Comments commentsData={com}/>
      )
    })}
    
  </div>
    </div>
  )
}

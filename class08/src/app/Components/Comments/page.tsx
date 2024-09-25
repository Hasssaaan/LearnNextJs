import React from 'react'

export default function Comments({commentsData}:any) {
    
  return (
    <div>
       <div>{commentsData.name}</div>
       <div>{commentsData.email}</div>
       <div>{commentsData.body}</div>
       
    </div>
    
  )
}

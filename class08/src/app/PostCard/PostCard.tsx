import React from 'react'

export default function PostCard(props:any) {
    const {postData}=props;
    console.log('post Data',postData)
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 w-60 m-4">
   <h1 className="text-3xl font-bold mt-4 text-stone-900">BLOG NO:- {postData.id}</h1>
    <h2 className="text-xl font-bold mt-4 text-stone-900">Title: {postData.title}</h2>
    <p className="text-lg text-gray-600 mt-2">Body: {postData.body}</p>

  </div>
  )
}

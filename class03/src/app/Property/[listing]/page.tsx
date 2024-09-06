import React from 'react'

export default function Listing({params}:any) {
    console.log("Params",params)
  return (
    <div>Listing Properties of {params.listing} {name}</div>
  )
}

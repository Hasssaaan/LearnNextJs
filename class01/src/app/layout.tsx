import React from 'react'

export default function layout( props : any) {
  console.log("Props ",props)
  return (
    <html lang="en">
      <body>
        Root layout
        {props.children}
      </body>
    </html>
  ) 
}

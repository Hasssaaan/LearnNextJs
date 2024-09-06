import Link from 'next/link'
import React from 'react'
import Button from '@/Component/Button'
export default function page() {
  return (
    <div>
    <Link href="/Home">Home</Link><br/>
    <Link href="/About">About</Link><br/>
    <Link href="/Contact">Contact Us</Link><br/>
    <Link href="/Property">Properties</Link><br/>
    <Link href="/Button">Button Page</Link>
    <Button></Button>
    </div>
  )
}

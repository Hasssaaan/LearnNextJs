import Link from 'next/link'
import React from 'react'

export default function TopNav() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <span className="text-lg font-bold text-white cursor-pointer">Blog App</span>
        </Link>
        <ul className="flex items-center space-x-4">
          <li>
            <Link href="/">
              <span className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">Home</span>
            </Link>
          </li>
          <li>
            <Link href="/Blogs">
              <span className="text-white hover:text-gray-300 transition duration-300 cursor-pointer">Blogs</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

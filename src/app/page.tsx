import Link from 'next/link'
import React from 'react'

export default function Home() {
  return (
    <div className='flex items-center justify-center min-h-screen'>
      <Link href={'employee/employeeList'}>
        <button type='button' className='border border-gray-400 rounded-lg font-medium px-3 py-1.5 mx-2'>
          view Employee List
        </button>
      </Link>
      <Link href={'employee/addemployee'}>
        <button type='button' className='border border-gray-400 rounded-lg font-medium px-3 py-1.5 mx-2'>
          Add Employee
        </button>
      </Link>
    </div>
  )
}

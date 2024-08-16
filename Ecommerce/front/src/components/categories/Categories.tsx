import Link from 'next/link'
import React from 'react'

const Categories = () => {
  return (
    <nav className='flex justify-evenly m-2'>
        <Link href='/categories/1'>Smartphones</Link>
        <Link href='/categories/2'>Tablets</Link>
        <Link href='/categories/3'>Smartwatches</Link>
        <Link href='/categories/4'>Laptops</Link>
        <Link href='/categories/5'>Headphones</Link>
    </nav>
  )
}

export default Categories
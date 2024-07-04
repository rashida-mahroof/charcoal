import Link from 'next/link'
import React from 'react'

function WishListButton({children}:any) {
  return (
    <Link href={''} className='text-[var(--on-primary)] bg-[var(--color-ash)] px-4 py-2 w-full hover:bg-[var(--color-charcoal)]'>
       {children}
    </Link>
  )
}

export default WishListButton
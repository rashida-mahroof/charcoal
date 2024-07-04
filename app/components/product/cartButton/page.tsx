import Link from 'next/link'
import React from 'react'

function CartButton({children}:any) {
  return (
    <Link href={''} className='text-[var(--on-primary)] bg-[var(--color-ember)] px-6 py-2 w-full hover:bg-[var(--color-flame)]'>
       {children}
    </Link>
  )
}

export default CartButton
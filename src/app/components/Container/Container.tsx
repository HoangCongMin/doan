import React, { ReactNode } from 'react'


interface  childrenProp{
    children: ReactNode
}

export default function Container({children}:childrenProp) {
  return (
    <div className='w-[80%] m-auto flex justify-between'>{children}</div>
  )
}

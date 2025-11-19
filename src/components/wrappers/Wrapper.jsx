import React from 'react'
import { cn } from '../../utils/axios/helperfunctions'

const Wrapper = ({children , className, ...rest}) => {
  return (
    <div className={cn('max-w-7xl mx-auto', className)} {...rest}>
      {children}
    </div>
  )
}

export default Wrapper

import { cn } from "../utils/axios/helperfunctions"

const Wrapper = ({children, className}) => {
  return (
    <div className={cn('max-w-[1300px] mx-auto p-5', className)}>
        {children}
    </div>
  )
}

export default Wrapper

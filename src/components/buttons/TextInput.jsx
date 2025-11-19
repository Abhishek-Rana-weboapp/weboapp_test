import { twMerge } from "tailwind-merge"

const TextInput = ({className, ...props}) => {
  return (
    <input className={twMerge("p-2 border w-full border-neutral-300 outline-none rounded-lg", className)} {...props}/>
  )
}

export default TextInput

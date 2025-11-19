import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../utils/axios/helperfunctions'
import { ChevronRight } from 'lucide-react'
const BreadCrumbs = ({containerClass}) => {
 const location = useLocation()
 const pathnames = location.pathname.split('/').filter((x) => x)
  return (
   <nav className={cn("bg-transparent text-white px-5 py-3 rounded-md", containerClass)}>
     <ol className="list-none p-0 flex items-center">
       <li className="flex items-center">
         <Link 
           to="/" 
           className="text-white hover:text-blue-800 underline"
         >
           Home
         </Link>
       </li>
       {pathnames.map((name, index) => {
         const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
         const isLast = index === pathnames.length - 1
         
         return (
           <li key={name} className="flex items-center">
             <span className="mx-2 text-gray-500"><ChevronRight size={30} color='white' /></span>
             {isLast ? (
               <span className="text-white/50 font-medium capitalize">
                 {name}
               </span>
             ) : (
               <Link
                 to={routeTo}
                 className="text-white hover:text-blue-800 capitalize underline"
               >
                 {name}
               </Link>
             )}
           </li>
         )
       })}
     </ol>
   </nav>
 )
}

export default BreadCrumbs
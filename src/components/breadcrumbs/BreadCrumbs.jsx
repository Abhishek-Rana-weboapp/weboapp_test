import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../utils/axios/helperfunctions'
import { ChevronRight, Home } from 'lucide-react'



const BreadCrumbs = ({containerClass, linkClass}) => {
 const location = useLocation()
 const pathnames = location.pathname.split('/').filter((x) => x)
  return (
   <nav className={cn("bg-transparent rounded-md", containerClass)}>
     <ol className="list-none p-0 flex items-center">
       <li className="flex items-center">
         <Link 
           to="/" 
           className={cn(" hover:text-blue-800 underline", linkClass)}
         >
           <Home size={18} />
         </Link>
       </li>
       {pathnames.map((name, index) => {
         const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
         const isLast = index === pathnames.length - 1
         
         return (
           <li key={name} className="flex items-center">
             <span className="mx-2"><ChevronRight size={15} color='black' /></span>
             {isLast ? (
               <span className={cn("font-medium capitalize text-sm", linkClass)}>
                 {name}
               </span>
             ) : (
               <Link
                 to={routeTo}
                 className={cn(" hover:text-blue-800 capitalize underline text-sm", linkClass)}
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
import { Link, useLocation } from 'react-router-dom'
import { cn } from '../../utils/axios/helperfunctions'
import { ChevronRight, Home } from 'lucide-react'



const BreadCrumbs = ({containerClass}) => {
 const location = useLocation()
 const pathnames = location.pathname.split('/').filter((x) => x)
  return (
   <nav className={cn("bg-transparent rounded-md", containerClass)}>
     <ol className="list-none p-0 flex items-center">
       <li className="flex items-center">
         <Link 
           to="/" 
           className=" hover:text-blue-800 underline"
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
               <span className=" font-medium capitalize text-sm">
                 {name}
               </span>
             ) : (
               <Link
                 to={routeTo}
                 className=" hover:text-blue-800 capitalize underline text-sm"
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
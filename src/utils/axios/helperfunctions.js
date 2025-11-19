
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
 
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}



export const desktopQuery = {
    query : "(min-width: 786px)"
}
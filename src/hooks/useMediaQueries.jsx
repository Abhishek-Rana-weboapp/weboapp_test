import { useMediaQuery } from 'react-responsive'

const useMediaQueries = () => {
    const isMobile = useMediaQuery({query : "(max-width : 576px)"})
    const isTab = useMediaQuery({query : "(min-width : 768px)"})
    const isDesktop = useMediaQuery({query : "(min-width : 990px)"})
  return {isMobile , isTab, isDesktop}
}

export default useMediaQueries

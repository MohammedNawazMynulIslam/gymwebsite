import {useState, useEffect} from 'react'



export const useMediaQuery = (query: string) => {
    const [matches, setMatches] = useState(false)
    useEffect(() => {
        const mediaQuery = window.matchMedia(query)
        if (mediaQuery.matches !== matches) {
            setMatches(mediaQuery.matches)
        }
        const listener = () => setMatches(mediaQuery.matches)
        window.addEventListener('resize', listener)
        return () => window.removeEventListener('resize', listener)

    }, [matches, query])

  return (
        matches
  )
}
import { useEffect, useState, useRef } from 'react'

export function useHeaderCollapse() {
  const [isCondensed, setIsCondensed] = useState(false)
  const headerRef = useRef(null)
  const rafRef = useRef(null)
  const debounceRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (debounceRef.current) clearTimeout(debounceRef.current)

      rafRef.current = requestAnimationFrame(() => {
        // Calculate 50% of the header's height as the threshold
        const headerHeight = headerRef.current?.offsetHeight || 0
        const threshold = headerHeight * 0.5
        const shouldCondense = window.scrollY > threshold

        debounceRef.current = setTimeout(() => {
          setIsCondensed(shouldCondense)
        }, 50)
      })
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (debounceRef.current) clearTimeout(debounceRef.current)
    }
  }, [])

  return { isCondensed, headerRef }
}

import { useEffect, useState, useRef } from 'react'

export function useHeaderCollapse(threshold = 120) {
  const [isCondensed, setIsCondensed] = useState(false)
  const rafRef = useRef(null)
  const debounceRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (debounceRef.current) clearTimeout(debounceRef.current)

      rafRef.current = requestAnimationFrame(() => {
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
  }, [threshold])

  return isCondensed
}

import { useLayoutEffect } from 'react'

function useBodyScrollLock(open) {
  useLayoutEffect(() => {
    if (open) {
      const originalOverflow = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = 'hidden'

      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [open])
}

export { useBodyScrollLock }

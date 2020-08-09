// const viewport = useBreakPoint()
// this is a hook which listens to viewport changes and returns true for screens less than
// 700px and false for screens greater than 700px
// it also returns the value of the viewport after every adjustment

import { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'
// const debounce = require('lodash/debounce')

// helper function to translate the size to boolean value
const helper = (arg: number | undefined) => {
  return arg
    ? () => {
        if (arg < 768) {
          return true
        } else {
          return false
        }
      }
    : undefined
}

// Hook to monitor viewport size
export function useBreakPoint() {
  //constant update of viewport size
  const [viewPortSize, setviewPortSize] = useState<number>(0)

  //defined viewport size (as per small or large)
  const [breakPoint, setbreakPoint] = useState<true | false | undefined>(
    undefined
  )

  useEffect(() => {
    setbreakPoint(helper(window.innerWidth))
    setviewPortSize(window.innerWidth)

    if (typeof window !== 'object') {
      return
    }

    const handleResize = () => {
      setbreakPoint(helper(window.innerWidth))
      setviewPortSize(window.innerWidth)
    }

    window.addEventListener('resize', debounce(handleResize, 500))

    return () => {
      window.removeEventListener('resize', debounce(handleResize, 500))
    }
  }, [])

  return [breakPoint, viewPortSize]
}

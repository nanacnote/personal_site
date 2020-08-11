// const viewport = useBreakPoint()
// this is a hook which listens to viewport changes and returns true for screens less than
// 700px and false for screens greater than 700px
// it also returns the value of the viewport after every adjustment

import { useState, useEffect } from 'react'
import debounce from 'lodash/debounce'
// const debounce = require('lodash/debounce')

// helperBoolean function to translate the size to boolean value
const helperBoolean = (arg: number | undefined) => {
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

// helper function to translate the size to string of xs sm md lg
const helperStandard = (arg: number) => {
  if (arg < 320) {
    return 'xs'
  } else if (arg >= 320 && arg < 720) {
    return 'sm'
  } else if (arg >= 720 && arg < 1024) {
    return 'md'
  } else if (arg >= 1024) {
    return 'lg'
  }
}

// Hook to monitor viewport size
export function useBreakPoint() {
  //constant update of viewport size
  const [viewPortSize, setviewPortSize] = useState<number>(0)

  //define viewport size as xs sm md lg
  const [viewPortSizeStandard, setviewPortSizeStandard] = useState<
    'xs' | 'sm' | 'md' | 'lg' | undefined
  >(undefined)

  //defined viewport size (as per small or large)
  const [breakPoint, setbreakPoint] = useState<true | false | undefined>(
    undefined
  )

  useEffect(() => {
    setbreakPoint(helperBoolean(window.innerWidth))
    setviewPortSizeStandard(helperStandard(window.innerWidth))
    setviewPortSize(window.innerWidth)

    if (typeof window !== 'object') {
      return
    }

    const handleResize = () => {
      setbreakPoint(helperBoolean(window.innerWidth))
      setviewPortSizeStandard(helperStandard(window.innerWidth))
      setviewPortSize(window.innerWidth)
    }

    window.addEventListener('resize', debounce(handleResize, 500))

    return () => {
      window.removeEventListener('resize', debounce(handleResize, 500))
    }
  }, [])

  return [breakPoint, viewPortSizeStandard, viewPortSize]
}

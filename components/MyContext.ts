import React from 'react'

type ContextProps = {
  landingStatus: boolean
  siderState: boolean
  currentViewport: boolean
  projectsHydrator: JSX.Element
  setLandingStatus: (params: boolean) => void
  setSiderState: (params: boolean) => void
  setProjectsHydrator: (params: JSX.Element) => void
}
const MyContext = React.createContext<Partial<ContextProps>>({})

export default MyContext

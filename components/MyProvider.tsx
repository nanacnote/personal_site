import { useState } from 'react'
import { MyContext } from '.'
import { useBreakPoint } from '../hooks'

export default function MyProvider(props: any) {
  //instantiate useBreakPoint hook
  const [currentViewport] = useBreakPoint()

  // all useState hooks
  const [landingStatus, setlandingStatus] = useState(true)
  const [siderState, setsiderState] = useState(false)
  const [projectsHydrator, setprojectsHydrator] = useState(
    <div className="text-center pb-5">
      <p>Hmm! seeing this text is a rear event &#x1f914;.</p>
      <p>You are not allowed to navigate to this page directly &#x1f937;.</p>
      <p>A user interaction is required to hydrate this page &#x1f4a7;.</p>
    </div>
  )

  return (
    <MyContext.Provider
      value={{
        landingStatus: landingStatus,
        siderState: siderState,
        currentViewport: currentViewport as boolean,
        projectsHydrator: projectsHydrator,
        setLandingStatus: (params) => setlandingStatus(params),
        setSiderState: (params) => setsiderState(params),
        setProjectsHydrator: (params) => setprojectsHydrator(params),
      }}
    >
      {props.children}
    </MyContext.Provider>
  )
}

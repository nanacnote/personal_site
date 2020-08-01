import React from 'react'

export const Pad: React.FC<{parentClass: string, childClass: string}> = ({...props}): JSX.Element => {
    return (
      <>
        <div className={`${props.parentClass} pad`}>
          <div className={props.childClass}/>
        </div>
      </>
    )
  }
  
  export default Pad
  
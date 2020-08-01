import React, { useEffect } from 'react'
import { gsap } from 'gsap'

export const Visualiser: React.FC<{active: boolean}> = ({...props}): JSX.Element => {
    
    useEffect(() => {
        //trigger for when pad is clicked
        if(props.active){
            gsap.timeline().to('.container1', {duration: 0.1, opacity: 1})
            .to('.container2', {duration: 0.1, opacity: 0.75})
            .to('.container3', {duration: 0.1, opacity: 0.5})
            .to('.container3', {duration: 0.1, opacity: 0.1})
            .to('.container2', {duration: 0.1, opacity: 0.1})
            .to('.container1', {duration: 0.1, opacity: 0.1})
        }
    })

  return (
    <>
    <div className="container3">
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
    </div>
    <div className="container2">
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
    </div>
    <div className="container1">
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
        <div className="visualiser"/>
    </div>
      <style jsx>{`
      .container1, .container2, .container3 {
          display: flex;
          margin-left: -10px;
          align-items: flex-start;
          justify-content: space-between;
          opacity: 0.1;
      }
        .visualiser{
            width: 17.5px;
            height: 10px;
            background: #29D9C2;
            border: solid 1px blue;
        }
      `}</style>
    </>
  )
}

export default Visualiser

import React, { Component } from 'react'
import styles from './ReactDrum.module.scss'

export class ReactDrum extends Component {
  render() {
    const pad = (number: number, color: Array<string>) => {
      let arr = []
      for (let i = 0; i < number; i++) {
        arr.push(i)
      }
      return arr.map((e,i) => (
        <div key={e} className={styles[color[i]]}>
          pad
        </div>
      ))
    }
    return (
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.device}>
            <div className={styles.screen}>screen</div>
            <div className={styles.wrapper}>
              <div className={styles.padContainer}>
                <div className={styles.padTop}>{pad(3, ['padRed', 'padGreen', 'padBlue'])}</div>
                <div className={styles.padBottom}>{pad(3, ['padYellow', 'padPurple', 'padOrange'])}</div>
              </div>
              <div className={styles.controlsContainer}>
                <div className={styles.volume}>
                  <svg
                    version="1.1"
                    id="volume-dial"
                    viewBox="0 0 60 60"
                    height="100%"
                    width="100%"
                    preserveAspectRatio="xMidYMin"
                  >
                    <linearGradient id="Gradient2" x1="1" x2="0" y1="0" y2="0">
                        <stop offset="0%" stop-color="firebrick"/>
                        <stop offset="100%" stop-color="green"/>
                    </linearGradient>
                    <path
                      style={{
                        fill: 'none',
                        stroke: 'url(#Gradient2)',
                        strokeWidth: 4,
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                      }}
                      d="M1,36.5c0-16.016,12.984-29,29-29s29,12.984,29,29"
                    />
                    <circle
                      style={{ fill: '#556080' }}
                      cx="30"
                      cy="37.5"
                      r="22.5"
                    />
                    <line
                      style={{
                        fill: 'none',
                        stroke: '#7383BF',
                        strokeWidth: 3,
                        strokeLinecap: 'round',
                        strokeMiterlimit: 10,
                      }}
                      x1="10"
                      y1="37.5"
                      x2="30"
                      y2="37.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ReactDrum

import React, { PureComponent } from 'react'
import Head from 'next/head'
import { VolumeDial, Visualiser, Pad, volumeControls, padControls, } from './'
import styles from './ReactDrum.module.scss'

type TProps = {}
type TState = {
    volumeLevel: number
    padActive: boolean
}
export class ReactDrum extends PureComponent<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
        volumeLevel: 19,
        padActive: false,
    }
  }

  componentDidMount() {
    const volumeC = volumeControls(this)
    const padC = padControls(this)
  }
  componentWillUpdate(){
    // console.log(this.state.padActive)
  }

  render() {
    return (
    <>
    <Head>
        <script src="https://code.createjs.com/1.0.0/soundjs.min.js"></script>
    </Head>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.device}>
            <div className={styles.screen}>
            <div className={styles.screenSection}>
                <div className={styles.screenSectionHeader}>Visualiser</div>
                    <div className={styles.screenSectionBody}>
                        <Visualiser active={this.state.padActive}/>
                    </div>
                </div>
                <div className={styles.screenSection}>
                    <div className={styles.screenSectionHeader}>Instrument</div>
                    <div className={styles.screenSectionBody}></div>
                </div>
                <div className={styles.screenSection}>
                    <div className={styles.screenSectionHeader}>Volume</div>
                    <div className={styles.screenSectionBody}>
                        {this.state.volumeLevel}
                    </div>
                </div>
            </div>
            <div className={styles.wrapper}>
              <div className={styles.padContainer}>
                <div className={styles.padTop}>
                  <Pad parentClass={styles.padRed} childClass={styles.padLight}/>
                  <Pad parentClass={styles.padGreen} childClass={styles.padLight}/>
                  <Pad parentClass={styles.padBlue} childClass={styles.padLight}/>
                </div>
                <div className={styles.padBottom}>
                  <Pad parentClass={styles.padYellow} childClass={styles.padLight}/>
                  <Pad parentClass={styles.padPurple} childClass={styles.padLight}/>
                  <Pad parentClass={styles.padOrange} childClass={styles.padLight}/>
                </div>
              </div>
              <div className={styles.controlsContainer}>
                <div className={styles.instruments}>
                    <div className={styles.instrumentsSection}>
                        <div className={styles.instrumentsSectionItem}/>
                        <div className={styles.instrumentsSectionItem}/>
                    </div>
                    <div className={styles.instrumentsSection}>
                        <div className={styles.instrumentsSectionItem}/>
                        <div className={styles.instrumentsSectionItem}/>
                    </div>
                </div>
                <div className={styles.volume}>
                    <VolumeDial />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
}
export default ReactDrum

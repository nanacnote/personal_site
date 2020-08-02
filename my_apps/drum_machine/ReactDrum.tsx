import React, { PureComponent } from 'react'
import {
  Instruments,
  instrumentsControls,
  VolumeDial,
  volumeDialControls,
  Pad,
  padControls,
  Visualiser,
} from './'
import styles from './ReactDrum.module.scss'

type TProps = {}
type TState = {
  volumeLevel: number
  padActive: {
    status: boolean
    index: number
  }
  instrumentActive: string
  allSoundKits: object
}
export class ReactDrum extends PureComponent<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
      volumeLevel: 19,
      padActive: {
        status: false,
        index: undefined,
      },
      instrumentActive: 'non selected',
      allSoundKits: undefined,
    }
  }

  componentDidMount() {
    instrumentsControls(this)
    volumeDialControls(this)
    padControls(this)
  }

  componentDidUpdate(prevState: TState) {
    if (
      this.state.allSoundKits &&
      this.state.instrumentActive !== 'non selected' &&
      this.state.padActive.index
    ) {
      this.state.allSoundKits[this.state.instrumentActive]?.play(
        Object.keys(
          this.state.allSoundKits[this.state.instrumentActive]._sprite
        )[this.state.padActive.index - 1]
      )
    }
  }

  render() {
    return (
      <>
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.device}>
              <div className={styles.screen}>
                <div className={styles.screenSection}>
                  <div className={styles.screenSectionHeader}>Visualiser</div>
                  <div className={styles.screenSectionBody}>
                    <Visualiser active={this.state.padActive.status} />
                  </div>
                </div>
                <div className={styles.screenSection}>
                  <div className={styles.screenSectionHeader}>Instrument</div>
                  <div className={styles.screenSectionBody}>
                    {this.state.instrumentActive.toLocaleUpperCase()}
                  </div>
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
                    <Pad
                      parentClass={styles.padRed}
                      childClass={styles.padLight}
                    />
                    <Pad
                      parentClass={styles.padGreen}
                      childClass={styles.padLight}
                    />
                    <Pad
                      parentClass={styles.padBlue}
                      childClass={styles.padLight}
                    />
                  </div>
                  <div className={styles.padBottom}>
                    <Pad
                      parentClass={styles.padYellow}
                      childClass={styles.padLight}
                    />
                    <Pad
                      parentClass={styles.padPurple}
                      childClass={styles.padLight}
                    />
                    <Pad
                      parentClass={styles.padOrange}
                      childClass={styles.padLight}
                    />
                  </div>
                </div>
                <div className={styles.controlsContainer}>
                  <div className={styles.instruments}>
                    <div className={styles.instrumentsSelector}>
                      <Instruments type="drums" />
                      <Instruments type="synth" />
                    </div>
                    <div className={styles.instrumentsSelector}>
                      <Instruments type="empty" />
                      <Instruments type="empty" />
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

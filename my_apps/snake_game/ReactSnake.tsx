import React, { Component } from 'react'
import { Renderer } from './'
import styles from './ReactSnake.module.scss'

/**
 * TS declaration for props on ReactSnake module
 */
type TProps = {
  input: {
    io: boolean
    gameCycle: 'Start' | 'Pause' | 'Resume' | 'Stop' | 'Restart'
  }
}

/**
 * typings declaration for state on ReactSnake module
 */
type TState = {
  directions: 'Up' | 'Down' | 'Right' | 'Left'
  scoreBoard: {}
}

export class ReactSnake extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
      directions: undefined,
      scoreBoard: {},
    }
    this.keyHandler = this.keyHandler.bind(this)
  }
  //set component global properties
  static defaultProps: TProps // setting smart default props
  private canvasRef: HTMLCanvasElement // variable for canvas ref
  private canvas: HTMLCanvasElement // variable for canvas ref
  private ctx: CanvasRenderingContext2D // variable for canvas contex
  private renderer: Renderer // variable for game renderer instance

  private dataFetch: NodeJS.Timeout // variable for getting scoreboard data

  //Event listner to handle key presses by setting state to pressed key
  private keyHandler(event: KeyboardEvent) {
    const direction = event.key.replace('Arrow', '')
    if (['Up', 'Down', 'Right', 'Left'].includes(direction)) {
      this.setState({
        directions: direction as TState['directions'],
      })
    }
    // event.stopPropagation()
    event.preventDefault()
  }

  componentDidMount() {
    this.dataFetch = setInterval(() => {
      // get scoreboard output props from renderer and assign to scoreBoard state
      this.setState({ scoreBoard: this.renderer.getProps() })
    }, 1000)

    let touchListX = []
    let touchListY = []
    this.canvasRef.addEventListener(
      'touchmove',
      (event) => {
        touchListX.push(event.changedTouches.item(0).clientX)
        touchListY.push(event.changedTouches.item(0).clientY)
      },
      false
    )
    this.canvasRef.addEventListener(
      'touchend',
      (event) => {
        if (
          touchListX[touchListX.length - 1] - touchListX[0] >
            touchListY[touchListY.length - 1] - touchListY[0] &&
          touchListX[touchListX.length - 1] - touchListX[0] > 0
        ) {
          console.log('Right')
        } else {
          console.log('Left')
        }
      },
      false
    )
  }

  //starts a new game
  componentDidUpdate(prevProps: TProps) {
    if (prevProps.input.io !== this.props.input.io && this.props.input.io) {
      //instatiate canvas and context
      this.canvas = this.canvasRef
      this.ctx = this.canvasRef.getContext('2d')
      //instantiate new renderer
      this.renderer = new Renderer({
        canvas: this.canvas,
        ctx: this.ctx,
        scale: 20,
      })
    }

    if (
      prevProps.input.gameCycle !== 'Start' &&
      this.props.input.gameCycle === 'Start'
    ) {
      // attach key press listner
      this.canvas.focus()
      this.canvas.addEventListener('keydown', this.keyHandler)
      // start renderer again
      this.renderer.start()
    }

    if (
      prevProps.input.gameCycle !== 'Pause' &&
      this.props.input.gameCycle === 'Pause'
    ) {
      // remove key press event listner
      this.canvas.removeEventListener('keydown', this.keyHandler)
      // pause renderer
      this.renderer.pause()
    }

    if (
      prevProps.input.gameCycle !== 'Resume' &&
      this.props.input.gameCycle === 'Resume'
    ) {
      // remove key press event listner
      this.canvas.focus()
      this.canvas.addEventListener('keydown', this.keyHandler)
      // resume renderer
      this.renderer.resume()
    }

    if (
      prevProps.input.gameCycle !== 'Restart' &&
      this.props.input.gameCycle === 'Restart'
    ) {
      // remove key press event listner
      this.canvas.removeEventListener('keydown', this.keyHandler)
      this.renderer.stop()
      //instantiate new renderer
      this.renderer = new Renderer({
        canvas: this.canvas,
        ctx: this.ctx,
        scale: 20,
      })
      // attach key press listner
      this.canvas.focus()
      this.canvas.addEventListener('keydown', this.keyHandler)
      // start renderer again
      this.renderer.start()
    }

    // set user input props for the game renderer
    this.renderer.setProps({
      input: {
        directions: this.state.directions,
      },
    })
  }

  //stop game
  componentWillUnmount() {
    // remove key press event listner
    this.canvas.removeEventListener('keydown', this.keyHandler)
    this.renderer.stop()
    //stop fetching score board data
    clearInterval(this.dataFetch)
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.canvas}>
          <canvas
            className={styles.modalCanvas}
            ref={(div) => (this.canvasRef = div)}
            tabIndex={0}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.scoreboard}>
          {Object.entries(this.state.scoreBoard).map((e, i) =>
            i !== 0 ? (
              <div key={e[0]}>
                <div>
                  <b>{e[0].replace('_', ' ').toLocaleUpperCase()}</b>
                </div>
                <div>{e[1]}</div>
              </div>
            ) : null
          )}
        </div>
      </div>
    )
  }
}
export default ReactSnake

ReactSnake.defaultProps = {
  input: {
    io: false,
    gameCycle: 'Stop',
  },
}

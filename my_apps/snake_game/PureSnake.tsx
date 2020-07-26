import React, { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Stage, { TInput } from './Stage'
import { FaPlayCircle, FaPauseCircle, FaGithub } from 'react-icons/fa'

/**
 * typings declaration for props on PureSnake module
 */
type TProps = {}

/**
 * typings declaration for state on PureSnake module
 */
type TState = {
    gameCycle: 'Play' | 'Pause'
  directions: TInput['directions']
}

export class PureSnake extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
        gameCycle: 'Play',
      directions: undefined,
    }
    this.keyHandler = this.keyHandler.bind(this)
    this.playHandler = this.playHandler.bind(this)
  }

  //set component global variables
  private canvasRef: HTMLCanvasElement // variable for canvas ref
  private renderer // variable for renderer

  //starts a new game
  private playHandler(event: React.MouseEvent) {
    if( this.state.gameCycle === 'Play' ){
        //set state value for game lifecyle 
        this.setState({
            gameCycle: 'Pause'
        })
        //instatiate canvas context
        const canvas = this.canvasRef
        const ctx = canvas.getContext('2d')
    
        //initialise game enivronment variables
        //scale the size in pixels
        const scale = 20
    
        // attach key press listner
        this.canvasRef.focus()
        this.canvasRef.addEventListener('keydown', this.keyHandler)
    
        //instantiate new stage
        const stage = new Stage({
          canvas: canvas,
          ctx: ctx,
          scale: scale,
        })
    
        //create renderer function to control the game state
        this.renderer = setInterval(() => {
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          stage.start({
            directions: this.state.directions,
          })
        }, 250)
    }
  }

  //Event listner to handle key presses by setting state to pressed key
  private keyHandler(event: KeyboardEvent) {
    const direction = event.key.replace('Arrow', '')
    if (['Up', 'Down', 'Right', 'Left'].includes(direction)) {
      this.setState({
        directions: direction as TState['directions'],
      })
    }
  }

  componentWillUnmount() {
    // remove key press event listner
    this.canvasRef.removeEventListener('keydown', this.keyHandler)

    // stop game
    clearInterval(this.renderer)
  }

  render() {
    return (
      <div>
        <Container fluid>
          <Row>
            <Col xs={12} xl={4}>
              <div className="d-flex justify-content-center align-items-center h-100">
                <div>
                  <div>
                    <h5>
                      <strong>a simple snake game</strong>
                    </h5>
                  </div>

                  <hr />

                  <div>
                    <div className="mb-5">
                      A snake game implemented with HTML5 and PureJS. No
                      dependecies.
                    </div>
                    <div>
                      <a href="https://github.com/nanacnote/personal_site/tree/master/my_apps/snake_game" target="_blank">
                        <div
                          className="py-1 my-2 position-relative clickable-item text-center text-primary bg-white border border-primary rounded"
                        >
                          Source Code <FaGithub />
                        </div>
                      </a>
                      <div
                        className="h4 py-1 my-2 position-relative clickable-item text-center text-success bg-white border border-success rounded"
                        onClick={this.playHandler}
                      >
                        {this.state.gameCycle} 
                        {
                            this.state.gameCycle === 'Play'? <FaPlayCircle /> :
                            this.state.gameCycle === 'Pause'? <FaPauseCircle />:
                            null
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col>
              <div>
                <canvas
                  className="modal-canvas"
                  ref={(div) => (this.canvasRef = div)}
                    tabIndex={1}
                  width="800"
                  height="400"
                  style={{ background: 'lightgrey' }}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
export default PureSnake

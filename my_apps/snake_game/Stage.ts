import Snake from './Snake'
import Food from './Food'

/**
 * typings declaration for Stage module
 */
export type TStage = {
  params: {
    canvas: HTMLCanvasElement
    ctx: CanvasRenderingContext2D,
    scale: number
  }
  props: {
    xSnake: number
    ySnake: number
    xFood: number
    yFood: number
    curKey: string
    prevKey: string
  }
}
export type TInput = {
  directions: 'Up' | 'Down' | 'Right' | 'Left'
}

/**
 * Create a new stage object which will accept assets and create interactive world for them.
 */
export default class Stage {
  /**
   * @param canvas - The dom canvas element the context is acting on
   * @param ctx - canvas context currently in use
   * @param scale - the grid size in pixels
   * @example
   *      const snake = new Stage({
   *          canvas: 'HTMLCanvasElemnt',
   *          ctx: 'CanvasRenderingContext2D',
   *          scale: 'number',
   *      })
   */
  constructor(params: TStage['params']) {
    this.params.canvas = params.canvas
    this.params.ctx = params.ctx
    this.params.scale = params.scale

    //instantiate new snake
    this.instance.snake = new Snake({
      ctx: this.params.ctx,
      scale: this.params.scale,
    })
    this.instance.snake.setProps({ x: 0, y: 0 })

    //instantiate new food
    this.instance.food = new Food({
      canvas: this.params.canvas,
      ctx: this.params.ctx,
      scale: this.params.scale,
    })
    this.instance.food.setProps({ x: 0, y: 0 })
  }
  /**
   * smart default / initialiser values for params of the snake class set to an object named param
   */
  private params: TStage['params'] = {
    canvas: undefined,
    ctx: undefined,
    scale: undefined,
  }
  /**
   * initialises asset require to run game
   */
  private instance = {
    snake: undefined,
    food: undefined,
  }
  //get the current position of x, y and use for subsequent logic
  public props: TStage['props'] = {
    xSnake: undefined,
    ySnake: undefined,
    xFood: undefined,
    yFood: undefined,
    curKey: undefined,
    prevKey: undefined,
  }

  /**
   * @private accepts keyboard input and directs the snake accordingly
   * @param string
   */
  private input(param: TInput['directions']) {
    //key press regulator
    const controls = [
      { key: 'Up', ops: 'Down' },
      { key: 'Down', ops: 'Up' },
      { key: 'Right', ops: 'Left' },
      { key: 'Left', ops: 'Right' },
    ]
    //set current direction
    this.props.curKey = param
    controls.map((e) => {
      if (this.props.curKey === e.key && this.props.prevKey !== e.ops) {
        this.instance.snake.setProps({ key: this.props.curKey })
        //set previous direction
        this.props.prevKey = param
      }
    })
  }

  /**
   * @private
   * method to monitor assets interaction with boundaries of stage.
   * Detects when snake hits a boundary and brings it back into canvas on opposite plane
   */
  private boundaryInteraction() {
    //create aliases
    const canvas = this.params.canvas
    const snake = this.instance.snake

    //update the stage component with current position of the snake
    this.props.xSnake = this.instance.snake.getProps('x') as number
    this.props.ySnake = this.instance.snake.getProps('y') as number

    //determining boundary collision
    if (this.props.xSnake === canvas.width) {
      snake.setProps({ x: 0 })
    }
    if (this.props.xSnake < 0) {
      snake.setProps({ x: canvas.width })
    }
    if (this.props.ySnake === canvas.height) {
      snake.setProps({ y: 0 })
    }
    if (this.props.ySnake < 0) {
      snake.setProps({ y: canvas.height })
    }
  }

  /**
   * @private method for listening for when snake eats food
   */
  private foodInteraction() {
    //create aliases
    const food = this.instance.food
    const snake = this.instance.snake

    //update the stage component with current position of the food
    this.props.xFood = this.instance.food.getProps('x') as number
    this.props.yFood = this.instance.food.getProps('y') as number

    if (
      this.props.xFood === this.props.xSnake &&
      this.props.yFood === this.props.ySnake
    ) {
      food.setProps({ empty: true })
      snake.setProps({ addTail: true })
    } else {
      food.setProps({ empty: false })
      snake.setProps({ addTail: false })
    }
  }

  /**
   * @public starts the game
   * @param keyboardEvent
   */
  public start(param: TInput) {
    this.input(param.directions)
    this.boundaryInteraction()
    this.foodInteraction()
    this.instance.snake.update()
    this.instance.food.update()
  }
}

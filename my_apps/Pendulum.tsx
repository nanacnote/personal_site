import React, { Component } from 'react'
import Matter from 'matter-js'

// typings declaration
type TProps = {}

type TState = {
  Mbox: Matter.Body
  roof: Matter.Body
  ground: Matter.Body
  leftWall: Matter.Body
  rightWall: Matter.Body
}

export class Pendulum extends Component<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
      Mbox: this.Bodies.rectangle(400, 30, 60, 60),
      roof: this.Bodies.rectangle(400, 0, 810, 20, { isStatic: true }),
      ground: this.Bodies.rectangle(400, 400, 810, 20, { isStatic: true }),
      leftWall: this.Bodies.rectangle(0, 200, 20, 410, { isStatic: true }),
      rightWall: this.Bodies.rectangle(800, 200, 20, 410, { isStatic: true }),
    }
  }
  // ref for canvas wrapper
  private myRef: HTMLCanvasElement

  // module aliases
  private Engine = Matter.Engine
  private Render = Matter.Render
  private World = Matter.World
  private Body = Matter.Body
  private Bodies = Matter.Bodies
  private Composite = Matter.Composite
  private Composites = Matter.Composites
  private Constraint = Matter.Constraint

  // create an engine
  private engine_m = this.Engine.create()

  componentDidMount() {
    // create a renderer
    const render_m = this.Render.create({
      canvas: this.myRef,
      engine: this.engine_m,
      options: {
        width: 800,
        height: 400,
        background: 'transparent',
        wireframes: false,
      },
    })

    // add ground to the world
    this.World.add(this.engine_m.world, [
      this.state.Mbox,
      this.state.roof,
      this.state.ground,
      this.state.leftWall,
      this.state.rightWall,
    ])

    // run the engine
    this.Engine.run(this.engine_m)

    // run the renderer
    this.Render.run(render_m)
  }

  componentDidUpdate() {
    this.Engine.clear(this.engine_m)
  }

  render() {
    // creates a cirlce body with specified phyical properties
    const newMball = () => {
      let ball = this.Bodies.circle(400, 30, 30, {
        render: {
          sprite: {
            texture:
              'https://opengameart.org/sites/default/files/styles/medium/public/SoccerBall_0.png',
            xScale: 0.6,
            yScale: 0.6,
          },
        },
        restitution: 1,
        frictionAir: 0.001,
      })
      return ball
    }
    // creates a square body with specified phyical properties
    const newMBox = (x=400, y=30, width=60, height=60) => {
      let box = this.Bodies.rectangle(x, y, width, height)
      box.frictionAir = 0.001
      return box
    }

    // creates a car body with specified phyical properties
    const newMCar = () => {
      let car = this.Composites.car(400, 30, 175, 20, 30);
      return car
    }

    // creates a chain body with specified phyical properties
    const newMChain = () => {
      let boxes = this.Composites.stack(400, 30, 3, 1, 10, 0, function(x, y) {
        return newMBox(x, y, 50, 40);
      })
      let chain = this.Composites.chain(boxes, 0.5, 0, -0.5, 0, { stiffness: 1});
      return chain
    }

    const foo = () => {
      const constraint = this.Constraint.create({
        bodyA: this.state.Mbox,
        bodyB: this.state.roof,
        length: 100,
        stiffness: 1,
        render: {
          strokeStyle: 'grey',
        }
      });
      this.World.add(this.engine_m.world, constraint)
      // add bodies to the world (2nd params)
      // this.World.add(this.engine_m.world, newMBox())

      // //2 params keepStatic prevents clear of static assets
      // this.World.clear(this.engine_m.world, true)

      // // rotate all bodies around point (3rd params) angle in rad (2nd params)
      // this.Composite.rotate( this.engine_m.world,  Math.PI/4, {x: 400, y: 300})

      // //control the size of a single body
      // this.Body.scale( this.state.Mball, 1.5, 1.5 );

      // //controls the position of a single body
      // this.Body.translate( this.state.Mbox, {x: -10, y: 20} );

      // // applies linear and angular velocities respectively
      // this.Body.setVelocity( this.state.Mbox, {x: -5, y: 0});
      // this.Body.setAngularVelocity( this.state.Mbox, Math.PI/6);

      // // applies force to body
      // this.Body.applyForce(
      //   this.state.Mbox,
      //   {
      //     x: this.state.Mbox.position.x,
      //     y: this.state.Mbox.position.y,
      //   },
      //   {
      //     x: 0,
      //     y: -0.05,
      //   }
      // )
    }

    return (
      <div className="d-flex justify-content-center align-items-center overflow-hidden">
        <canvas className="modal-canvas" ref={(div) => (this.myRef = div)} onClick={foo} />
      </div>
    )
  }
}

export default Pendulum

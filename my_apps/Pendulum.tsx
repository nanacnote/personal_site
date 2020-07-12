import React, { Component } from 'react'
import Matter from 'matter-js'

// typings declaration
type TProps = {}

type TState = {
  Mbox: Matter.Body
  ground: Matter.Body
  leftWall: Matter.Body
  rightWall: Matter.Body
}

export class Pendulum extends React.Component<TProps, TState> {
  constructor(props: TProps) {
    super(props)
    this.state = {
      Mbox: this.Bodies.rectangle(400, 30, 60, 60),
      ground: this.Bodies.rectangle(400, 440, 400, 20, { isStatic: true }),
      leftWall: this.Bodies.rectangle(200, 300, 20, 300, { isStatic: true }),
      rightWall: this.Bodies.rectangle(600, 300, 20, 300, { isStatic: true }),
    }
  }
  // ref for canvas wrapper
  private myRef: HTMLDivElement

  // module aliases
  private Engine = Matter.Engine
  private Render = Matter.Render
  private World = Matter.World
  private Body = Matter.Body
  private Bodies = Matter.Bodies
  private Composite = Matter.Composite

  // create an engine
  private engine_m = this.Engine.create()

  componentDidMount() {
    // create a ground, walls, and a single ball body
    // const Mball = this.Bodies.circle(400, 30, 30, {restitution: 1, frictionAir: 0.001});
    // const ground = this.Bodies.rectangle(400, 440, 400, 20, { isStatic: true });
    // const leftWall = this.Bodies.rectangle(200, 300, 20, 300, { isStatic: true });
    // const rightWall = this.Bodies.rectangle(600, 300, 20, 300, { isStatic: true });

    // create a renderer
    const render_m = this.Render.create({
      element: this.myRef,
      engine: this.engine_m,
      options: {
        // width: 800,
        // height: 600,
        background: 'transparent',
        wireframes: false,
      },
    })

    // add ground to the world
    this.World.add(this.engine_m.world, [
      this.state.Mbox,
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
    // creates a cirlce body with specified phyical properties
    const newMbox = () => {
      let box = this.Bodies.rectangle(400, 30, 60, 60)
      box.frictionAir = 0.001
      return box
    }

    const foo = () => {
    //   // add bodies to the world (2nd params)
    //   this.World.add(this.engine_m.world, newMball())

      // //2 params keepStatic prevents clear of static assets
      // this.World.clear(this.engine_m.world, true)

      // // rotate all bodies around point (3rd params) angle in rad (2nd params)
      // this.Composite.rotate( this.engine_m.world,  Math.PI/4, {x: 400, y: 300})

      // //control the size of a single body
      // this.Body.scale( this.state.Mball, 1.5, 1.5 );

      // //controls the position of a single body
      // this.Body.translate( this.state.Mbox, {x: -10, y: 20} );

      // // applies linear and angular velocities respectively
    //   this.Body.setVelocity( this.state.Mbox, {x: -5, y: 0});
      // this.Body.setAngularVelocity( this.state.Mbox, Math.PI/6);

      this.Body.applyForce(
        this.state.Mbox,
        {
          x: this.state.Mbox.position.x,
          y: this.state.Mbox.position.y,
        },
        {
          x: 0,
          y: -0.05,
        }
      )
    }

    return (
      <div className="d-flex justify-content-center align-items-center overflow-hidden">
        <div className="" ref={(div) => (this.myRef = div)} onClick={foo} />
      </div>
    )
  }
}

export default Pendulum

const Matter = require('matter-js')

export const BallPhysics = (arg: string) => {
  // module aliases
  const Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies

  // create an engine
  const engine = Engine.create()

  // create a renderer
  const render = Render.create({
    options: {
      height: 275,
      width: 800,
    },
    element: document.getElementById(arg),
    engine: engine,
  })

  // create two boxes and a ground
  const boxA = Bodies.rectangle(40, 20, 80, 80)
  const boxB = Bodies.rectangle(45, 50, 80, 80)
  const ground = Bodies.rectangle(0, 200, 275, 60, { isStatic: true })

  // add all of the bodies to the world
  World.add(engine.world, [boxA, boxB, ground])

  // run the engine
  Engine.run(engine)

  // run the renderer
  Render.run(render)
}

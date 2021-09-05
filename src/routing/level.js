const level = (app, container, state, Images, root) => root.router.add(/^Level\/(.*[0-9])$/, (p1) => {
  let context = {
    // level: parseInt(p1, 10),
    level: p1,


  }
  root.init.Level(app, container, state, Images, context)
})

export default level
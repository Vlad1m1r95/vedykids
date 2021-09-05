const category = (app, container, state, imagesCategory, category, root) => root.router.add(/^Level\/(.*)\/(.*)$/, (p1, p2) => {


  let context = {
    // history: root.router.historyState('Level/1/fruit'),

    level: parseInt(p1, 10),
    category: p2,
  }
  root.init.Category(app, container, state, imagesCategory, category, context)
})

export default category
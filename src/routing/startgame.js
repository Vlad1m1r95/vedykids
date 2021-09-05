const startGame = (state, root) => root.router.add(/^StartGame$/g, () => root.init.GameMenu(state))

export default startGame
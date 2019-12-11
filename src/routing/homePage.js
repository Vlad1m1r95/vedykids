const homePage = (app, preloader, root) => root.router.add(/^HomePage$/g, () => root.init.HomePage(app, preloader))

export default homePage
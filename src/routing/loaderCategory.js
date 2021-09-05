const loaderCategory = (context, category, timer, root) => root.router.add(/^LoaderCategory$/g, () => root.init.LoaderCategory(context, category, timer))

export default loaderCategory
const setting = (container, root) => root.router.add(/^Setting$/g, () => root.init.Setting(container))

export default setting
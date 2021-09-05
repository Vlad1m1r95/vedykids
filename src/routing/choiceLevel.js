const choiceLevel = (app, container, colContent, state, root) => root.router.add(/^ChoiceLevel$/g, () => root.init.ChoiceLevel(app, container, colContent, state))

export default choiceLevel
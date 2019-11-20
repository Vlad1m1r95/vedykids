
import { RouterBase } from './Router'
import   init  from './../initialize/init'




// Routers path

 export const StartGame   = () => RouterBase.add(/^StartGame$/g , init.StartGame)

 export const ChoiceLevel = (app, container, colContent) => RouterBase.add(/^ChoiceLevel$/g , () => init.ChoiceLevel(app, container, colContent))

 export const Level1 = (app, container, colContent) => RouterBase.add(/^Level1$/g , () => init.Level1(app, container))

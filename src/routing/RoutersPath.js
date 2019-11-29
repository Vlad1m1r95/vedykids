
import { RouterBase } from './Router'
import   init  from './../initialize/init'




// Routers path

 export const StartGame   = () => RouterBase.add(/^StartGame$/g , init.GameMenu)

 export const ChoiceLevel = (app, container, colContent, LANG) => RouterBase.add(/^ChoiceLevel$/g , () => init.ChoiceLevel(app, container, colContent, LANG))

 export const Level1 = (app, container, LANG) => RouterBase.add(/^Level1$/g , () => init.Level1(app, container, LANG))
 
 export const FruitL1 = (app, container, LANG) => RouterBase.add(/^FruitL1$/g , () => init.FruitL1(app, container, LANG))

 export const Setting = (container) => RouterBase.add(/^Setting$/g, () => init.Setting(container))
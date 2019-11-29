import {importAllHash} from './../helpers/importAll.helper'
import {importAll} from './../helpers/importAll.helper'
import MODE from './../lang/lang'
import initGameMenu from './init.GameMenu'
import initChoiceLevel from './init.ChoiceLevel'
import initLevel1 from './init.Level1'
import initFruitL1 from './init.FruitLevel1'
import initSetting from './init.setting'




// let componentsarr = []
// let ComponentsArray =  importAllHash(require.context('./../components/', true, /\.js$/), componentsarr)


// let hashComponent = Object.create(null)

// ComponentsArray.forEach((component ,i) => {
  
//   if(component.default !=  null || undefined){
//     let keycomponent =  component.default.name
//     hashComponent[keycomponent] = component.default
    
//     // console.log(component)

//   }
// })
// let Components = hashComponent




//Prototype add Preloader


///init

const init = {
  GameMenu :  () => initGameMenu(),
  ChoiceLevel : (app, container, colContent) => initChoiceLevel(app, container, colContent),
  Level1  : (app, container, ) => initLevel1(app, container),
  FruitL1 : (app, mainContent, ) => initFruitL1(app, mainContent),
  Setting : (container) => initSetting(container)
}

export default init
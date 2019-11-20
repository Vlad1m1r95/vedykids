import {importAllHash} from './../helpers/importAll.helper'



//! Audio
import { voises } from './../voice/ru/script/voices'
import Audio from './../music/mp3/lion-cub-and-turtle.mp3'
//? gif
import  gif1 from './../img/Spinner-Preloader/dance_fruit_big.gif'




let componentsarr = []
let ComponentsArray =  importAllHash(require.context('./../components/', true, /\.js$/), componentsarr)

let hashComponent = Object.create(null)

ComponentsArray.forEach((component ,i) => {
  
  if(component.default !=  null || undefined){
    let keycomponent =  component.default.name
    hashComponent[keycomponent] = component.default
    
    // console.log(component)

  }
})
let Components = hashComponent
console.log(Components)


// console.log(Components.PlayAudio)

// console.log(ComponentsArray[0].default.name)

//    <--START GAME SCREEN-->
 const initStartGame  = () => {
  const music =  Audio
  Components.PlayAudio(music)
  Components.createUserPanel(app, container) // тут не видит default  :=(
  Components.Loadtimer(app, 3000, Components.createUserPanel.Preloader(), gif1)
  Components.PlayVoice(voises.letsplayRussian, 3000)
  
}


//    <--CHOICE LEVEL  SCREEN-->
 const initChoiceLevel = (app, container, colContent ) => {
  console.log(app)
  if(container){
    container.innerHTML = ""
    
  }
   Components.PlayAudio.AudioStop()
   Components.PlayAudio(Audio)
   Components.CreateСhoiceLevel(app, container, colContent)
   Components.Loadtimer(app, 3000, Components.CreateСhoiceLevel.Preloader())
   Components.PlayVoice(voises.letsChooseALevel, 3000)
}

//    <-- LEVEL 1  SCREEN-->
  const initLevel1 = (app, container) => {
 
        
  Components.PlayAudio.AudioStop()
  Components.PlayAudio()
  Components.CreateLevel1Screen(app, container) 
  Components.Loadtimer(app, 3000, Components.CreateLevel1Screen.Preloader())
  Components.PlayVoice(voises.letsChooseAGroup, 3000)
}

const init = {
  StartGame : initStartGame,
  ChoiceLevel : (app, container, colContent) => initChoiceLevel(app, container, colContent),
  Level1  : (app, container, colContent) => initLevel1(app, container, colContent)
}

export default init
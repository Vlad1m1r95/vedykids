import { CreateDOMElement, CloneElement } from '../../helpers/newDomel'
import render, {renderBeforeEnd, renderAll} from '../../helpers/render'
import colorfulText from '../../helpers/fonts/colorful.helper'
import CreateColumms from '../../helpers/CreateColumms.helper'
import Level1Hendler from '../../hendlers/level1.hendler'

const CreateLevel1Screen = (app, rowContent) => {
const OldrowContent = rowContent

rowContent = CloneElement(rowContent, 'rowContent' , undefined, false)
const colContent = CloneElement(document.getElementById('col-content'), 'col-content',  undefined, false)

const TitletextPropert = {
  id : 'letsPlayText',
  classList : 'letsPlayText',
  text :   'Давай-ка , выбирай !'
}

const TitleText = CreateDOMElement(TitletextPropert)

const arrayCollum = CreateColumms(8, 3 , Level1Hendler)

//! Colorful Text
OldrowContent.remove()

const Oldpreloader = document.getElementById('preloader')
Oldpreloader.remove()

const divProperty = {
  id: 'preloader',
}
  const preloader = CreateDOMElement(divProperty)
 const App =  document.getElementById('app')

 render(preloader, App)
 const loader = document.getElementById('preloader')
  
 
 
 
 Function.prototype.Preloader = function(preloader){
    preloader = loader
    return preloader 
  }


 const MainContant = document.getElementById('mainContent')
//  render(row, conrainer)


render(TitleText, colContent)
render(colContent, rowContent)
renderAll(arrayCollum, rowContent)
render(rowContent, MainContant)
colorfulText(TitleText, 'content')



//? Add event




const getAction = (arrayid) => {
  elementAction = []
  arrayid.forEach(id => {
    const actionEl = document.getElementById(id)
    elementAction.push(actionEl)
  })
  return elementAction
}

let arraIdAction = [
  'fruit',
  'vegetables',
  'transport',
  'Pets',
  'Wildanimals',
  'family',
  'Clothing',
  'Professions',
]

 let elementAction = getAction(arraIdAction)


Level1Hendler(elementAction, App, MainContant)


}


export default CreateLevel1Screen
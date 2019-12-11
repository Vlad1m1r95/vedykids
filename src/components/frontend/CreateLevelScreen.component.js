import { CreateDOMElement, CloneElement } from '../../helpers/newDomel'
import render, { renderBeforeEnd, renderAll } from '../../helpers/render'
import colorfulText from '../../helpers/fonts/colorful.helper'
import CreateColumms from '../../helpers/CreateColumms.helper'
import LevelHendler from '../../hendlers/level.hendler'
import titletext from '../../Template/_bloks/title.hbs'
import isclientHeightImage from '../../helpers/fonts/imagesize/clientHeightImage.helper'
import DictionaryCheckWord from './../../helpers/trycatch/DictionaryCheck'

const CreateLevelScreen = (app, rowContent, state, Images, levelDetails) => {
  console.log(levelDetails)
  const MODE = state
  console.log(state)

  const OldrowContent = rowContent

  rowContent = CloneElement(rowContent, 'rowContent', undefined, false)
  const colContent = CloneElement(document.getElementById('col-content'), 'col-content', undefined, false)

  // const TitletextPropert = {
  //   id: 'titleText',
  //   classList: 'titleText',
  //   text: 'Давай-ка , выбирай !'
  // }

  let titleproperty = {
    title: DictionaryCheckWord(MODE, `Давай-ка , выбирай !`),


  }
  const TitleText = titletext(titleproperty)


  const arrayCollum = CreateColumms(8, 3, MODE, Images)

  //! Colorful Text
  OldrowContent.remove()

  const divProperty = {
    id: 'preloader',
  }
  const preloader = CreateDOMElement(divProperty)
  const App = document.getElementById('app')

  render(preloader, App)
  const loader = document.getElementById('preloader')







  const MainContant = document.getElementById('mainContent')


  colContent.insertAdjacentHTML('beforeend', TitleText)
  // render(TitleText, colContent)
  render(colContent, rowContent)
  renderAll(arrayCollum, rowContent)
  render(rowContent, MainContant)

  const title = document.getElementById('titleText')
  console.log(isclientHeightImage('.img-level', 310))
  if (isclientHeightImage('.img-level', 310)) {
    title.classList.add('normal-title')
  } else {
    title.classList.add('small-title')
  }

  // TitleText.innerHTML = translate(MODE, TitleText.innerHTML)
  colorfulText(title, 'content')



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
    'Furniture',
    'Clothes',
    'Professions',
  ]

  let elementAction = getAction(arraIdAction)


  LevelHendler(elementAction, App, MainContant, state, levelDetails)


}


export default CreateLevelScreen
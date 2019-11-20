import newDOM$el from './../../helpers/newDomel'
import render from './../../helpers/render'
import colorfulText from './../../helpers/fonts/colorful.helper'
import ContentMainPageHendler from './../../hendlers/levels.hendler/ContentMainPage.hendle'
//? images
import settingimg from './../../img/icon/setting.png'
import playimg from './../../img/icon/play.png'
import exitimg from './../../img/icon/exit.png'
//! Cursor 
import cursorPointer from './../../img/cursor/pointer32px.svg'
import cursorDefault from './../../img/cursor/default32px.svg'






const contentMainPage = (Content) => {
 //? images
//  const settingImg =  '/src/assets/img/icon/Setting-Button-715x735.png'
 //?
  const sectionMain = newDOM$el('section', 'mainContent', ['container-fluid'])
  const row = newDOM$el('div', 'row-content', ['row'])
  const col = newDOM$el('div', 'col-content', ['col-12'])
  const letsPlayText = newDOM$el('div', 'letsPlayText', ['letsPlayText'])
  const buttonSetting = newDOM$el('div', 'settingButtonCol', ['col-4'])
  const buttonPlay = newDOM$el('div', 'PlayButtonCol', ['col-4'])
  const buttonExit = newDOM$el('div', 'ExitButtonCol', ['col-4'])
  const imgSetting = newDOM$el('img', 'imgSetting', ['img-setting' , 'center-block'], `${settingimg}`, 'Setting button')
  const imgPlay = newDOM$el('img', 'imgPlay', ['img-play', 'center-block'], `${playimg}`, 'Play button')
  const imgExit = newDOM$el('img', 'imgExit', ['img-exit','center-block'], `${exitimg}`, 'Exit button')
  console.log(imgSetting)
  letsPlayText.innerHTML = `Привет ! Давай играть !`
  render(letsPlayText, col)
  render(col, row)
  render(row, sectionMain)
  render(imgSetting, buttonSetting)
  render(imgPlay, buttonPlay)
  render(imgExit, buttonExit)
  row.insertAdjacentElement('beforeEnd', buttonSetting)
  row.insertAdjacentElement('beforeEnd', buttonPlay)
  row.insertAdjacentElement('beforeEnd', buttonExit)
  Content.insertAdjacentElement('beforeEnd', sectionMain)
  // row.insertAdjacentHTML('beforeEnd', buttonSetting.outerHTML)

  //? colorful text
  const PlayText = document.getElementById('letsPlayText')
  //   console.log(logo1.innerHTML)
  colorfulText(PlayText, 'content')

  //! Add event 
const body = document.querySelector('body')
const rowContent = document.getElementById('row-content')
const app = document.getElementById('app')
const setting = document.getElementById('imgSetting')
const play  = document.getElementById('imgPlay')
const exit  = document.getElementById('imgExit')
const TitleText =  PlayText
const eventElements = [setting, play , exit]
const colContent = document.getElementById('col-content')
// change coursor  
app.style.cursor = `url(${cursorDefault}) , default `   
eventElements.forEach(element => { 
  element.style.cursor = `url(${cursorPointer}) , pointer `
});
ContentMainPageHendler(eventElements , app , rowContent, colContent)


const preloader = document.getElementById('preloader')
console.log(preloader)
Function.prototype.Preloader = function(loader){
  loader = preloader
  return loader 
}
}



export default contentMainPage
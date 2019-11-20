import render from '../../helpers/render'
import newDOM$el from '../../helpers/newDomel'
import wrapper from '../../helpers/wrapper'
import colorfulText from '../../helpers/fonts/colorful.helper'
import contentMainPage from './contentMainPage.component'

const  createUserPanel = (app, container) => {
  const preloader =     newDOM$el('div', 'preloader', [])
  const lineloader =     newDOM$el('div', 'lineloader', ['lineloader'])
  const wrapcontainer = newDOM$el('div', 'Content', ['container-fluid']) 
  const HeaderPanel =   newDOM$el('header', 'header', ['header'])
  const row         =    newDOM$el('div', 'row-header', ['row'])
  const contentHeader =  newDOM$el('div', 'contentHeader', ['content-header']) // if need standart collum add   class container 
  const topLeft = `
    <div id="left-item"><div id="logo1" class="col logo1">Kids Teacher</div></div>
  `
  const topRight = `

  `
  if(container){
    container.remove()
  }
  render(contentHeader, row)
  render(row, HeaderPanel)
  render(HeaderPanel , wrapcontainer)
  wrapper(contentHeader, null , [topLeft , topRight])
  wrapcontainer.insertAdjacentHTML('afterbegin',preloader.outerHTML)
  app.insertAdjacentHTML('afterbegin', wrapcontainer.outerHTML)
  
//? colorful text
  const logo1 = document.getElementById('logo1')
//   console.log(logo1.innerHTML)
  colorfulText(logo1, 'header') 


//! import content
const Content  = document.getElementById('Content')
  contentMainPage(Content)
}
 const header = document.getElementById('header')
 const logotype = document.getElementById('logo1')
// const SlideHeader = (header, logo) => {
//   header.style.padding =  0
//   header.style.height =  0
//   logo.style.display = 'none'

// }



//   // SlideHeader(header, logotype)
//   // console.log(logotype)

 



   




export default createUserPanel
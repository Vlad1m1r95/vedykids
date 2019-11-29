import colorfulText from './../../helpers/fonts/colorful.helper'
import newDOM$el from './../../helpers/newDomel'
import { renderBeforeEnd, renderAll } from './../../helpers/render'
import changeImageOnHover from './../../helpers/changeImageOnHover'
import ChoiceLevelHendler from './../../hendlers/levels.hendler/СhoiceLevel.hendler'
import MODE from './../../lang/lang'
import translate from './../../helpers/translate'

//? images
import sun_levelimg1 from './../../img/level-image/levelimglight/level1.png'
import sun_levelimg2 from './../../img/level-image/levelimglight/level2.png'
import sun_levelimg3 from './../../img/level-image/levelimglight/level3.png'
import levelimg1 from './../../img/level-image/levelimglight/level1-default.png'
import levelimg2 from './../../img/level-image/levelimglight/level2-default.png'
import levelimg3 from './../../img/level-image/levelimglight/level3-default.png'










const CreateСhoiceLevel = (app, container, colContent) => {
  console.log(app)
  console.log(container)
  const level1col = newDOM$el('div', 'level1col', ['col-4'])
  const level2col = newDOM$el('div', 'level2col', ['col-4'])
  const level3col = newDOM$el('div', 'level3col', ['col-4'])



  const imglevel1 = newDOM$el('img', 'level1img', ['level-img', 'center-block'], `${levelimg1}`, 'level1')
  const imglevel2 = newDOM$el('img', 'level2img', ['level-img', 'center-block'], `${levelimg2}`, 'level1')
  const imglevel3 = newDOM$el('img', 'level3img', ['level-img', 'center-block'], `${levelimg3}`, 'level1')


  const childeElements = [imglevel1, imglevel2, imglevel3,]
  const childePerents = [level1col, level2col, level3col]
 

  renderBeforeEnd(childeElements, childePerents)
  const elements = [colContent, level1col, level2col, level3col]
  renderAll(elements, container)




  const TittleText = document.getElementById('letsPlayText')

  TittleText.innerHTML = 'Давай выберем уровень !'
  TittleText.innerHTML = translate(MODE, TittleText.innerHTML)
  //? colorful text
  //   console.log(logo1.innerHTML)
  colorfulText(TittleText, 'content')

  const srcImageHover = [sun_levelimg1, sun_levelimg2, sun_levelimg3]
  const srcImageDefault = [levelimg1, levelimg2, levelimg3]
  console.log(srcImageHover)
  console.log(srcImageDefault)
  changeImageOnHover(childeElements, srcImageHover, srcImageDefault)
  const oldpreloader = document.getElementById('preloader')
  if(oldpreloader){
    oldpreloader.remove()
  }
  const preloader = newDOM$el('div' , 'preloader', [])
  container.insertAdjacentElement('afterbegin', preloader)
  const loader = document.getElementById('preloader')
  console.log(loader)

  


  //?addEvent 
  const rowContent = document.getElementById('row-content')
  const arrayEventElement = [imglevel1, imglevel2, imglevel3]
  ChoiceLevelHendler(arrayEventElement, app , rowContent)
}





export default CreateСhoiceLevel

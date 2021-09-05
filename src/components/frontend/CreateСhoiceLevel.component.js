import colorfulText from './../../helpers/fonts/colorful.helper'
import newDOM$el from './../../helpers/newDomel'
import { renderBeforeEnd, renderAll } from './../../helpers/render'
import changeImageOnHover from './../../helpers/changeImageOnHover'
import ChoiceLevelHendler from './../../hendlers/levels.hendler/СhoiceLevel.hendler'
import DictionaryCheckWord from './../../helpers/trycatch/DictionaryCheck'

//? images
import sun_levelimg1 from './../../img/level-image/levelimglight/level1.png'
import sun_levelimg2 from './../../img/level-image/levelimglight/level2.png'
import sun_levelimg3 from './../../img/level-image/levelimglight/level3.png'
import levelimg1 from './../../img/level-image/levelimglight/level1-default.png'
import levelimg2 from './../../img/level-image/levelimglight/level2-default.png'
import levelimg3 from './../../img/level-image/levelimglight/level3-default.png'
import ChoiceLevelTemplate from './../../Template/ChoiceLevel.hbs'











const CreateСhoiceLevel = (app, container, colContent, state) => {
  const MODE = state

  const ChoiceLevelProperty = {
    level1: levelimg1,
    level1_alt: 'level1',
    level2: levelimg2,
    level2_alt: 'level2',
    level3: levelimg3,
    level3_alt: 'level3',

  }

  app.innerHTML = ChoiceLevelTemplate(ChoiceLevelProperty)


  const TittleText = document.getElementById('letsPlayText')
  TittleText.innerHTML = DictionaryCheckWord(MODE, 'Давай выберем уровень !')

  //? colorful text
  colorfulText(TittleText, 'content')

  const srcImageHover = [sun_levelimg1, sun_levelimg2, sun_levelimg3]
  const srcImageDefault = [levelimg1, levelimg2, levelimg3]
  const levelimage = [...document.querySelectorAll('img')]

  changeImageOnHover(levelimage, srcImageHover, srcImageDefault)

  // //?addEvent 
  const rowContent = document.getElementById('row-content')
  ChoiceLevelHendler(levelimage, app, rowContent, state)
}





export default CreateСhoiceLevel

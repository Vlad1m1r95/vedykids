import titletext from './../../../Template/_bloks/title.hbs'
import translate from '../../../helpers/translate'
import { renderAll } from './../../../helpers/render'

import CreateColummsImages from './../../../helpers/CreateColummsImages'
import colorfulText from './../../../helpers/fonts/colorful.helper'
import isclientHeightImage from './../../../helpers/fonts/imagesize/clientHeightImage.helper'
import DictionaryCheckWord from './../../../helpers/trycatch/DictionaryCheck'

const LoaderCategory = (context, category, timer) => {


  let text = DictionaryCheckWord(context.mode, `${category}`)


  let titleproperty = {

    title: text,


  }

  let title = ''
  title = titletext(titleproperty)




  let collums = CreateColummsImages(context.collums, context.size, context.mode, context.hashimages)


  while (context.parent.firstChild) {
    context.parent.removeChild(context.parent.firstChild);
  }
  let arrayelem = [title, collums]

  const parent = context.parent

  parent.insertAdjacentHTML('beforeend', title)
  renderAll(collums, context.parent)
  const Title = document.getElementById('titleText')
  colorfulText(Title, 'title')

  if (isclientHeightImage('.img-level', 310)) {
    Title.classList.add('normal-title')
  } else {
    Title.classList.add('small-title')
  }




  setTimeout(() => parent.remove(), timer)

}


export default LoaderCategory


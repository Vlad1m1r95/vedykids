
import $get from './../../helpers/DOM/getElementById'
import titleTemplatePlay from './../../Template/_bloks/title_Play.hbs'
import titleTemplateLevel from './../../Template/_bloks/title_Level.hbs'

import colorfulText from './../../helpers/fonts/colorful.helper'
import DictionaryCheckWord from './../../helpers/trycatch/DictionaryCheck';


const changeTitle = (hash, MODE) => {
  const colContent = $get('col-content')
  let titleProperty = {}
  let title = ''
  let mode = ''

  switch (hash) {
    case 'StartGame':
      titleProperty = {
        title: DictionaryCheckWord(MODE, 'Hi! Let`s play !'),
        mode: 'play'
      }
      break
    case 'Level/2':
      titleProperty = {
        title: DictionaryCheckWord(MODE, 'Let `s choose ! '),
        mode: 'title'
      }
      break
    // // case 'LoaderCategory':
    // //   titleProperty = {
    // //     title: 'HEllo word',
    // //     mode: 'title'
    // //   }
    //   break

  }




  if (titleProperty.title) {
    if (titleProperty.mode === 'play') {
      title = titleTemplatePlay(titleProperty)
      colContent.innerHTML = title
      colorfulText($get('letsPlayText'), 'title')
    }
    if (titleProperty.mode === 'title') {
      title = titleTemplateLevel(titleProperty)
      colContent.innerHTML = title
      colorfulText($get('titleText'), 'title')
    }



  }


}

export default changeTitle
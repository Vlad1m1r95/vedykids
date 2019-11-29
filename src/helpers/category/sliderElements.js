import replacePathImage from './re/replacepath.helper'
import PlayVoice from './../../components/speacks/voice.speack'
import colorfulText from './../fonts/colorful.helper'
import { voices } from './../../voice/script/voices'


const SliderEliments = ( MODE, arrayimage, navigateButton, Currentimage) => {
  let array = arrayimage
  let len = array.length
  const back = navigateButton.back
  const current = Currentimage.current
  const title = Currentimage.title
  const next = navigateButton.next


  const Next = (elpos) => {

    let elem = ''
  
    console.log(array)
    if (elpos >= len - 1) {
      elpos = 0
      elem = array[elpos]
  
      console.log(`position ${elpos} :` + elem)
    } else {
      elpos = elpos + 1
      elem = array[elpos]
      console.log(`position ${elpos} :` + elem)
    }
  
    return {
      elindex: elpos,
      elem: elem,
    }
  }

  const Current = (elpos) => {
    let elem = ''
    elem = array[elpos]
    console.log(`position ${elpos} :` + elem)
  
    return {
      elindex: elpos,
      elem: elem,
    }
  }
  const Back = (elpos) => {

    let elem = ''
    console.log(array)
  
    if (elpos === 0) {
      elem = array[len - 1]
      // elpos = len - clicks
      elpos = len - 1
      console.log(` position ${elpos} :` + elem)
  
    }

    else {
      elpos = elpos - 1
      elem = array[elpos]
  
      console.log(` position ${elpos} :` + elem)
    }
    return {
      elindex: elpos,
      elem: elem,
    }
  }
  let elpos = 0
let result = null


const navigate = (e) => {
  e = event.target
  if (result !== null) {
    elpos = result.elindex
  }
  let GroupVoice = voices.group

  switch (e.id) {
    

    case 'imageBack':
      result = Back(elpos)
      current.src = result.elem
      current.dataset.image =  replacePathImage('ENG',  result.elem)
      
      title.innerText = replacePathImage(MODE, result.elem)
      PlayVoice(GroupVoice[`${current.dataset.image}`])

      colorfulText(title, 'col-image')
      console.log(result)

      break
    case 'currentImage':
      result = Current(elpos)
      
        PlayVoice(GroupVoice[`${current.dataset.image}`])
      
      // let obj = new Object()
      // obj = voices.group
      // let GroupVoices = voices.group
      // console.log(voices.hasOwnProperty('group'))
        
      


      console.log(result)
      break
    case 'imageNext':
      result = Next(elpos)
      current.src = result.elem

      title.innerText = replacePathImage(MODE , result.elem)
      current.dataset.image =  replacePathImage('ENG',  result.elem)
       colorfulText(title, 'col-image')
      console.log(result)
      PlayVoice(GroupVoice[`${current.dataset.image}`])
      break
  }
}
back.addEventListener('click', navigate)
console.log(back)

current.addEventListener('click', navigate)

next.addEventListener('click', navigate)

}

export default SliderEliments

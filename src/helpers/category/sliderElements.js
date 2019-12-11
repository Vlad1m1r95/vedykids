import replacePathImage from './re/replacepath.helper'
import PlayVoice from './../../components/speacks/voice.speack'
import colorfulText from './../fonts/colorful.helper'
import voicesarr from './../../voice/script/voices'
import LoaderCategory from './../../components/frontend/category/LoaderCategory'
import { Navigate } from './../../routing/RoutersPath'
import VoiceCheck from './../ifelse/isVoice'




const SliderEliments = (MODE, arrayimage, navigateButton, Currentimage, contentHashImages, loaderVoice) => {
  const rowContent = document.getElementById('rowContent')
  console.log(contentHashImages)
  //voices
  const voices = voicesarr(MODE)

  //array
  let array = arrayimage
  let len = array.length

  //navigate
  const back = navigateButton.back
  const current = Currentimage.current
  const next = navigateButton.next


  //text
  const title = Currentimage.title

  //result
  let iterator = 0
  let elpos = 0
  let result = null

  const context = {
    parent: rowContent,
    mode: MODE,
    hashimages: contentHashImages,
    collums: 8,
    size: 3,
  }
  let category = contentHashImages.Category

  const Next = (elpos, iterator) => {
    if (iterator >= len) {
      iterator = 0
    }
    iterator++
    let elem = ''
    if (elpos >= len - 1) {
      elpos = 0
      elem = array[elpos]


    } else {
      elpos = elpos + 1
      elem = array[elpos]

    }

    return {
      elindex: elpos,
      elem: elem,
      iterator: iterator
    }
  }
  const Current = (elpos) => {
    let elem = ''
    elem = array[elpos]
    return {
      elindex: elpos,
      elem: elem,
    }
  }
  const Back = (elpos, iterator) => {
    if (Math.abs(iterator) >= len) {
      iterator = 0
    }
    iterator--
    let elem = ''

    if (elpos === 0) {
      elem = array[len - 1]
      // elpos = len - clicks
      elpos = len - 1

    }

    else {
      elpos = elpos - 1
      elem = array[elpos]


    }
    return {
      elindex: elpos,
      elem: elem,
      iterator: iterator
    }
  }
  const navigate = (e) => {


    e = event.target
    if (result !== null) {
      elpos = result.elindex
      iterator = result.iterator
    }
    let GroupVoice = voices.group
    console.log(loaderVoice)
    switch (e.id) {

      case 'imageBack':
        if (Math.abs(iterator) >= len) {
          LoaderCategory(context, category, 3300)

          VoiceCheck(loaderVoice)
          setTimeout(() => Navigate('Level/1'), 3000)

        }
        else {
          result = Back(elpos, iterator)
          current.src = result.elem
          current.dataset.image = replacePathImage('ENG', result.elem)
          title.innerText = replacePathImage(MODE, result.elem)

          PlayVoice(GroupVoice[`${current.dataset.image}`])

          colorfulText(title, 'col-image')

        }
        break
      case 'currentImage':
        result = Current(elpos)

        PlayVoice(GroupVoice[`${current.dataset.image}`])


        break
      case 'imageNext':
        if (iterator >= len) {

          console.log(iterator)
          LoaderCategory(context, category, 3300)
          VoiceCheck(null, null, loaderVoice, PlayVoice)
          VoiceCheck(loaderVoice)
          setTimeout(() => Navigate('Level/1'), 3000)
        } else {
          result = Next(elpos, iterator)
          current.src = result.elem

          title.innerText = replacePathImage(MODE, result.elem)
          current.dataset.image = replacePathImage('ENG', result.elem)
          colorfulText(title, 'col-image')
          try {
            PlayVoice(GroupVoice[`${current.dataset.image}`])
          } catch (error) {
            console.log(error)
          }
        }


        break
    }
  }

  back.addEventListener('click', navigate)
  current.addEventListener('click', navigate)
  next.addEventListener('click', navigate)

}

export default SliderEliments

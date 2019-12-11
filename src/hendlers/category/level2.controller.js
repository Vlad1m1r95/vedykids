import setHendler from './../hendler.component'
import $get from '../../helpers/DOM/getElementById'
import $query from '../../helpers/DOM/getQueryselector'
import DictionaryCheckWord from './../../helpers/trycatch/DictionaryCheck'
import replacePathImage from './../../helpers/category/re/replacepath.helper'
import colorfulText from './../../helpers/fonts/colorful.helper'
import { Navigate } from './../../routing/RoutersPath';


const level2Controller = (app, elements, context, images) => {
  let step = images.length
  let title = $get('titleText')
  let array = [1, 2, 3, 4, 5, 6, 7, 8]
  let colid = array.rand()
  let progressimage = $get(`image-${colid}`)
  let progressbar = $get(`progressBar`)
  // progressimage.setAttribute('alt', 'what??')
  console.log('Изображение')
  console.log(progressimage)
  console.log('Изображение')
  // progressimage.alt = `what??`

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }



  let progress = 0

  const reducer = (e) => {
    console.log(images)
    e = event.target

    Array.prototype.rand = function getRandom(arr) {
      console.log(arr)
      return this[Math.floor(Math.random() * this.length)]
    }
    Array.prototype.index = function getRandom(arr) {
      console.log(arr)
      return Math.floor(Math.random() * this.length)

    }

    let progressbarImg = []
    progressbarImg.push(progressimage.src)

    // let showimages = progressbarImg.filter(x => !images.includes(x))


    let index1 = getRandomInt(0, 8)
    let index2 = getRandomInt(0, 8)
    if (index1 === index2) {
      index1 = Math.floor((index1 * index2) + 1 / 10)
    }

    if (context.trueword === e.alt) {


      let image1 = images.rand()
      let image2 = images.rand()
      console.log(image1)
      console.log(image2)

      $get('leftImage').src = image1
      $get('RightImage').src = image2

      let text1 = replacePathImage(context.mode, image1)
      let text2 = replacePathImage(context.mode, image2)
      let words = [text1, text2]
      $get('leftImage').alt = text1
      $get('RightImage').alt = text2
      context.trueword = DictionaryCheckWord(context.mode, words.rand())
      title.innerHTML = DictionaryCheckWord(context.mode, `show, where!`) + ` ` + context.trueword
      if (progress === step) {
        alert('ура')

        container = $get('maincontent')
        app.removeChild()
        Level(app, container, state, Images)
        Navigate('Level/2')
      } else {
        progress++

      }
      // progressbar.src = e.src
      progressimage.src = e.src
      progressimage.alt = e.alt
      context.progress.innerHTML = `${progress}/${step}`

      alert('Правильно')
    } else {

      let image1 = images.rand()
      let image2 = images.rand()


      $get('leftImage').src = image1
      $get('RightImage').src = image2

      let text1 = replacePathImage(context.mode, image1)
      let text2 = replacePathImage(context.mode, image2)
      let words = [text1, text2]
      $get('leftImage').alt = text1
      $get('RightImage').alt = text2

      context.trueword = DictionaryCheckWord(context.mode, words.rand())
      title.innerHTML = DictionaryCheckWord(context.mode, `show, where!`) + ` ` + context.trueword
      alert('не правильно')

    }


    // let arr1 = [image1]
    // let newarr = images.filter(image => !arr1.includes(image))
    // image2 = newarr.rand()
    // let arr2 = [image2]
    // let newarr2 = images.filter(image => !arr2.includes(image))
    // image1 = newarr2.rand()





    // images = images.filter(image => replacePathImage(context.mode, image) !== replacePathImage(context.mode, e.src))


  }




  elements.forEach(element => {
    setHendler(element, 'click', false, reducer)
  })

}

export default level2Controller
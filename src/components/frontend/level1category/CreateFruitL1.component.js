import { CreateDOMElement, CloneElement } from './../../../helpers/newDomel'
import render, { renderAll } from './../../../helpers/render'
import imgApple from './../../../img/level1Item/apple.png'
import imgBack from './../../../img/categoryl1/back.png'
import imgNext from './../../../img/categoryl1/next.png'
import colorfulText from './../../../helpers/fonts/colorful.helper'
import SliderEliments from './../../../helpers/category/sliderElements'
import translate from './../../../helpers/translate'

const CreateFruitL1 = (app, mainContent ,arrayimg, MODE) => {

 


  const rowContentOld = document.getElementById('rowContent')
  rowContentOld.remove
  const divDefaultProperty = {
    id: 'rowContent',
    classList: 'row',
  }
  const imgDefaultProperty = {
    el: 'img',
    id: 'currentImage',
    classList: 'img-fluid img-block-center',
   


  }
  const spanDefaultProperty = {
    id : 'spanText',
    el : 'span',
    classList: 'image-text',
    text: 'Яблоко',
  }


  rowContentOld.remove()
  const oldPreloader  = document.getElementById('preloader')
  oldPreloader.remove()
  const newPreloader = CreateDOMElement(divDefaultProperty)
  newPreloader.id = 'preloader'
  newPreloader.className = 'preloader fruit1-pre'
  
  

  const rowContent = CreateDOMElement(divDefaultProperty)
  const colItem = CloneElement(rowContent, 'ColItem')
  const ImgBlock = CloneElement(rowContent, 'ImgBlock')
  const imgagCurrent = CreateDOMElement(imgDefaultProperty)
  const imageBack = CloneElement(imgagCurrent, 'imageBack')
  const imageNext = CloneElement(imgagCurrent, 'imageNext')
  const textImage = CreateDOMElement(spanDefaultProperty)





  imgagCurrent.src = imgApple
  imgagCurrent.dataset.image = 'apple'
  imageBack.src = imgBack
  imageNext.src = imgNext

  ImgBlock.className = 'mt-block img-block-center'
  colItem.className = 'col-8 offset-2'

  render(newPreloader, app)
  render(ImgBlock, colItem)
  render(colItem, rowContent)
  render(rowContent, mainContent)
  renderAll([imageBack, imgagCurrent, imageNext, textImage] , ImgBlock)

  textImage.innerHTML = translate(MODE, textImage.innerHTML)

  colorfulText(textImage, 'col-image')
  const preloader = document.getElementById('preloader')
  console.log(preloader)
  
  // const eventElement  = [imgageapple, imageBack,imageNext]
  const back = document.getElementById('imageBack')
  const current = document.getElementById('currentImage')
  const next = document.getElementById('imageNext')
  const imageText = document.getElementById('spanText')

  const navigateButton = {
    back : back,
    next : next
  }
  const Currentimage = {
    current : current,
    title : imageText,
  }
  SliderEliments(MODE, arrayimg, navigateButton, Currentimage)

  // CategoryL1Hendler(eventElement, arrayimg)
}

export default CreateFruitL1
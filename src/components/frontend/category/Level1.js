import { CreateDOMElement, CloneElement } from '../../../helpers/newDomel'
import render, { renderAll } from '../../../helpers/render'
import imgApple from './../../../img/level1Item/apple.png'
import imgBack from './../../../img/category/back.png'
import imgNext from './../../../img/category/next.png'
import colorfulText from '../../../helpers/fonts/colorful.helper'
import SliderEliments from '../../../helpers/category/sliderElements'
import getContentHashImages from './../../../helpers/getContentHashImages'

const Level1 = (app, mainContent, imagesCategory, state, loaderVoice, category) => {

  const MODE = state

  const re = {
    path: /.*\//g,
    type: /.png/g,
  }

  const ContentHashIamges = { ...getContentHashImages(imagesCategory, re, MODE), Category: category }

  console.log(ContentHashIamges)
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
    id: 'spanText',
    el: 'span',
    classList: 'image-text',
    text: ContentHashIamges.startText,
  }
  console.log(ContentHashIamges.startText)


  rowContentOld.remove()
  const oldPreloader = document.getElementById('preloader')
  oldPreloader.remove()
  const newPreloader = CreateDOMElement(divDefaultProperty)
  newPreloader.id = 'preloader'
  newPreloader.className = 'preloader fruit1-pre'



  const rowContent = CreateDOMElement(divDefaultProperty)
  const colItem = CloneElement(rowContent, 'ColItem')
  const ImgBlock = CloneElement(rowContent, 'ImgBlock')
  const imageCurrent = CreateDOMElement(imgDefaultProperty)
  const imageBack = CloneElement(imageCurrent, 'imageBack')
  const imageNext = CloneElement(imageCurrent, 'imageNext')
  const textImage = CreateDOMElement(spanDefaultProperty)




  console.log(ContentHashIamges.action[0])
  imageCurrent.src = ContentHashIamges.images[0]
  imageCurrent.dataset.image = ContentHashIamges.action[0]
  imageBack.src = imgBack
  imageNext.src = imgNext

  ImgBlock.className = 'mt-block img-block-center'
  colItem.className = 'col-8 offset-2'

  render(newPreloader, app)
  render(ImgBlock, colItem)
  render(colItem, rowContent)
  render(rowContent, mainContent)
  renderAll([imageBack, imageCurrent, imageNext, textImage], ImgBlock)



  colorfulText(textImage, 'col-image')
  const preloader = document.getElementById('preloader')


  // const eventElement  = [imgageapple, imageBack,imageNext]
  const back = document.getElementById('imageBack')
  const current = document.getElementById('currentImage')
  const next = document.getElementById('imageNext')
  const imageText = document.getElementById('spanText')

  const navigateButton = {
    back: back,
    next: next
  }
  const Currentimage = {
    current: current,
    title: imageText,
  }






  SliderEliments(MODE, imagesCategory, navigateButton, Currentimage, ContentHashIamges, loaderVoice)

}

export default Level1
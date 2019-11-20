import { CreateDOMElement, CloneElement } from './../../../helpers/newDomel'
import render, { renderAll } from './../../../helpers/render'
import imgApple from './../../../img/level1Item/apple.png'
import imgBack from './../../../img/categoryl1/back.png'
import imgNext from './../../../img/categoryl1/next.png'
import colorfulText from './../../../helpers/fonts/colorful.helper'
import CategoryL1Hendler from './../../../hendlers/levels.hendler/categoryL1.hendler'

const CreateFruitL1 = (app, mainContent ,arrayimg) => {

  const rowContentOld = document.getElementById('rowContent')
  rowContentOld.remove
  const divDefaultProperty = {
    id: 'rowContent',
    classList: 'row',
  }
  const imgDefaultProperty = {
    el: 'img',
    id: 'appleImg',
    classList: 'img-fluid img-block-center'

  }
  const spanDefaultProperty = {
    el: 'span',
    classList: 'image-text',
    text: 'Яблоко'
  }

  rowContentOld.remove()

  const rowContent = CreateDOMElement(divDefaultProperty)
  const colItem = CloneElement(rowContent, 'ColItem')
  const ImgBlock = CloneElement(rowContent, 'ImgBlock')
  const imgageapple = CreateDOMElement(imgDefaultProperty)
  const imageBack = CloneElement(imgageapple, 'imageBack')
  const imageNext = CloneElement(imgageapple, 'imageNext')
  const textImage = CreateDOMElement(spanDefaultProperty)

  imgageapple.src = imgApple
  imageBack.src = imgBack
  imageNext.src = imgNext

  ImgBlock.className = 'mt-block img-block-center'
  colItem.className = 'col-8 offset-2'

 
  render(ImgBlock, colItem)
  render(colItem, rowContent)
  render(rowContent, mainContent)
  renderAll([imageBack, imgageapple, imageNext, textImage] , ImgBlock)
  colorfulText(textImage, 'col-image')
  
  const eventElement  = [imgageapple, imageBack,imageNext]

  CategoryL1Hendler(eventElement, arrayimg)
}

export default CreateFruitL1
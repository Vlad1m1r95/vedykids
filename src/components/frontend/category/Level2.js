import level from './../../../Template/levels/level2.hbs'
import DictionaryCheckWord from './../../../helpers/trycatch/DictionaryCheck'
import getContentHashImages from './../../../helpers/getContentHashImages'
import imgBack from './../../../img/category/back.png'
import imgNext from './../../../img/category/next.png'
import questionMark from './../../../img/category/question.png'
import colorfulText from './../../../helpers/fonts/colorful.helper'
import AnythingTopaint from './../../../helpers/trycatch/AnythingToPaint'
import $get from './../../../helpers/DOM/getElementById'
import setHendler from './../../../hendlers/hendler.component'
import replacePathImage from './../../../helpers/category/re/replacepath.helper';
import $query from '../../../helpers/DOM/getQueryselector'
import { Navigate } from './../../../routing/RoutersPath'
import level2Controller from '../../../hendlers/category/level2.controller'


const Level2 = (app, imagesCategory, state, category, ) => {

  const MODE = state
  const re = {
    path: /.*\//g,
    type: /.png/g,
  }

  const context = { ...getContentHashImages(imagesCategory, re, MODE), Category: category }

  Array.prototype.rand = function getRandom(arr) {
    console.log(arr)
    return Math.floor(Math.random() * this.length)
  }
  // random 
  let index1 = context.images.rand()
  let index2 = context.images.rand()



  const levelProperty = {
    title: DictionaryCheckWord(MODE, `show, where!`) + ' ' + DictionaryCheckWord(MODE, context.text[index1]),
    ImageLeft: context.images[index1],
    imageleftAlt: replacePathImage(MODE, context.images[index1]),
    arrowLeft: imgBack,
    arrowRight: imgNext,
    questionMark: questionMark,
    altQuestion: `what??`,
    ImageRight: context.images[index2],
    imageRightAlt: replacePathImage(MODE, context.images[index2]),
    progress: DictionaryCheckWord(MODE, 'progress'),
    progressBar: `1/${imagesCategory.length}`,
    randomID: context.images.rand()
  }




  app.innerHTML = level(levelProperty)




  // if (rootProperty === null || undefined) {
  //   app.innerHTML = level(levelProperty)
  // } else {
  //   app.innerHTML = level(rootProperty)
  // }



  AnythingTopaint('titleText', 'title')
  AnythingTopaint('progresstext', 'progresstext')



  const leftImage = $get('leftImage')
  const leftArrow = $get('arrowLeft')
  const current = $get('current')
  const RightArrow = $get('arrowRight')
  const RightImage = $get('RightImage')
  const progress = $get('blockNumberProgress')


  const trueword = DictionaryCheckWord(MODE, context.text[index1])


  const hashArray = {
    leftImage: leftImage,
    leftArrow: leftArrow,
    Current: current,
    RightArrow: RightArrow,
    RightImage: RightImage,
    trueword: trueword,
    progress: progress,
    mode: state,
    ...context.text,
  }
  const eventsArray = [leftImage, leftArrow, current, RightArrow, RightImage]

  level2Controller(app, eventsArray, hashArray, imagesCategory)
}

export default Level2
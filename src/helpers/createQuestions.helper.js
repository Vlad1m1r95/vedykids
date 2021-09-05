import DictionaryCheckWord from './trycatch/DictionaryCheck'
import replacePathImage from './category/re/replacepath.helper'



const getRandom = (arr) => {
  console.log(arr.length)
  return arr[Math.floor(Math.random() * arr.length)]
}
const Questions = (lang, images, text) => {

  let questions = []
  images.forEach(element => {
    let textimage = replacePathImage(lang, element)

    let title = `${DictionaryCheckWord(lang, 'show, where!')} ${DictionaryCheckWord(lang, textimage)}`
    let correctAnswer = DictionaryCheckWord(lang, textimage)
    let correctImage = element
    let onecopyimages = images.filter(elem => elem !== element)

    questions.push({
      title: title,
      correctAnswer: correctAnswer,
      correctImage: correctImage,
      images: onecopyimages,
      // word: replacePathImage(lang, image),
    })



  })
  return questions
}

let createQuestions = (lang, images, text) => {
  let questions = Questions(lang, images, text)
  questions.forEach(question => {
    let image = getRandom(question.images)
    console.log(image)
    question.image = image
    delete question.images
  })

  return questions
}

export default createQuestions
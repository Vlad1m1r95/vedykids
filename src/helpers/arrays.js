import replacePathImage from './category/re/replacepath.helper'
const getRandomTwoElements = (input, target) => {


  target = event.target

  let fluidarray = input.filter(elem => replacePathImage('ENG', elem) !== target.alt)
  let el1 = fluidarray.rand()
  fluidarray = input.filter(elem => elem !== el1)
  let el2 = fluidarray.rand()

  let elements = {
    first: el1,
    second: el2,

  }

  return elements
}

export default getRandomTwoElements
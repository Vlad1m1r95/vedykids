import setHendler from './hendler.component'
import { Navigate, Category } from '../routing/RoutersPath'
import { importAll } from '../helpers/importAll.helper'
import GetImagesCategory from './../img/script/images'


const LevelHendler = (elements, app, mainContent, state, levelDetails) => {

  const reduсer = (e) => {

    e = event.target
    switch (e.id) {

      case 'fruit':
        let fruit = GetImagesCategory('Fruit')

        Category(app, mainContent, state, fruit, 'this is fruit')
        Navigate(`Level/${levelDetails.level}/fruit`)


        break
      case 'vegetables':
        let vegetables = GetImagesCategory('Vegetables')
        Category(app, mainContent, state, vegetables, 'these are vegetables')
        Navigate(`Level/${levelDetails.level}/vegetables`)

        break
      case 'transport':
        let transport = GetImagesCategory('Transport')
        Category(app, mainContent, state, transport, 'this is transport')
        Navigate(`Level/${levelDetails.level}/transport`)

        break
      case 'Pets':
        let pets = GetImagesCategory('Pets')
        Category(app, mainContent, state, pets, 'these are pets')
        Navigate(`Level/${levelDetails.level}/pets`)

        break

      case 'Wildanimals':
        let WildAnimals = GetImagesCategory('WildAnimals')
        Category(app, mainContent, state, WildAnimals, 'these are wild animals')
        Navigate(`Level/${levelDetails.level}/wildanimals`)

        break
      case 'Furniture':
        let Furniture = GetImagesCategory('Furniture')
        Category(app, mainContent, state, Furniture, 'this is furniture')
        Navigate(`Level/${levelDetails.level}/furniture`)

        break
      case 'Clothes':
        let Clothing = GetImagesCategory('Clothes')
        Category(app, mainContent, state, Clothing, 'this is clothes')
        Navigate(`Level/${levelDetails.level}/clothes`)

        break
      case 'Professions':
        let Professions = GetImagesCategory('Professions')
        Category(app, mainContent, state, Professions, 'these are professions')
        Navigate(`Level/${levelDetails.level}/professions`)

        break
    }
  }




  elements.forEach(element => {
    setHendler(element, 'click', false, reduсer)
  })



}

export default LevelHendler
import setHendler from './hendler.component'
import importAll from './../helpers/importAll.helper'
import CreateFruitL1 from './../components/frontend/level1category/CreateFruitL1.component';

const Level1Hendler = (elements, app, mainContent) => {

  const reduser = (e) => {
    e = event.target
    switch (e.id) {

      case 'fruit':
        let fruit = []
        fruit = importAll(require.context('./../img/categoryL1/fruit/', true, /\.png$/), fruit)
        CreateFruitL1(app , mainContent, fruit)
        console.log(fruit)
        break
      case 'vegetables':
        alert('vegetables')

        break
      case 'transport':
        alert('transport')

        break
      case 'Pets':
        alert('Pets')

        break
      case 'Wildanimals':
        alert('Wildanimals')

        break
      case 'family':
        alert('family')

        break
      case 'Clothing':
        alert('Clothing')

        break
      case 'Professions':
        alert('Professions')

        break
    }
  }



  // for(let elem in elements){
  //   setHendler(elements[elem] , 'click', false, reduser)
  // }
  elements.forEach(element => {
    setHendler(element, 'click', false, reduser)
  })

  // 
  // setHendler(reg , 'click', false, foo)

}

export default Level1Hendler
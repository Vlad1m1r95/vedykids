import setHendler from './../hendler.component'
import { Navigate, Level } from './../../routing/RoutersPath'
import getContentHashImages from './../../helpers/getContentHashImages'
import { Images } from './../../img/script/images'





const ChoiceLevelHendler = (elements, app, container, state) => {
  console.log(container)
  const re = {
    path: /.*\//g,
    type: /.png/g,
  }
  const reduser = (e) => {
    e = event.target
    switch (e.id) {

      case 'level1img':
        Level(app, container, state, Images)

        Navigate('Level/1')
        break
      case 'level2img':
        Level(app, container, state, Images)

        Navigate('Level/2')
        break
      case 'level3img':
        Level(app, container, state, Images)
        Navigate('Level/3')
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

export default ChoiceLevelHendler
import setHendler from './../hendler.component'
import { Level1 } from './../../routing/RoutersPath'
import {RouterBase}  from './../../routing/Router'




const ChoiceLevelHendler = (elements, app, container, MODE) => {

  const reduser = (e) => {
    e = event.target
    switch(e.id){
      
      case 'level1img' :
        console.log(container)
        Level1(app, container, MODE)
        RouterBase.navigate('Level1')
      break  
  }
}
  


  // for(let elem in elements){
  //   setHendler(elements[elem] , 'click', false, reduser)
  // }
  elements.forEach(element => {
      setHendler(element , 'click', false, reduser)
  })

  // 
  // setHendler(reg , 'click', false, foo)
  
}

export default ChoiceLevelHendler
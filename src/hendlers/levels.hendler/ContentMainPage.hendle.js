import setHendler from './../hendler.component'
import { RouterBase } from './../../routing/Router'
import { ChoiceLevel } from './../../routing/RoutersPath'




const ContentMainPageHendler = (elements, app, container, colContent) => {

 

  const reduser = (e) => {
    e = event.target
    switch(e.id){
      case 'imgPlay' :
      
          ChoiceLevel(app, container, colContent)
          RouterBase.navigate('ChoiceLevel')
      break

      case 'imgSetting' :
        alert('настройки')
      break

      case 'imgExit' :
        alert('Вы точно хотите выйти?')
      break
      
  }
}
  


elements.forEach(element => {
  setHendler(element , 'click', false, reduser)
})
}

export default ContentMainPageHendler
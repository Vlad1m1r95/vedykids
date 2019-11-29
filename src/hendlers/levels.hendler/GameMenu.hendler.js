import setHendler from '../hendler.component'
import { RouterBase } from '../../routing/Router'
import { ChoiceLevel , Setting } from '../../routing/RoutersPath'




const ContentMainPageHendler = (elements, app, container, colContent) => {

 

  const reduсer = (e) => {
    e = event.target
    switch(e.id){
      case 'imgPlay' :
           
          ChoiceLevel(app, container, colContent)
          RouterBase.navigate('ChoiceLevel')
      break

      case 'imgSetting' :
          Setting(container)
          RouterBase.navigate('Setting')
         
        // alert('НАстройки')
      break

      case 'imgExit' :
        alert('Вы точно хотите выйти?')
      break
      
  }
 
}
  


elements.forEach(element => {
  setHendler(element , 'click', false, reduсer)
})

}

export default ContentMainPageHendler
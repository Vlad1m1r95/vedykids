import setHendler from './hendler.component'
import { RouterBase } from './../routing/Router'
import { StartGame } from './../routing/RoutersPath'



const LoginHendler = (elements) => {

  const reducer = (e) => {
    e = event.target
    switch(e.id){
      
      case 'vkButton' :
        StartGame()
        RouterBase.navigate('StartGame') 
        break
  }
}
  
  elements.forEach(element => {
      setHendler(element , 'click', false, reducer)
  })

}


export default LoginHendler
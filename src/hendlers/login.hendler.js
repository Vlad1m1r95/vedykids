import setHendler from './hendler.component'
import { Navigate, StartGame } from './../routing/RoutersPath'
import state  from './../lang/MODE'



const LoginHendler = (elements) => {

  const reducer = (e) => {
    e = event.target
    switch(e.id){
      
      case 'vkButton' :
        StartGame(state)
        Navigate('StartGame') 
        break
  }
}
  
  elements.forEach(element => {
      setHendler(element , 'click', false, reducer)
  })

}


export default LoginHendler
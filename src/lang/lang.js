
import { stateObservable } from './MODE'


let MODE = "RU"






export const getLAng = (e) => {
  
 
  let currentState = stateObservable
    e = event.target
    switch (e.id) {
      case  'RU' :
          currentState.change('RU') 
          localStorage.setItem('lang', 'RU')
          // console.log(state)

      break 
      case  'ENG' :
          currentState.change('ENG') 
          localStorage.setItem('lang', 'ENG')
          break 
    }
    return currentState
  }

 export default  MODE 


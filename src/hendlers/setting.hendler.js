import setHendler from './hendler.component'
import RuSelect from  './../img/setting/SelectRU.png'
import  ENGSelect from  './../img/setting/SelectENG.png'
import RU from './../img/setting/RU.png'
import ENG from './../img/setting/ENG.png'
import OK from './../img/setting/OK.png'
import { Navigate , StartGame } from './../routing/RoutersPath'
import PlayAudio from './../components/audio/playAudio.component'




const settingScreenHendler = (elements, content) => {
let LANG = ''
  const reduser = (e) => {
    
    e = event.target
    switch (e.id){
      case 'RU' :
        e.src = RuSelect
        LANG = 'RU'
       
       
        elements.forEach(element => {
         switch (element.id){
          case 'RU' :
          element.src = RuSelect
          break
          case 'ENG' : 
          element.src = ENG
          break
          case 'OK' :
          element.src = OK
          break
         }

        })

        break
      case 'ENG':
        e.src = ENGSelect
        LANG = 'ENG'
        
        elements.forEach(element => {
          switch (element.id){
            case 'RU' :
            element.src = RU
            break
            case 'ENG' : 
            element.src = ENGSelect
            break
            case 'OK' :
            element.src = OK
            break
           }
        })
        break

      case 'OK':
        // if(content){
        //   content.remove()
        // }
        
        //  StartGame()  
         if(PlayAudio){
          PlayAudio.AudioStop()
        }
         Navigate('StartGame') 

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

export default settingScreenHendler

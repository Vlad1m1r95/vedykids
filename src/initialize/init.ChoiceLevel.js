import PlayAudio from './../components/audio/playAudio.component'
import CreateСhoiceLevel from './../components/frontend/CreateСhoiceLevel.component'
import Loadtimer from './../components/frontend/preloader.component'
import PlayVoice from './../components/speacks/voice.speack'
import MODE from './../lang/lang'

//! Audio
import {voices} from './../voice/script/voices'
import Audio from './../music/mp3/lion-cub-and-turtle.mp3'


const initChoiceLevel = (app, container, colContent) => {
  console.log(app)
  if(container){
    container.innerHTML = ""
    
  }
  
   PlayAudio.AudioStop()
   PlayAudio(Audio)
   CreateСhoiceLevel(app, container, colContent, MODE)
   const preloader = document.getElementById('preloader')
   Loadtimer(app, 3000, preloader)
   PlayVoice(voices.screen.letsChooseALevel, 3000)
}

export default initChoiceLevel
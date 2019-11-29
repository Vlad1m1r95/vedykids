import PlayAudio from './../components/audio/playAudio.component'
import CreateLevel1Screen from './../components/frontend/CreateLevel1Screen.component'
import Loadtimer from './../components/frontend/preloader.component'
import PlayVoice from './../components/speacks/voice.speack'
import MODE from './../lang/lang'
//! Audio
import {voices} from './../voice/script/voices'


const initLevel1 = (app, container) => {
    
  PlayAudio.AudioStop()
  PlayAudio()
  CreateLevel1Screen(app, container, MODE) 
  const preloader = document.getElementById('preloader')
  Loadtimer(app, 3000, preloader)
  PlayVoice(voices.screen.letsChooseAGroup, 3000)
}

export default initLevel1
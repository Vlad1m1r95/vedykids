import PlayAudio from '../components/audio/playAudio.component'
import CreateLevelScreen from '../components/frontend/CreateLevelScreen.component'
import Loadtimer from '../components/frontend/preloader.component'
import PlayVoice from '../components/speacks/voice.speack'
//! Audio
import voicesarr from '../voice/script/voices'



const initLevel = (app, container, state, Images, levelDetails) => {
  const MODE = state
  let voices = voicesarr(MODE)

  PlayAudio.AudioStop()
  PlayAudio()
  CreateLevelScreen(app, container, MODE, Images, levelDetails)
  const preloader = document.getElementById('preloader')
  Loadtimer(app, 3000, preloader)
  PlayVoice(voices.screen.letsChooseAGroup, 3000)
}

export default initLevel
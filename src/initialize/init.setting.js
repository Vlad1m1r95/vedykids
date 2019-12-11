import createSettingScreen from '../components/frontend/createsetting.component'
import Loadtimer from '../components/frontend/preloader.component'
import PlayAudio from '../components/audio/playAudio.component'

const initSetting = (container) => {
  PlayAudio.AudioStop()
  PlayAudio()
  createSettingScreen(container)
}

export default initSetting
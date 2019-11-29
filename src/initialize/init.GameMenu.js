import createGameMenu from './../components/frontend/CreateGameMenu'
import Loadtimer from './../components/frontend/preloader.component'
import PlayVoice from './../components/speacks/voice.speack'
import PlayAudio from '../components/audio/playAudio.component'
//! Audio
import {voices} from './../voice/script/voices'
import Audio from './../music/mp3/lion-cub-and-turtle.mp3'
//? gif
import  gif1 from './../img/Spinner-Preloader/dance_fruit_big.gif'

const initGameMenu  = () => {
 PlayAudio(Audio)

let app = document.getElementById('app')

 createGameMenu(app)

 const preloader = document.getElementById('preloader')
 Loadtimer(app, 3000, preloader, gif1)
 PlayVoice(voices.screen.letsplay, 3000)
 
}

export default initGameMenu
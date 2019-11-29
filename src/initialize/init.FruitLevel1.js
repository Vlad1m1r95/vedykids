import PlayAudio from '../components/audio/playAudio.component'
import CreateFruitL1 from './../components/frontend/level1category/CreateFruitL1.component'
import Loadtimer from '../components/frontend/preloader.component'
import MODE from '../lang/lang'
import {importAll} from './../helpers/importAll.helper'


const initFruitL1 = (app, mainContent) => {
  PlayAudio.AudioStop()
 PlayAudio()
   let fruit = []
        fruit = importAll(require.context('./../img/categoryL1/fruit/', true, /\.png$/), fruit)
        CreateFruitL1(app , mainContent, fruit, MODE)
        const preloader = document.getElementById('preloader')
        console.log(preloader)
        Loadtimer(app, 3000, preloader)   
}

export default initFruitL1
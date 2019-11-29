
import setting from './../../Template/setting.hbs'
import Ru from './../../img/setting/RU.png'
import ENG from './../../img/setting/ENG.png'
import OK from './../../img/setting/OK.png'
import { getLAng } from './../../lang/lang'
import settingScreenHendler from './../../hendlers/setting.hendler';

const createSettingScreen = (container) => {
 
  const settingProperty = {
    ru  : Ru,
    eng : ENG,
    ok  : OK,
  }

  container.innerHTML = setting(settingProperty)

  const Ruflag  = document.getElementById('RU')
  const ENGflag = document.getElementById('ENG')
  const OKbutton = document.getElementById('OK')
  const Content = document.getElementById('Content')
  

 

 const eventelements = [Ruflag, ENGflag, OKbutton]

settingScreenHendler(eventelements, Content)
let MODE = getLAng(eventelements)

console.log(`setting mode : ${MODE}`)
  


}



export default createSettingScreen
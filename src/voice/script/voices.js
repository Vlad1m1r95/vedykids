import {importAllHash} from '../../helpers/importAll.helper'
import beautifyKeyM4a from './beautifyKeyM4a'
import chocevoiseMODE from './chocevoiseMODE'
// import  MODE from './../../lang/lang'
import state from './../../lang/MODE'


// Arrayvoice

    //RU
let voiceScreenArrayRU = []
    voiceScreenArrayRU = importAllHash(require.context('../ru/screenvoice', true, /\.m4a$/), voiceScreenArrayRU)

let voiceGroupArrayRU  = []
    voiceGroupArrayRU  = importAllHash(require.context('../ru/category', true, /\.m4a$/), voiceGroupArrayRU)

    //ENG

let voiceScreenArrayENG = []
    voiceScreenArrayENG = importAllHash(require.context('../eng/screenvoice', true, /\.m4a$/), voiceScreenArrayENG)

let voiceGroupArrayENG  = []
    voiceGroupArrayENG  = importAllHash(require.context('../eng/category', true, /\.m4a$/), voiceGroupArrayENG)


    // Re RU
let reRuScreen = /(media).(src).(voice).(ru).(screenvoice)/g
let reRuGroup  = /(media).(src).(voice).(ru).(category)/g

    //Re ENG

let reENGScreen = /(media).(src).(voice).(eng).(screenvoice)/g
let reENGGroup  = /(media).(src).(voice).(eng).(category)/g




    //RU
let voisecScreenRU = beautifyKeyM4a(voiceScreenArrayRU, reRuScreen)
let voisecGroupRU = beautifyKeyM4a(voiceGroupArrayRU, reRuGroup)

    //ENG
let voisecScreenENG = beautifyKeyM4a(voiceScreenArrayENG, reENGScreen)
let voisecGroupENG = beautifyKeyM4a(voiceGroupArrayENG, reENGGroup)

const screen = {ru : voisecScreenRU , eng : voisecScreenENG }
const group  = {ru : voisecGroupRU , eng : voisecGroupENG }


// const MODE = state.getstate()

 const voicesarr = (MODE) => {
   return chocevoiseMODE(MODE, screen, group)
}

export default voicesarr
// export let voices = chocevoiseMODE(MODE, screen, group)


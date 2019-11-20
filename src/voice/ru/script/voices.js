import {importAllHash} from '../../../helpers/importAll.helper'



let voicesarr = []
let voicearray = importAllHash(require.context('./../', true, /\.m4a$/), voicesarr)
let hashvoices = Object.create(null)

let re = /(media).(src).(voice).(ru)/g
voicearray.forEach((voice , i) => {

let keyvoice = voice.replace(re, "")
 let a = keyvoice.replace(/\/$/g, "")
 let aa = a.replace(/.m4a/g, "")
 let b = aa.replace(/^\//g, "")
 let bb = b.replace(/^\//g, "")
 let c = bb.replace(/(')/g, "")
 let cc = c.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })
 keyvoice = cc

  hashvoices[keyvoice] = voice
  
})




export let voises = hashvoices

//.replace(/#.*$/g, "")
// const voises = new voices (voicearray)
// console.log(voises.showvoice(voicearray))
// console.log(voises.createHashvoice())
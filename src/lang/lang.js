import setHendler from './../hendlers/hendler.component'
import { RouterBase } from './../routing/Router'
import { StartGame } from './../routing/RoutersPath'

let MODE = "RU"



export const getLAng = (elements) => {
  let lang = ""
  const reducer = (e) => {
    e = event.target
    switch (e.id){
      case 'RU' :
        localStorage.setItem('lang', "RU")
        MODE = localStorage.getItem('lang')
        lang = MODE
  
        break
      case 'ENG':
        localStorage.setItem('lang', "ENG")
        MODE = localStorage.getItem('lang')
        lang = MODE
        break
  
      case 'OK':
        break
    } 
    console.log(`MODE : ${MODE}`)
    return MODE
    
  
  }



    

  elements.forEach(element => {
    setHendler(element, 'click', false, reducer)
  }) 

  console.log(lang)

  return lang
  }
  



  
  
  
let lang = ""

const trueMode = () => {
  let a = ""
  let counter = 0

  let inter = setInterval(() => {
    let x = ""
    counter++
    if(localStorage.getItem('lang') !== undefined || null){
      let c =""
      console.log(a)
     // lang = localStorage.getItem('lang')
     console.log(counter++)
     if(counter === 20){
      
       clearInterval(inter)
       let b = localStorage.getItem('lang')
       c = b
       
     }
    x = c
   }
a = x
  }, 50);
 

console.log("asdasd" + a)
}
// lang = setInterval(trueMode, 50)
lang = trueMode()
// setTimeout(clearInterval(lang), 10000)

console.log( `sadas` + lang)
 export default  MODE
 console.log(MODE)
 console.log( `Переменная MODE ` + MODE)
// djpdhf
import newDOM$el from './helpers/newDomel'
import LoginHendler from './hendlers/login.hendler'
import createLoginForm from './components/frontend/login.component'
import Loadtimer from './components/frontend/preloader.component'
import PlayAudio from './components/audio/playAudio.component'
import Audio from './music/mp3/lion-cub-and-turtle.mp3'

//? gif
import  gif1 from './img/Spinner-Preloader/dance_fruit_big.gif'




//init App
const App = newDOM$el('div' , 'app', [])






// const preloader = newDOM$el('div' , 'preloader', [])


//? сreate element
createLoginForm(App)
// render(preloader, App)
// const stateObj = {pushed: true , index: 'index'}
// history.pushState(stateObj, 'page 1', 'signIn')

// window.onload = function(){
  
  
// }
// const currentState = history.state
// if (currentState ? currentState.pushed : false) history.pushState("", "", "/")


const body = document.querySelector('body')
//run after script App complete
window.onload = function(){

 
  
  // ! Constants for the operation of modules

 const vkbutton = document.getElementById('vkButton')
 const container = document.getElementById('container')
 const form = document.getElementsByClassName('formcard')
 const app    = App
 
 console.log(body)
//? Add Events
 const eventelem = [vkbutton]
 const preloader = document.getElementById('preloader')
   Loadtimer(app, 3000, preloader, gif1)
   LoginHendler(eventelem, app, container)
  
} 

// body.addEventListener('click', PlayAudio)
//  PlayAudio(Audio)
// const runAudio = (Audio) => {
//   PlayAudio(Audio)
// }





export default App
import { CreateDOMElement } from './helpers/newDomel'
import LoginHendler from './hendlers/login.hendler'
import createLoginForm from './components/frontend/login.component'
import Loadtimer from './components/frontend/preloader.component'
//? gif
import gif1 from './img/Spinner-Preloader/dance_fruit.gif'
import webp1 from './img/Spinner-Preloader/dance_fruit.webp'



import { Navigate, HomePage, StartGame } from './routing/RoutersPath'



// if (window.history.state) {
//   Navigate('StartGame')
//   let state = 'RU'
//   StartGame(state)
// }





const AppStart = () => {
  const appProperty = {
    id: 'app'
  }

  const App = CreateDOMElement(appProperty)

  let images = {
    gif: gif1,
    webp: webp1
  }

  HomePage(App)
  Navigate('HomePage')
  //? сreate element
  // createLoginForm(App)


  createLoginForm(App)
  //run after script App complete
  window.onload = () => {
    const preloader = document.getElementById('preloader')
    HomePage(App)
    Navigate('HomePage')
    Loadtimer(App, 3000, preloader, images)
    // ! Constants for the operation of modules
    const vkbutton = document.getElementById('vkButton')
    const container = document.getElementById('container')
    const form = document.getElementsByClassName('formcard')
    const application = document.getElementById('app')

    //? Add Events
    const eventelem = [vkbutton]
    LoginHendler(eventelem, application, container)



  }

  return App
}



// //init App




export default AppStart()
import lineLoader from './lineloader.component'


//? gif
import  gif1 from './../../img/Spinner-Preloader/dance_fruit_big.gif'
import  gif2 from './../../img/Spinner-Preloader/dog.gif'


const loadData = (app = app, time = 700 , preloader, gifs) => {
  return new Promise((resolve, reject) => {
    let preloaderEl = preloader
    setTimeout(resolve, time)
    lineLoader(app, time + 300)
    const allGif = [gif1, gif2]
    // let gif = allGif[Math.floor(Math.random()*allGif.length)]
    let gif =  gifs || allGif[Math.floor(Math.random()*allGif.length)]
    preloaderEl.style.background = `#fbfbfb url(${gif}) no-repeat center center`
      
    

  })
}
const Loadtimer = (app, time , preloader, gifs) => {
  loadData(app, time, preloader, gifs)
  .then(() => {
    
    let preloaderEl = preloader
    preloaderEl.classList.add('hidden')
    preloaderEl.classList.remove('visible')
    
  })
}


export default Loadtimer

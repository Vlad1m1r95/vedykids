import newDOM$el from './../../helpers/newDomel'
const progressLoader = newDOM$el('span' , 'lineloader', [`line-loader`])
const lineLoader = (parent, time) => {
  parent.insertAdjacentElement('afterbegin', progressLoader) 
  let alltime = Math.round(time/100)
  let start = 0
  
  
  const intervalId = setInterval(function(element = progressLoader){
    if(start >= 100){
      clearInterval(intervalId)
      element.remove()
    }
    element.style.width = start + '%'
    start++
  }, alltime)
}
export default lineLoader






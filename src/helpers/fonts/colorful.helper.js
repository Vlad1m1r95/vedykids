import newDOM$el from './../newDomel'
import render from './../render'
const colorfulText = (text,elem) => {
  let span = ''
  const arrayColors = [
    '#DB4444', 
    '#29D451', 
    '#4482EA', 
    '#E4BE24', 
    '#6F6F6F', 
    '#EF2525',
    '#AA25B8',
    '#2F9760',
    '#B76969',
    '#502B3C',
    '#E37474',
    '#1C11BC',
    '#CA4CB5',
    '#40EE81',
    '#EA1B7B',
    '#EA1B7B',
    '#D186F7',
    '#1CB72C',
    '#F55D26',
    '#1A0C7A',
    '#FDEB09',
    '#EF8395',
    '#EF8395',

  
  ]
  let Text = text.innerHTML
  text.innerHTML = ''
 
  for ( let letter  in  Text){
    
    span = newDOM$el('span', `letter-${letter}-${elem}` , [])
    span.insertAdjacentHTML('beforeEnd', Text[letter])
    
    text.insertAdjacentHTML('beforeEnd', span.outerHTML)
    let colorSpan = document.getElementById(span.id)
    colorSpan.style.color = arrayColors[letter]
  }

  return span
}

export default colorfulText
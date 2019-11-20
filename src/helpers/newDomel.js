const $el = null
const newDOM$el = ($el, id, [...classes], text, type) => {
  const arrayClasses = [...classes]
  const element = document.createElement($el)
  element.id = id
  if(text != null || undefined){
    element.innerHTML = text
  }

  if (arrayClasses.length > 0) { 
    arrayClasses.forEach( (className) => {
        element.classList.add(className)
    })
  }
  // if ([...classes].length > 0) {
  //   for (let value in [...classes]) {
  //     element.classList.add([classes[value]])
  //   }
  // }

  if ($el === 'button' || 'a') {
    if($el === 'a'){
      element.href = id
    }
     if(text != null || undefined){
      element.innerHTML = text
    }
    if(type != null || undefined) {
      element.type = type
    }
  }

  if($el === 'img') {
    element.src = text
    if(type == null || undefined){
      console.warn(`warning no alt : the picture ${element.outerHTML} has no alt attribute`)
    }
    else{
      element.alt = type
    }
    
  }

//  if($el === 'img')



  return element
}


export const CreateDOMElement = (Objectproperty) => {
 
  if(Objectproperty.el === undefined){
    Objectproperty.el = 'div'
  }
   const el = document.createElement(Objectproperty.el)
   if(Objectproperty.id){
    el.id = Objectproperty.id
   }
    if(Objectproperty.classList){
      const separator = ' '
      const  classes = Objectproperty.classList.split(separator)
      classes.forEach((className) => {
        el.classList.add(className)
     })
    }
  if(Objectproperty.text){
    el.textContent =  Objectproperty.text
  }

  //if image
   if(Objectproperty.src){
     el.src = Objectproperty.src
   }
   if(Objectproperty.alt) {
    el.alt = Objectproperty.alt
   }
   

   return el
}



export const CloneElement = (el,  id , text, needchild = true) => {
  let clonel = el.cloneNode(needchild)

  
 if(id !== undefined){
  clonel.id = id
 }
  
  if(text !== undefined){

    clonel.childNodes[0].nodeValue = text
  }
  
  return clonel
}








export default newDOM$el
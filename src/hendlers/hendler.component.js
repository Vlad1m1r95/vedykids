const setHendler = (element, action, defaultPrevent, func) => {
  
element.addEventListener(action, function(event){
  if(defaultPrevent === false) {
    event.preventDefault()
  }
  func()
})
}

export default setHendler
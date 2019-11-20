const render =  (element, parent) => {
  
  parent.insertAdjacentElement("afterbegin", element )
}

export const renderBeforeEnd =  (elements, parents) => {
  for(let elem in parents){
    parents[elem].insertAdjacentElement("beforeEnd", elements[elem])
  }
  
}

const renderCombines = (elements, parent) => {
  

  // elements.forEach(elementArray => {
  //   elementArray.forEach(element => {
  //     parent.insertAdjacentElement("beforeEnd", element)
  //   })
    
  // })
  
  elements.forEach(element => {
    parent.insertAdjacentElement("beforeEnd", element)
  })
  

  
}


 export const renderAll = (elements, parents) => {
  
 
  renderCombines(elements, parents)

}
// renderAll([['cat', 'dog', 'fish' ] , ['big', 'smal']] , [['animals'] , ['size']])
  


export default render




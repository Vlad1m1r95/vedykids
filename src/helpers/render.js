const render = (element, parent) => {

  parent.insertAdjacentElement("afterbegin", element)
}

export const renderBeforeEnd = (elements, parents) => {
  for (let elem in parents) {
    parents[elem].insertAdjacentElement("beforeEnd", elements[elem])
  }

}

const renderCombines = (elements, parent, mode) => {
  if (mode === 'html') {
    elements.forEach(element => {
      parent.insertAdjacentHTML("beforeend", element)
    })

  } else {
    elements.forEach(element => {
      parent.insertAdjacentElement("beforeend", element)
    })
  }




}


export const renderAll = (elements, parents) => {


  renderCombines(elements, parents)

}
// renderAll([['cat', 'dog', 'fish' ] , ['big', 'smal']] , [['animals'] , ['size']])



export default render




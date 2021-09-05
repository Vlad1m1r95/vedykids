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
      try {
        parent.insertAdjacentHTML("beforeend", element)
      } catch (error) {
        console.log(error)
        console.log(parent)
        console.log(element)
      }

    })

  } else {
    elements.forEach(element => {
      try {
        parent.insertAdjacentElement("beforeend", element)
      } catch (error) {
        console.log(error)
        console.log(parent)
        console.log(element)
      }

    })
  }




}


export const renderAll = (elements, parents) => {


  renderCombines(elements, parents)

}
// renderAll([['cat', 'dog', 'fish' ] , ['big', 'smal']] , [['animals'] , ['size']])



export default render




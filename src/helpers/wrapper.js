const wrapper = (wrapId, WrapHTML, [...elem]) => {
   
  if(WrapHTML === null){
    
   let  wrap = document.getElementById(wrapId)
   if(wrap === null || undefined){
    wrapId.insertAdjacentHTML("afterbegin", [...elem].join(''))
    
     
  } else{
    wrap.insertAdjacentHTML("afterbegin", [...elem].join(''))
  }
     
     
  }
  // if(wrapId === null){
  //  const  wrapsting = WrapHTML
  //  const  wrap = new DOMParser().parseFromString(wrapsting, "text/xml")

  //  console.log(wrap.children[0].children[0].length)
  //   if(wrap.children[0].children.length > 0 ){
  //     console.log(`есть дочерние `)
  //     console.log(wrap.children[0].lastChild)
  //     if(wrap.children[0].lastChild.length > 0){
  //       console.log(`есть дочерние `)
  //      console.log(wrap.children[0].lastChild.lastChild) 
  //     }
  //     else{
  //       console.log(`у дочернего нет потомков`)
  //        const id = wrap.children[0].lastChild.getAttribute('id')
  //        console.log(id)
  //       const lastItem =  document.getElementById(id)
  //       lastItem.insertAdjacentHTML("afterbegin", [...elem].join(''))
  //     }
  //   }
  //    else {
  //      const last = wrap.children[0].last
  //      console.log(`нет дочерних`)
  //    }

   

  // }
  
  

}

const trueWrap = (elements, parent) => {
  elements.forEach(element => {
    elevent.appendChild(element + 1)
  })
}
export default wrapper



import setHendler from './../hendler.component'


const CategoryL1Hendler = (elements, arrayimg) => {
  const reducer = (e) => {
    e = event.target
    let len = arrayimg.length
     let previous = ''
     let current  = ''
     let next     = ''
    for(let i = 0 ; i < len; i++){
       current = arrayimg[i];
       previous = arrayimg[(i+len-1)%len];
       next = arrayimg[(i+1)%len]
    }
    

    // for (let i = 0; i < arrayimg.length ; ){

    //         previous = arrayimg[i===0? arrayimg.length-1:i-1];
            
    //       // alert('back')
       
    //        current = arrayimg[i]
           
       
    //        next = arrayimg[i === arrayimg.length-1?0:i+1]
           
    //        i++
    //   }

      switch (e.id) {
        case 'imageBack':
            console.log(current)
          break
        case 'appleImg':
            console.log(previous) 
          break
        case 'imageNext':
            console.log(next)
          break
      }

    
   
   
  }



  // for(let elem in elements){
  //   setHendler(elements[elem] , 'click', false, reduser)
  // }
  elements.forEach(element => {
    setHendler(element, 'click', false, reducer)
  })

  // 
  // setHendler(reg , 'click', false, foo)

}

export default CategoryL1Hendler
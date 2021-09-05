const isclientHeightImage = (className, size) => {
      const imglevel = document.querySelectorAll(className)
      let arrimg = []
      imglevel.forEach(element => {
        arrimg.push(element)
      })
      
     let result = arrimg.filter(image => image.clientHeight <= size)
     

      return result.length === arrimg.length
  
  }

  export default isclientHeightImage
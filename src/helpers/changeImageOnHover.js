const changeImageOnHover = (images, srchover, src) => {


  for (let image in images){
    images[image].addEventListener('mouseover', (e) => {
      e.target.src = srchover[image]
      // event.relatedTarget.src = src[image]
    })
    images[image].addEventListener('mouseout', (e) => {
      e.target.src = src[image]
      // event.relatedTarget.src = src[image]
    })


    // images[image].src = src[image]
  }
}

export default changeImageOnHover
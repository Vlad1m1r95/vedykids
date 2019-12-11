const beautifyKeyPng = (array, re) => {
  let hashvoices = Object.create(null)

  array.forEach((voice ) => {
    let keyvoice = voice.replace(re, "")
     let a = keyvoice.replace(/\/$/g, "")
     let aa = a.replace(/.png/g, "")
     let b =  aa.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })
    
     if( b.search(/.*\.*\//)  != -1){
       let  c =  b.replace(/.*\.*\//, "")
       keyvoice = c
     } else {
       keyvoice =  b
     }
     
    
      hashvoices[keyvoice] = voice
      
    } 
    )
    return hashvoices
  
}

export default beautifyKeyPng
const beautifyKeyM4a = (array, re) => {
  let hashvoices = Object.create(null)

  array.forEach((voice , i) => {
    let keyvoice = voice.replace(re, "")
     let a = keyvoice.replace(/\/$/g, "")
     let aa = a.replace(/.m4a/g, "")
     let b = aa.replace(/^\//g, "")
     let bb = b.replace(/^\//g, "")
     let c = bb.replace(/(')/g, "")
     let cc = c.replace(/-([a-z])/g, function (g) { return g[1].toUpperCase(); })
    
     if(cc.search(/.*\.*\//)  != -1){
       let  kk = cc.replace(/.*\.*\//, "")
       keyvoice = kk
     } else {
       keyvoice = cc
     }
     
    
      hashvoices[keyvoice] = voice
      
    } 
    )
    return hashvoices
  
}

export default beautifyKeyM4a
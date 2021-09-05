
async function supportsWebp() {
  if (!self.createImageBitmap) return false;
  
  const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
  console.log(webpData)
  const blob = await fetch(webpData).then(r => r.blob());
  return createImageBitmap(blob).then(() => true, () => false);
}

(async function()  {
  let result = Boolean
  if(await supportsWebp()) {
     localStorage.setItem('canIuseWebp', true)
    console.log('Victory ! your browser supports webp');
  }
  else {
   localStorage.setItem('canIuseWebp', false)
    console.log('your browser does not support webp.')
  }
})();

// async function supportsWebp() {
//   if (!self.createImageBitmap) return false;
  
//   const webpData = 'data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=';
//   console.log(webpData)
//   const blob = await fetch(webpData).then(r => r.blob())
//   return createImageBitmap(blob).then(() => true, () => false)
// }


const CanIuseWebp =  supportsWebp

export default CanIuseWebp
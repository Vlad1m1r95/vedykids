import translate from './../../translate';
const replacePathImage = ( MODE, input) => {


  let re = /(img).(src).(img).(categoryL1).(fruit)/g
  let a = input.replace(re , "")
  let aa = a.replace(/.png/g, "")
  let b = aa.replace(/^\//g, "")
  let bb = b.replace(/^\//g, "")
  let output = bb
  console.log(output)
  output = translate(MODE, output)
  
  

  return output
}
export default replacePathImage
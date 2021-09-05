import DictionaryCheckWord from './../../trycatch/DictionaryCheck';
const replacePathImage = (MODE, input) => {


  let re = /.*\//g
  let a = input.replace(re, "")
  let aa = a.replace(/.png/g, "")
  let output = aa

  output = DictionaryCheckWord(MODE, output)



  return output
}
export default replacePathImage
import colorfulText from './../fonts/colorful.helper';


const AnythingTopaint = (elem, string) => {
  const Text = document.getElementById(elem)
  let situation = Boolean
  let err = ''
  let str = ` Master! I don’t see what to paint 👷‍♂️🤷‍♂️ 👉`
  let str2 = ` Show me the wall 👉  %c ${elem}`
  let strStyle1 = 'background: #593800; color: #F5EBF5; font-size: 24px; font-family: Roboto; font-style: normal'
  let strStyle2 = 'background: #593800; color: #E74752; font-size: 24px; font-family: Roboto; font-style: normal'
  let strStyle3 = 'background: #593800; color: #626DF2; font-size: 24px; font-family: Roboto; font-style: normal'
  try {
    situation = true
    colorfulText(Text, string)
  } catch (error) {
    err = error
    situation = false
  }
  if (!situation) {
    console.log('%c' + str + '%c' + `${err}.` + '%c' + str2, strStyle1, strStyle2, strStyle1, strStyle3)
  }
}
export default AnythingTopaint
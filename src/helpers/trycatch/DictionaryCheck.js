import translate from './../translate'
const DictionaryCheckWord = (mode, word) => {
  let title = null
  try {
    title = translate(mode, word)

  } catch (error) {
    title = null
    console.log('%c' + `🤦‍♂️ Damn again! ${error} 🤷‍♀️🤷‍♂️🤷‍♀️ , missing key : ${word}`, 'background: #453A46; color: #F5EBF5; font-size: 24px; font-family: Roboto; font-style: normal')

  }
  console.log(title)
  if (title !== "") {
    return title
  } else {
    console.log('%c' + `🤦‍♂️ Damn again!  🤷‍♀️🤷‍♂️🤷‍♀️ , missing key : ${word}`, 'background: #453A46; color: #F5EBF5; font-size: 24px; font-family: Roboto; font-style: normal')
  }


}

export default DictionaryCheckWord
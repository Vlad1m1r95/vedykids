const AudioCheck = (audio, play) => {
  let situation = null
  if (play !== undefined) {
    play.then(_ => {
      audio.currentTime = 2
      audio.volume = 0.1
    })
      .catch(error => {
        situation = 'warn'
        console.log(error)
        console.log('%c' + 'Attention‼🔞  Unknown 👉💩 with a promise play() . Just in case, I processed it so as not to see red spots(⛔) 🧔👍', 'background: #211949; color: #F5EBF5; font-size: 24px; font-family: Roboto; font-style: normal')
      });
  }
  if (situation === 'warn') {
    console.log('%c' + 'Attention‼🔞 Unknown 👉💩 with a promise play(). Just in case, I processed it so as not to see red spots(⛔) 🧔👍', 'background: #211949; color: #F5EBF5; font-size: 24px; font-family: Roboto; font-style: normal')
  }
}

export default AudioCheck
const VoiceCheck = (voice, play, ) => {

  if (play !== undefined) {
    voice.currentTime = 0.5
    voice.volume = 1
  }
  else {
    console.log('%c' + "Can't speak no voice 🔈❌😭", 'background: #211949; color: #F5EBF5; font-size: 24px; font-family: Roboto; font-style: normal')
  }
}

export default VoiceCheck




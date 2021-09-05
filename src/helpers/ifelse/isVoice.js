import PlayVoice from './../../components/speacks/voice.speack'

const isVois = (voice) => {

  if (voice === undefined) {
    console.log('%c' + "Can't speak no voice 🔈❌😭", 'background: #211949; color: #F5EBF5; font-size: 24px; font-family: Roboto; font-style: normal')
  } else {
    PlayVoice(voice)
  }
}

const VoiceCheck = isVois

export default VoiceCheck
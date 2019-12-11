import VoiceCheck from '../../helpers/ifelse/VoiceCheck'

const PlayVoice = (src, time) => {
  const voice = new Audio(src)


  setTimeout(function speack() {
    let play = voice.play()
    VoiceCheck(voice, play)
  }, time)

  // VoiceCheck(play, time)



  Function.prototype.VoiceStop = function (stopAudio) {
    stopvoice = voice
    HTMLAudioElement.prototype.stop = function () {
      this.pause();
      this.currentTime = 0.0;
    }
    stopvoice.stop()

  }

}

export default PlayVoice


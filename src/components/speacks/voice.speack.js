const PlayVoice = (src, time) => {
  setTimeout(function speack(){
    const voice = new Audio(src)
    voice.play()
    voice.currentTime = 0
    voice.volume = 1
  }, time)

  Function.prototype.VoiceStop = function(stopAudio){
    stopvoice = voice
    HTMLAudioElement.prototype.stop = function()
    {
    this.pause();
    this.currentTime = 0.0;
    }
    stopvoice.stop()
  
  }
  
}

export default PlayVoice


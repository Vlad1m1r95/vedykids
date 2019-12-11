import newDOM from './../../helpers/newDomel'
import defaultAudio from './../../music/mp3/lion-cub-and-turtle.mp3'
import AudioCheck from './../../helpers/trycatch/AudioCheck'
const PlayAudio = (src) => {
  if (src === undefined || null) {
    src = defaultAudio
  }
  const audio = new Audio(src)
  let play = audio.play()
  AudioCheck(audio, play)

  Function.prototype.AudioStop = function (stopAudio) {
    stopAudio = audio
    HTMLAudioElement.prototype.stop = function () {
      this.pause();
      this.currentTime = 0.0;
    }
    stopAudio.stop()

  }

}



export default PlayAudio
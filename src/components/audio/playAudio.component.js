import newDOM from './../../helpers/newDomel'
import defaultAudio from './../../music/mp3/lion-cub-and-turtle.mp3'
const PlayAudio = (src) => {
  if(src === undefined || null ){
    src = defaultAudio
  }
  const audio = new Audio(src)
   audio.play()
   audio.currentTime = 2
   audio.volume = 0.5

  Function.prototype.AudioStop = function(stopAudio){
    stopAudio = audio
    HTMLAudioElement.prototype.stop = function()
    {
    this.pause();
    this.currentTime = 0.0;
    }
     stopAudio.stop()
  
  }

}



export default PlayAudio
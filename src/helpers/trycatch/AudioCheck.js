const AudioCheck = (audio, play) => {
  let situation = null;
  if (play !== undefined) {
    play
      .then((_) => {
        audio.currentTime = 2;
        audio.volume = 0.1;
      })
      .catch((error) => {
        situation = "warn";
      });
  }
  if (situation === "warn") {
  }
};

export default AudioCheck;

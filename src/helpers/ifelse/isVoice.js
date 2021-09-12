import PlayVoice from "./../../components/speacks/voice.speack";

const isVois = (voice) => {
  if (voice === undefined) {
  } else {
    PlayVoice(voice);
  }
};

const VoiceCheck = isVois;

export default VoiceCheck;

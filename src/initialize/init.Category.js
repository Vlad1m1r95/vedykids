import PlayAudio from "../components/audio/playAudio.component";
import CreateCategory from "../components/frontend/category/CreateCategory.component";
import Loadtimer from "../components/frontend/preloader.component";
import voicesarr from "./../voice/script/voices";
import ucFirst from "./../helpers/ucFirst";

const initCategory = (
  app,
  mainContent,
  state,
  imagesCategory,
  category,
  levelDetails
) => {
  let replaceCategory = category.replace(/ ([a-z])/g, function (g) {
    return g[1].toUpperCase();
  });

  const MODE = state;
  let voices = voicesarr(MODE);

  let voicesGroup = voices.group;

  let loaderVoice = voicesGroup[`${replaceCategory}`];
  PlayAudio.AudioStop();
  PlayAudio();

  CreateCategory(
    app,
    mainContent,
    imagesCategory,
    MODE,
    loaderVoice,
    category,
    levelDetails
  );
  const preloader = document.getElementById("preloader");
  Loadtimer(app, 3000, preloader);
};

export default initCategory;

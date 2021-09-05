import level from "./../../../Template/levels/level2.hbs";
import DictionaryCheckWord from "./../../../helpers/trycatch/DictionaryCheck";
import getContentHashImages from "./../../../helpers/getContentHashImages";
import imgBack from "./../../../img/category/back.png";
import imgNext from "./../../../img/category/next.png";
import questionMark from "./../../../img/category/question.png";
import colorfulText from "./../../../helpers/fonts/colorful.helper";
import AnythingTopaint from "./../../../helpers/trycatch/AnythingToPaint";
import $get from "./../../../helpers/DOM/getElementById";
import setHendler from "./../../../hendlers/hendler.component";
import replacePathImage from "./../../../helpers/category/re/replacepath.helper";
import $query from "../../../helpers/DOM/getQueryselector";
import { Navigate } from "./../../../routing/RoutersPath";
import level2Controller from "../../../hendlers/category/level2.controller";
import voicesarr from "./../../../voice/script/voices";
import PlayVoice from "./../../speacks/voice.speack";
import getRandomTwoElements from "./../../../helpers/arrays";

const Level2 = (app, imagesCategory, state, category) => {
  const voice = voicesarr(MODE);

  const MODE = state;
  const re = {
    path: /.*\//g,
    type: /.png/g,
  };

  const context = {
    ...getContentHashImages(imagesCategory, re, MODE),
    Category: category,
  };

  Array.prototype.rand = function getRandom(arr) {
    console.log(arr);
    return Math.floor(Math.random() * this.length);
  };
  // random

  const getTwoElementsOnload = (input) => {
    let elem1 = input[input.rand()];
    let fluidarray = input.filter(
      (elem) => replacePathImage("ENG", elem) !== elem1
    );
    let elem2 = fluidarray[fluidarray.rand()];
    let twoElements = {
      first: elem1,
      second: elem2,
    };
    return twoElements;
  };

  let twoElments = getTwoElementsOnload(imagesCategory);

  let elem1 = twoElments.first;
  let elem2 = twoElments.second;
  let words = [replacePathImage("ENG", elem1), replacePathImage("ENG", elem2)];
  let trueelem = words[words.rand()];

  const levelProperty = {
    title:
      DictionaryCheckWord(MODE, `show, where!`) +
      " " +
      DictionaryCheckWord(MODE, trueelem),
    ImageLeft: elem1,
    trueword: DictionaryCheckWord("ENG", trueelem),
    imageleftAlt: replacePathImage("ENG", elem1),
    arrowLeft: imgBack,
    arrowRight: imgNext,
    questionMark: questionMark,
    altQuestion: `what??`,
    ImageRight: elem2,
    imageRightAlt: replacePathImage("ENG", elem2),
    progress: DictionaryCheckWord(MODE, "progress"),
    progressBar: `1/${imagesCategory.length}`,
    randomID: context.images.rand(),
    ...voice,
    state: state,
    category: context.category,
  };

  app.innerHTML = level(levelProperty);

  // if (rootProperty === null || undefined) {
  //   app.innerHTML = level(levelProperty)
  // } else {
  //   app.innerHTML = level(rootProperty)
  // }

  AnythingTopaint("titleText", "title");
  AnythingTopaint("progresstext", "progresstext");

  const leftImage = $get("leftImage");
  const leftArrow = $get("arrowLeft");
  const current = $get("current");
  const RightArrow = $get("arrowRight");
  const RightImage = $get("RightImage");
  const progress = $get("blockNumberProgress");

  const trueword = DictionaryCheckWord("ENG", trueelem);

  const hashArray = {
    leftImage: leftImage,
    leftArrow: leftArrow,
    Current: current,
    RightArrow: RightArrow,
    RightImage: RightImage,
    trueword: trueword,
    progress: progress,
    mode: state,
    ...context.text,
    category: context.Category,
  };
  const eventsArray = [leftImage, leftArrow, current, RightArrow, RightImage];

  level2Controller(app, eventsArray, hashArray, imagesCategory, context.text);
};

export default Level2;

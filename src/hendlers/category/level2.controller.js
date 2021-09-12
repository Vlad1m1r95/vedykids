import setHendler from "./../hendler.component";
import $get from "../../helpers/DOM/getElementById";
import replacePathImage from "./../../helpers/category/re/replacepath.helper";
import colorfulText from "./../../helpers/fonts/colorful.helper";
import { Navigate, LoaderCategory, Back } from "./../../routing/RoutersPath";
import shuffle from "./../../helpers/shuffle.helper";
import createQuestions from "./../../helpers/createQuestions.helper";
import { Images } from "./../../img/script/images";
import Level1 from "./../../components/frontend/category/Level1";
// import LoaderCategory from './../../components/frontend/category/LoaderCategory'
import getContentHashImages from "./../../helpers/getContentHashImages";
import PlayVoice from "../../components/speacks/voice.speack";
import rightVoiceRu from "../../voice/ru/category/all/well-done-right.m4a";
import rightVoiceEn from "../../voice/eng/category/all/well-done-right.m4a";
import noRightVoiceRu from "../../voice/ru/category/all/no-no-right.m4a";
import noRightVoiceEn from "../../voice/eng/category/all/no-no-right.m4a";

const level2Controller = (app, elements, context, images, text) => {
  Array.prototype.rand = function getRandom(arr) {
    return this[Math.floor(Math.random() * this.length)];
  };
  Array.prototype.index = function getRandom(arr) {
    return Math.floor(Math.random() * this.length);
  };

  let title = $get("titleText");
  let array = [1, 2, 3, 4, 5, 6, 7, 8];

  let arraybutton = ["leftImage", "RightImage"];

  let questions = createQuestions(context.mode, images);
  shuffle(questions);
  shuffle(arraybutton);

  title.innerHTML = questions[0].title;
  colorfulText(title, "title");
  title.dataset.trueWord = questions[0].correctAnswer;
  $get(arraybutton[0]).src = `/${questions[0].correctImage}`;
  $get(arraybutton[0]).alt = questions[0].correctAnswer;
  $get(arraybutton[1]).src = `/${questions[0].image}`;
  $get(arraybutton[1]).alt = replacePathImage(context.mode, questions[0].image);

  const re = {
    path: /.*\//g,
    type: /.png/g,
  };
  const ContentHashIamges = {
    ...getContentHashImages(images, re, context.mode),
    Category: category,
  };
  const rowContent = $get("rowContent");
  const contextProperty = {
    parent: rowContent,
    mode: context.mode,
    hashimages: ContentHashIamges,
    collums: 8,
    size: 3,
  };
  let category = context.category;
  console.log(category);
  const parent = contextProperty.parent;

  let iterator = 1;

  const reducer = (e) => {
    e = event.target;
    console.log(e);

    let alt = e.alt;
    let imgScr = e.src;
    shuffle(arraybutton);
    if (alt === "left") {
      alt = $get("leftImage").alt;
      imgScr = $get("leftImage").src;
    }
    if (alt === "right") {
      alt = $get("RightImage").alt;
      imgScr = $get("RightImage").src;
    }

    if (
      iterator >= questions.length &&
      alt === title.getAttribute("data-true-word")
    ) {
      let colid = array.rand();
      let progressimage = $get(`image-${colid}`);
      progressimage.src = imgScr;
      if (localStorage.getItem("lang") === "RU") {
        PlayVoice(rightVoiceRu);
      } else {
        PlayVoice(rightVoiceEn);
      }

      // setTimeout(() => Navigate('Level/2'), 3000)
      // Level(app, container, context.mode, Images)

      LoaderCategory(contextProperty, category, 3300);
      setTimeout(() => Navigate("LoaderCategory"), 1000);
      setTimeout(() => Navigate("Level/2"), 4000);

      // setTimeout(() => Navigate('Level/2'), 3000)

      // while (parent.firstChild) {
      //   parent.removeChild(parent.firstChild)
      // }
    } else {
      if (alt === title.getAttribute("data-true-word")) {
        if (localStorage.getItem("lang") === "RU") {
          PlayVoice(rightVoiceRu);
        } else {
          PlayVoice(rightVoiceEn);
        }

        let colid = array.rand();
        array = array.filter((number) => number !== colid);
        let progressimage = $get(`image-${colid}`);

        progressimage.src = imgScr;
        let progress = $get(`blockNumberProgress`);

        setTimeout(() => {
          try {
            title.innerHTML = questions[iterator].title;
            title.dataset.trueWord = questions[iterator].correctAnswer;
            $get(arraybutton[0]).alt = questions[iterator].correctAnswer;
            $get(arraybutton[0]).src = `/${questions[iterator].correctImage}`;
            $get(arraybutton[1]).alt = replacePathImage(
              context.mode,
              questions[iterator].image
            );

            $get(arraybutton[1]).src = `/${questions[iterator].image}`;
            iterator++;
            progress.innerHTML = `${iterator}/${questions.length}`;
          } catch (error) {
            console.log(error);
          }
        }, 1000);
      } else {
        if (localStorage.getItem("lang") === "RU") {
          PlayVoice(noRightVoiceRu);
        } else {
          PlayVoice(noRightVoiceEn);
        }
      }
    }
  };
  elements.forEach((element) => {
    setHendler(element, "click", false, reducer);
  });
  // window.onload = getRandomTwoElements(images)
};

export default level2Controller;

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

const level2Controller = (app, elements, context, images, text) => {
  Array.prototype.rand = function getRandom(arr) {
    console.log(arr);
    return this[Math.floor(Math.random() * this.length)];
  };
  Array.prototype.index = function getRandom(arr) {
    console.log(arr);
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
    shuffle(arraybutton);

    if (
      iterator >= questions.length &&
      e.alt === title.getAttribute("data-true-word")
    ) {
      let colid = array.rand();
      let progressimage = $get(`image-${colid}`);
      progressimage.src = e.src;

      // setTimeout(() => Navigate('Level/2'), 3000)
      // Level(app, container, context.mode, Images)

      LoaderCategory(contextProperty, category, 33000);
      Navigate("LoaderCategory");

      // setTimeout(() => Navigate('Level/2'), 3000)

      // while (parent.firstChild) {
      //   parent.removeChild(parent.firstChild)
      // }
    } else {
      if (e.alt === title.getAttribute("data-true-word")) {
        alert("Правильно");

        let colid = array.rand();
        array = array.filter((number) => number !== colid);
        let progressimage = $get(`image-${colid}`);

        progressimage.src = e.src;
        let progress = $get(`blockNumberProgress`);

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
      } else {
        alert("Не правильно");
      }
    }
  };

  elements.forEach((element) => {
    setHendler(element, "click", false, reducer);
  });
  // window.onload = getRandomTwoElements(images)
};

export default level2Controller;

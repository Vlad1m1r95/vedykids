import { CreateDOMElement, CloneElement } from "../../../helpers/newDomel";
import render, { renderAll } from "../../../helpers/render";
import imgApple from "./../../../img/level1Item/apple.png";
import imgBack from "./../../../img/category/back.png";
import imgNext from "./../../../img/category/next.png";
import colorfulText from "../../../helpers/fonts/colorful.helper";
import SliderEliments from "../../../helpers/category/sliderElements";
import getContentHashImages from "./../../../helpers/getContentHashImages";
import Level1Template from "./../../../Template/levels/level1.hbs";
import $get from "../../../helpers/DOM/getElementById";

const Level1 = (
  app,
  mainContent,
  imagesCategory,
  state,
  loaderVoice,
  category
) => {
  const MODE = state;

  const re = {
    path: /.*\//g,
    type: /.png/g,
  };

  const ContentHashIamges = {
    ...getContentHashImages(imagesCategory, re, MODE),
    Category: category,
  };

  const rowContentOld = document.getElementById("rowContent");
  rowContentOld.remove;
  const divDefaultProperty = {
    id: "rowContent",
    classList: "row",
  };
  const imgDefaultProperty = {
    el: "img",
    id: "currentImage",
    classList: "img-fluid img-block-center",
  };

  const spanDefaultProperty = {
    id: "spanText",
    el: "span",
    classList: "image-text",
    text: ContentHashIamges.startText,
  };

  const Level1TemplateProperty = {
    Back_img: `/${imgBack}`,
    Next_img: `/${imgNext}`,
    Current_img: `/${ContentHashIamges.images[0]}`,
    Text: ContentHashIamges.startText,
    data_image: ContentHashIamges.action[0],
  };
  app.innerHTML = Level1Template(Level1TemplateProperty);

  const textImage = $get("spanText");
  colorfulText(textImage, "col-image");

  const back = $get("imageBack");
  const current = $get("currentImage");
  const next = $get("imageNext");
  const imageText = $get("spanText");

  const navigateButton = {
    back: back,
    next: next,
  };
  const Currentimage = {
    current: current,
    title: imageText,
  };

  SliderEliments(
    MODE,
    imagesCategory,
    navigateButton,
    Currentimage,
    ContentHashIamges,
    loaderVoice
  );
};

export default Level1;

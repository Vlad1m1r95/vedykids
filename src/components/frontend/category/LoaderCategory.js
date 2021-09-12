import titletext from "./../../../Template/_bloks/title.hbs";
import titleTemplate from "./../../../Template/_bloks/title.hbs";
import translate from "../../../helpers/translate";
import { renderAll } from "./../../../helpers/render";
import render from "./../../../helpers/render";

import CreateColummsImages from "./../../../helpers/CreateColummsImages";
import colorfulText from "./../../../helpers/fonts/colorful.helper";
import isclientHeightImage from "./../../../helpers/fonts/imagesize/clientHeightImage.helper";
import DictionaryCheckWord from "./../../../helpers/trycatch/DictionaryCheck";
import LoaderCategoryTemplate from "./../../../Template/LoaderCategory.hbs";
import $get from "../../../helpers/DOM/getElementById";
import voicesarr from "../../../voice/script/voices";

const LoaderCategory = (context, category, timer) => {
  // const CategoryVoice =  voicesarr(localStorage.getItem('lang')).group
  const app = $get("app");
  let LoaderCategoryProperty = {
    title: DictionaryCheckWord(context.mode, `${category}`),
  };
  const contentWrap = LoaderCategoryTemplate(LoaderCategoryProperty);
  app.innerHTML = contentWrap;

  let collums = CreateColummsImages(
    context.collums,
    context.size,
    context.mode,
    context.hashimages
  );
  const rowContent = $get("rowContent");

  renderAll(collums, rowContent);

  const Title = document.getElementById("titleText");

  colorfulText(Title, "title");

  if (isclientHeightImage(".img-level", 310)) {
    Title.classList.add("normal-title");
  } else {
    Title.classList.add("small-title");
  }

  setTimeout(() => parent.remove(), timer);
};

export default LoaderCategory;

import { CreateDOMElement, CloneElement } from "./newDomel";
import render from "./render";
import translate from "./translate";
import getContentHashImages from "./getContentHashImages";

const CreateColumms = (number, Size, MODE, Images) => {
  const numberOfColumns = number;
  const columnSize = Size;

  const colDefaultProperty = {
    id: "col-1-item",
    classList: `col-${columnSize} mb0`,
  };

  const imgDefaultProperty = {
    el: "img",
    classList: "img-fluid img-level",
  };
  const textDefaultProperty = {
    el: "span",
    text: translate(MODE, "Фрукты"),

    classList: "col-img-text",
  };

  const col1item = CreateDOMElement(colDefaultProperty);
  const imgblock1 = CreateDOMElement(colDefaultProperty);
  const img1 = CreateDOMElement(imgDefaultProperty);
  img1.src = `/${Images[0]}`;

  img1.alt = "imageCol1";
  img1.id = "fruit";
  const imgtext1 = CreateDOMElement(textDefaultProperty);
  imgblock1.className = "img-block-center";
  imgblock1.id = "imgBlock1";
  render(imgtext1, imgblock1);
  render(img1, imgblock1);
  render(imgblock1, col1item);

  let arrayText = [
    "Фрукты",
    "Овощи",
    "Транспорт",
    "Домашние животные",
    "Дикие животные",
    "Мебель",
    "Одежда",
    "Профессии",
  ];

  let arraIdAction = [
    "fruit",
    "vegetables",
    "transport",
    "Pets",
    "Wildanimals",
    "Furniture",
    "Clothes",
    "Professions",
  ];

  let arrayCollum = [col1item];

  for (let col = 2; col <= numberOfColumns; col++) {
    let colitem = CloneElement(col1item, `col-${col}-item`, undefined, false);
    let imgblock = CloneElement(imgblock1, `imgblock${col}`, undefined, false);
    let img = CloneElement(img1);
    let imgtext = CloneElement(imgtext1);

    img.src = `/${Images[col - 1]}`;
    img.id = arraIdAction[col - 1];
    imgtext.innerText = arrayText[col - 1];
    // action()
    imgtext.innerText = translate(MODE, imgtext.innerText);
    render(imgtext, imgblock);
    render(img, imgblock);
    render(imgblock, colitem);

    arrayCollum.push(colitem);
  }
  return arrayCollum;
};

export default CreateColumms;

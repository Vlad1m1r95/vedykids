import { CreateDOMElement, CloneElement } from "./newDomel";
import render from "./render";
import MODE from "./../lang/lang";
import translate from "./translate";

const CreateColummsImages = (number, Size, MODE, contenthash) => {
  const numberOfColumns = number;
  const columnSize = Size;

  const colDefaultProperty = {
    id: "col-1-item",
    classList: `col-${columnSize} my-auto`,
  };

  const imgDefaultProperty = {
    el: "img",
    classList: "img-fluid img-level",
  };
  const textDefaultProperty = {
    el: "span",
    text: translate(MODE, contenthash?.startText || ""),

    classList: "col-img-text",
  };

  const col1item = CreateDOMElement(colDefaultProperty);
  const imgblock1 = CreateDOMElement(colDefaultProperty);
  const img1 = CreateDOMElement(imgDefaultProperty);
  img1.src = contenthash.images[0];

  img1.alt = "imageCol1";
  img1.id = contenthash.action[0];
  const imgtext1 = CreateDOMElement(textDefaultProperty);
  imgblock1.className = "img-block-center";
  imgblock1.id = "imgBlock1";
  render(imgtext1, imgblock1);
  render(img1, imgblock1);
  render(imgblock1, col1item);
  const parent = document.getElementById("imgBlock1");

  let arrayText = contenthash.text;
  let arraIdAction = contenthash.action;

  let arrayCollum = [col1item];
  let arrayImages = contenthash.images;

  for (let col = 2; col <= numberOfColumns; col++) {
    let colitem = CloneElement(col1item, `col-${col}-item`, undefined, false);
    let imgblock = CloneElement(imgblock1, `imgblock${col}`, undefined, false);
    let img = CloneElement(img1);
    let imgtext = CloneElement(imgtext1);

    img.src = arrayImages[col - 1];
    img.id = arraIdAction[col - 1];
    imgtext.innerText = arrayText[col - 1];
    // action()
    //  imgtext.innerText = translate(MODE, imgtext.innerText)
    render(imgtext, imgblock);
    render(img, imgblock);
    render(imgblock, colitem);

    arrayCollum.push(colitem);
  }
  return arrayCollum;
};

export default CreateColummsImages;

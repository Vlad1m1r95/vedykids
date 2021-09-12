import DictionaryCheckWord from "./trycatch/DictionaryCheck";

const getContentHashImages = (arrayImages, re, MODE) => {
  let id = [];
  let text = [];
  arrayImages.forEach((image) => {
    let a = image.replace(re.path, "");
    let aa = a.replace(re.type, "");
    id.push(aa);
    text.push(DictionaryCheckWord(MODE, aa));
  });
  let contenthash = {
    startText: text[0],
    text: text,
    action: id,
    images: arrayImages,
  };

  return contenthash;
};

export default getContentHashImages;

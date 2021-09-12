import replacePathImage from "./category/re/replacepath.helper";
import $get from "./DOM/getElementById";
import DictionaryCheckWord from "./trycatch/DictionaryCheck";
const getSetTwoimages = (images, word, arrayid) => {
  Array.prototype.rand = function getRandom(arr) {
    return this[Math.floor(Math.random() * this.length)];
  };

  let image1 = images.filter(
    (image) =>
      replacePathImage("ENG", image) === DictionaryCheckWord("ENG", word)
  );
  let image2array = images.filter((image) => image !== image1);
  let image2 = image2array.rand();
  let twoImages = {
    first: image1,
    second: image2,
  };

  $get(`${arrayid.rand()}`).src = twoImages.first;
  $get(`${arrayid.rand()}`).src = twoImages.second;
};

export default getSetTwoimages;

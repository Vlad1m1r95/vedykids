import { importAll } from "../../helpers/importAll.helper";

let fruit = [];
fruit = importAll(require.context("../category/fruit", true, /\.png$/), fruit);
let vegetables = [];
vegetables = importAll(
  require.context("../category/vegetables", true, /\.png$/),
  vegetables
);

let transport = [];
transport = importAll(
  require.context("../category/transport", true, /\.png$/),
  transport
);

let pets = [];
pets = importAll(require.context("../category/pets", true, /\.png$/), pets);

let wildAnimals = [];
wildAnimals = importAll(
  require.context("../category/wildanimals", true, /\.png$/),
  wildAnimals
);

let furniture = [];
furniture = importAll(
  require.context("../category/furniture", true, /\.png$/),
  furniture
);

let clothes = [];
clothes = importAll(
  require.context("../category/clothes", true, /\.png$/),
  clothes
);

let professions = [];
professions = importAll(
  require.context("../category/professions", true, /\.png$/),
  professions
);

let CategoryImages = {
  Fruit: fruit,
  Vegetables: vegetables,
  Transport: transport,
  Pets: pets,
  WildAnimals: wildAnimals,
  Furniture: furniture,
  Clothes: clothes,
  Professions: professions,
};

const GetImagesCategory = (category) => {
  let data = "";
  switch (category) {
    case "Fruit":
      data = CategoryImages.Fruit;
      break;
    case "Vegetables":
      data = CategoryImages.Vegetables;
      break;

    case "Transport":
      data = CategoryImages.Transport;
      break;

    case "Pets":
      data = CategoryImages.Pets;
      break;

    case "Furniture":
      data = CategoryImages.Furniture;
      break;

    case "WildAnimals":
      data = CategoryImages.WildAnimals;
      break;

    case "Clothes":
      data = CategoryImages.Clothes;
      break;

    case "Professions":
      data = CategoryImages.Professions;
      break;
  }

  return data;
};

// all = importAll(require.context('../category/', true, /\.png$/), all)
const StartCategoryImages = () => {
  let keysCategory = Object.keys(CategoryImages);
  let FirstImgArr = [];
  keysCategory.forEach((category) => {
    FirstImgArr.push(CategoryImages[category][3]);
  });
  console.log(keysCategory);
  return FirstImgArr;
};

export let Images = StartCategoryImages();
console.log(Images);

export default GetImagesCategory;

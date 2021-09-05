import lineLoader from "./lineloader.component";

//? gif
import webp1 from "./../../img/Spinner-Preloader/dance_fruit.webp";
import gif1 from "./../../img/Spinner-Preloader/dance_fruit.gif";
import gif2 from "./../../img/Spinner-Preloader/dog.gif";
import webp2 from "./../../img/Spinner-Preloader/dog.webp";
import gif3 from "./../../img/Spinner-Preloader/crocodile.gif";
import webp3 from "./../../img/Spinner-Preloader/crocodile.webp";

const loadData = (app = app, time = 700, preloader, gifs) => {
  console.log(gifs);
  return new Promise((resolve, reject) => {
    console.log(document.location.hostname, "hostname");
    let preloaderEl = preloader;
    console.log(preloaderEl);
    setTimeout(resolve, time);
    lineLoader(app, time + 300);
    let allAnimation = [];
    let animateImage = "";
    let image = null;

    //  preloaderEl.classList.add('preloader-gif')
    if (localStorage.getItem("canIuseWebp") !== null || undefined) {
      if (localStorage.getItem("canIuseWebp") === "true") {
        allAnimation = [webp1, webp2, webp3];

        if (gifs !== undefined || null) {
          image = gifs.webp;
        }
      } else {
        allAnimation = [gif1, gif2, gif3];

        if (gifs !== undefined || null) {
          image = gifs.webp;
        }
      }
    } else {
      allAnimation = [gif1, gif2, gif3];
      if (gifs !== undefined || null) {
        image = gifs.webp;
      }
    }

    animateImage =
      image || allAnimation[Math.floor(Math.random() * allAnimation.length)];
    console.log(animateImage, "urlPreloaded");
    preloaderEl.style.background = `#fbfbfb url(/${animateImage}) no-repeat center center`;
  });
};
const Loadtimer = (app, time, preloader, gifs) => {
  loadData(app, time, preloader, gifs).then(() => {
    let preloaderEl = preloader;

    preloaderEl.classList.add("hidden");
    preloaderEl.classList.remove("visible");
  });
};

export default Loadtimer;

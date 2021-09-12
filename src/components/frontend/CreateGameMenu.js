import colorfulText from "../../helpers/fonts/colorful.helper";
import GameMenuHendler from "../../hendlers/levels.hendler/GameMenu.hendler";

import state from "./../../lang/MODE";
import DictionaryCheckWord from "./../../helpers/trycatch/DictionaryCheck";

import GameMenuTemplate from "./../../Template/GameMenu.hbs";

//? images
import settingimg from "./../../img/icon/setting.png";
import playimg from "./../../img/icon/play.png";
import exitimg from "./../../img/icon/exit.png";

//! Cursor
import cursorPointer from "./../../img/cursor/pointer32px.svg";
import cursorDefault from "./../../img/cursor/default32px.svg";

const createGameMenu = (app) => {
  const MODE = state.getstate();
  const GameMenuProperty = {
    // title: DictionaryCheckWord(MODE, 'Привет ! Давай играть !'),
    setting: settingimg,
    Play: playimg,
    Exit: exitimg,
  };

  // let oldpreloader = document.getElementById('preloader')
  // oldpreloader.remove()
  app.innerHTML = GameMenuTemplate(GameMenuProperty);

  //? colorful text
  const PlayText = document.getElementById("letsPlayText");
  // colorfulText(PlayText, 'content')

  //! add event
  const rowContent = document.getElementById("row-content");
  const setting = document.getElementById("imgSetting");
  const play = document.getElementById("imgPlay");
  const exit = document.getElementById("imgExit");
  const colContent = document.getElementById("col-content");
  const eventElements = [setting, play, exit];

  GameMenuHendler(eventElements, app, rowContent, colContent, state);

  app.style.cursor = `url(${cursorDefault}) , default `;
  eventElements.forEach((element) => {
    element.style.cursor = `url(${cursorPointer}) , pointer `;
  });
};

export default createGameMenu;

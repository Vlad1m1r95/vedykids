
import initGameMenu from './init.GameMenu'
import initChoiceLevel from './init.ChoiceLevel'
import initLevel from './init.Level'
import initCategory from './init.Category'
import initSetting from './init.Setting'
import initHomePage from './init.Homepage'



const init = {
  GameMenu: (state) => initGameMenu(state),
  ChoiceLevel: (app, container, colContent, state) => initChoiceLevel(app, container, colContent, state),
  Level: (app, container, state, Images, level) => initLevel(app, container, state, Images, level),
  Category: (app, mainContent, state, imagesCategory, category, level) => initCategory(app, mainContent, state, imagesCategory, category, level),
  Setting: (container) => initSetting(container),
  HomePage: (app, preloader) => initHomePage(app, preloader),

}

export default init

import Router from './Router'
import init from './../initialize/init'
import { state } from './../lang/MODE';
import { Images } from './../img/script/images'
import category from './category'
import startGame from './startgame'
import level from './level'
import choiceLevel from './choiceLevel'
import homePage from './homePage'
import setting from './setting'
import loaderCategory from './loaderCategory'



const RouterBase = new Router([], 'history', '/')
let routerInit = {
  router: RouterBase,
  init: init
}

export const Navigate = (path) => RouterBase.navigate(path)
export const Back = () => RouterBase.back()




const StartGamePath = (state) => startGame(state, routerInit)
const ChoiceLevelPath = (app, container, colContent, state) => choiceLevel(app, container, colContent, state, routerInit)
const LevelPath = (app, container, state, Images) => level(app, container, state, Images, routerInit)
const CategoryPath = (app, container, state, imagesCategory, categoryimg) => category(app, container, state, imagesCategory, categoryimg, routerInit)
const SettingPath = (container) => setting(container, routerInit)
const HomePagePath = (app, preloader) => homePage(app, preloader, routerInit)
const LoaderCategoryPath = (context, category, timer) => loaderCategory(context, category, timer, routerInit)


export const HomePage = HomePagePath
export const Setting = SettingPath
export const ChoiceLevel = ChoiceLevelPath
export const Level = LevelPath
export const StartGame = StartGamePath
export const Category = CategoryPath
export const LoaderCategory = LoaderCategoryPath


RouterBase.listen()
export const check = RouterBase.check()
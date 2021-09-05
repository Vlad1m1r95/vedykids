import State from './../Store/State'


 const state = new State('RU')

 if(localStorage.getItem('lang') !== null || undefined){
  state.change(localStorage.getItem('lang')) 
}
 export const stateObservable = state.makeObservable(state)


 export default state


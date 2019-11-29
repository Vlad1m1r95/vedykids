const chocevoiseMODE = (MODE, screen, group) => {
  let Voice = {}

  if(MODE === 'RU'){
    Voice = {
     screen : screen.ru,
     group  : group.ru,
   }
   
 }
  if(MODE === 'ENG'){
    Voice = {
      screen : screen.eng,
      group  : group.eng,
    }
  }

 

   
  return Voice
}

export default chocevoiseMODE
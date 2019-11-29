
const translate = (MODE , input) => {

let ImageVocabulary = [
  {eng : 'apple', ru : 'Яблоко',},
  {eng : 'lemon', ru : 'Лимон' },
  {eng : 'orange', ru : 'Апельсин' },
  {eng : 'pear', ru : 'Груша' },
  {eng : 'pear', ru : 'Груша' },

  {eng : 'Hi! Let`s play !', ru : 'Привет ! Давай играть !'},
  
  {eng : 'Let`s choose the level !', ru : 'Давай выберем уровень !'},
  {eng : 'Let `s choose ! ', ru : 'Давай-ка , выбирай !'},
  
]

let arrayInHash = [
  `Фрукты Fruits`,
  `Овощи Vegetables` ,
  `Транспорт Transport`,
  `Домашние животные  Pets`,
  `Дикие животные 
  Wild animals`,
  `Семья Family`,
  `Одежда Сlothing`,
  `Профессии Professions`

]

 let words = 'Фрукты;Fruits;Овощи;Vegetables;Транспорт; Transport;Домашние животные;Pets;Дикие животные;Wild animals;Семья;Family;Одежда;Сlothing;Профессии;Professions;'
 let arraykey = words.split(";")

 const addWordToVocabulary = (array, Vocabulary) => {
    for(let i = 0; i < array.length;){
      Vocabulary.push({ru: array[i], eng : array[i+1]})
      i = i + 1
      i++
    }
 }
 addWordToVocabulary(arraykey, ImageVocabulary)

 console.log(arraykey)
 console.log(ImageVocabulary)
// const addWordToHash = (array, hash) => {
//   array.forEach(element => {
      
//   });
// }

const  getKey = (ImageVocabulary) => { 
  let key = ''
  if(  ImageVocabulary.eng === input){
   key = ImageVocabulary.eng === input

  } else if (ImageVocabulary.ru === input){
    key = ImageVocabulary.ru === input
  }
   
   return key
}

const Key = ImageVocabulary.find(getKey)

let output = ''
const translateWord = (key) => {
  let word =  output
  switch (MODE) {
    case 'RU' :
        word =  key.ru
        output = word
      break
    case 'ENG' :
        word =  key.eng
        output = word
      break
      
  }
  console.log(output)
  return output
}

translateWord(Key)


console.log(output)
return output


 

  
}

export default translate


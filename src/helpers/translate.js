import keyarray from './category/_static/words'

import ucFirst from './ucFirst'
const translate = (MODE, input) => {


  let ImageVocabulary = [


    { eng: 'back', ru: 'Назад' },
    { eng: 'next', ru: 'Вперед' },
    { eng: 'apple', ru: 'Яблоко' },
    { eng: 'Apple', ru: 'Яблоко' },
    { eng: 'lemon', ru: 'Лимон' },
    { eng: 'orange', ru: 'Апельсин' },
    { eng: 'plum', ru: 'Cлива' },
    { eng: 'kiwi', ru: 'Киви' },
    { eng: 'peach', ru: 'Персик' },
    { eng: 'pear', ru: 'Груша' },
    { eng: 'pineapple', ru: 'Ананас' },
    { eng: 'this is fruit', ru: `Это фруткы` },
    { eng: 'beet', ru: 'Свекла' },
    { eng: 'cabbage', ru: 'Капуста' },
    { eng: 'carrot', ru: 'Морковь' },
    { eng: 'cucumber', ru: 'Огурец' },
    { eng: 'onion', ru: 'Лук' },
    { eng: 'potato', ru: 'Картофель' },
    { eng: 'pumpkin', ru: 'Тыква' },
    { eng: 'tomato', ru: 'Помидор' },
    { eng: `these are vegetables`, ru: `Это овощи` },
    { eng: 'bike', ru: 'Велосипед' },
    { eng: 'boat', ru: 'Лодка' },
    { eng: 'bus', ru: 'Автобус' },
    { eng: 'car', ru: 'Машина' },
    { eng: 'helicopter', ru: 'Вертолет' },
    { eng: 'motorcycle', ru: 'Мотоцикл' },
    { eng: 'airplane', ru: 'Самолет' },
    { eng: 'train', ru: 'Поезд' },
    { eng: `this is transport`, ru: `Это транспорт` },
    { eng: 'cat', ru: 'Кот' },
    { eng: 'chicken', ru: 'Курица' },
    { eng: 'cow', ru: 'Корова' },
    { eng: 'dog', ru: 'Собака' },
    { eng: 'goat', ru: 'Козел' },
    { eng: 'horse', ru: 'Конь' },
    { eng: 'pig', ru: 'Cвинья' },
    { eng: 'sheep', ru: 'Овца' },
    { eng: `these are pets`, ru: `Это домашние животные` },
    { eng: 'bear', ru: 'Медведь' },
    { eng: 'beaver', ru: 'Бобр' },
    { eng: 'elk', ru: 'Лось' },
    { eng: 'fox', ru: 'Лиса' },
    { eng: 'hedgehog', ru: 'Еж' },
    { eng: 'squirrel', ru: 'Белка' },
    { eng: 'tiger', ru: 'Тигр' },
    { eng: 'wolf', ru: 'Волк' },
    { eng: `these are wild animals`, ru: `Это дикие животные` },

    { eng: 'furniture', ru: 'Мебель' },
    { eng: 'armchair', ru: 'Кресло' },
    { eng: 'bed', ru: 'Кровать' },
    { eng: 'chair', ru: 'Стул' },
    { eng: 'cupboard', ru: 'Шкаф' },
    { eng: 'lamp', ru: 'Лампа' },
    { eng: 'sofa', ru: 'Диван' },
    { eng: 'stool', ru: 'Табурет' },
    { eng: 'table', ru: 'Стол' },
    { eng: `this is furniture`, ru: `Это мебель` },
    { eng: 'blouse', ru: 'блузка' },
    { eng: 'coat', ru: 'пиджак' },
    { eng: 'dress', ru: 'платье' },
    { eng: 'overalls', ru: 'комбинезон' },
    { eng: 'skirt', ru: 'юбка' },
    { eng: 'socks', ru: 'носки' },
    { eng: 'tee-shirt', ru: 'футболка' },
    { eng: 'trousers', ru: 'штаны' },
    { eng: 'pants', ru: 'штаны' },
    { eng: 'this is clothes', ru: 'Это одежда' },

    { eng: 'builder', ru: 'Строитель' },
    { eng: 'cook', ru: 'Повар' },
    { eng: 'cosmonaut', ru: 'Космонавт' },
    { eng: 'doctor', ru: 'Доктор' },
    { eng: 'driver', ru: 'Водитель' },
    { eng: 'fireman', ru: 'Пожарный' },
    { eng: 'scientist', ru: 'Ученый' },
    { eng: 'teacher', ru: 'Учитель' },
    { eng: `these are professions`, ru: `Это профессии` },

    { eng: 'Hi! Let`s play !', ru: 'Привет ! Давай играть !' },
    { eng: 'Let`s choose the level !', ru: 'Давай выберем уровень !' },
    { eng: 'Let `s choose ! ', ru: 'Давай-ка , выбирай !' },
    { eng: `show, where!`, ru: 'Покажи,  Где!' },
    { eng: 'progress', ru: 'Прогресс' },

  ]



  let words = 'Фрукты;Fruits;Овощи;Vegetables;Транспорт;Transport;Домашние животные;Pets;Дикие животные;Wild animals;Семья;Family;Одежда;Clothes;Профессии;Professions;'
  let arraykey = words.split(";")


  const addWordToVocabulary = (array, Vocabulary) => {
    for (let i = 0; i < array.length;) {
      Vocabulary.push({ ru: array[i], eng: array[i + 1] })
      i = i + 1
      i++
    }
  }
  const addWordstoVocabularyVer2 = (array, Vocabulary) => {
    array.forEach(arr => {
      for (let i = 0; i < arr.length;) {
        Vocabulary.push({ ru: arr[i], eng: arr[i + 1] })
        i = i + 1
        i++
      }
    });

  }
  addWordToVocabulary(arraykey, ImageVocabulary)
  //  addWordstoVocabularyVer2(keyarray, ImageVocabulary)




  const getKey = (ImageVocabulary) => {


    let key = ''
    if (ImageVocabulary.eng === input) {

      key = ucFirst(ImageVocabulary.eng)

    } else if (ImageVocabulary.ru === input) {

      key = ucFirst(ImageVocabulary.ru)
    }
    return key
  }

  const Key = ImageVocabulary.find(getKey)

  let output = ''
  const translateWord = (key) => {
    let word = output
    switch (MODE) {
      case 'RU':

        word = key.ru
        output = word
        break
      case 'ENG':
        word = key.eng
        output = word
        break

    }

    return output
  }

  translateWord(Key)



  return output





}


export default translate


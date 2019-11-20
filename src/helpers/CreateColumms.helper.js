import { CreateDOMElement , CloneElement} from './newDomel'
import render from './render'
import imgapple from './../img/level1Item/pear.png'
import imgtomato from './../img/level1Item/tomato.png'
import imgcar from './../img/level1Item/car.png'
import imgdog from './../img/level1Item/pig.png'
import imgvolf from './../img/level1Item/volf.png'
import imgfamily from './../img/level1Item/family.png'
import imgsweater from './../img/level1Item/sweater.png'
import imgteacher from './../img/level1Item/teacher.png'


const CreateColumms = (number , Size, action) => {
  const numberOfColumns = number 
  const columnSize = Size 

  const colDefaultProperty = {
    id: 'col-1-item',
    classList : `col-${columnSize} my-auto`
  }

  const imgDefaultProperty = {
    el : 'img',
    classList : 'img-fluid img-level'
  }
  const textDefaultProperty = {
    el : 'span',
    text : 'Фрукты',
    classList : 'col-img-text'
  }
  
  const col1item =  CreateDOMElement(colDefaultProperty)
  const imgblock1 = CreateDOMElement(colDefaultProperty)
  const img1      =  CreateDOMElement(imgDefaultProperty)
  img1.src = imgapple
  img1.alt = 'imageCol1'
  img1.id   = 'fruit'
  const imgtext1 = CreateDOMElement(textDefaultProperty)
    imgblock1.className = 'img-block-center'
    imgblock1.id = 'imgBlock1'
    render(imgtext1,imgblock1)
    render(img1,imgblock1)
    render(imgblock1, col1item)
    const parent = document.getElementById('imgBlock1')

  console.log(parent)
  let arrayText   = [
    'Фрукты',
    'Овощи',
    'Транспорт',
    'Домашние животные',
    'Дикие животные',
    'Семья',
    'Одежда',
    'Профессии',


  ]

  let arraIdAction = [
    'fruit',
    'vegetables',
    'transport',
    'Pets',
    'Wildanimals',
    'family',
    'Clothing',
    'Professions',


  ]
  let arrayCollum = [col1item]  
  let arrayImages = [
    imgapple,
    imgtomato,
    imgcar,
    imgdog,
    imgvolf,
    imgfamily,
    imgsweater,
    imgteacher,
   ] 

for (let col = 2 ; col <= numberOfColumns;  col++){

    let colitem =  CloneElement(col1item, `col-${col}-item`, undefined , false)
    let imgblock = CloneElement(imgblock1, `imgblock${col}` , undefined , false)
    let img = CloneElement(img1)
    let imgtext = CloneElement(imgtext1)

    img.src = arrayImages[col - 1]
    img.id = arraIdAction[col - 1]
    imgtext.innerText = arrayText[col - 1]
    // action()
    
    render(imgtext, imgblock)
    render(img, imgblock)
    render(imgblock, colitem)
    
    arrayCollum.push(colitem)
}
return arrayCollum

}




export default CreateColumms
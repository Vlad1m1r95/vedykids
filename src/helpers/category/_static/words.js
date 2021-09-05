let uglyfystring = `
    apple – яблоко
    apricot – абрикос
    avocado – авокадо
    pineapple – ананас
    banana – банан
    bergamot – бергамот
    durian – дуриан
    grapefruit – грейпфрут
    kiwi – киви
    lime – лайм
    lemon – лимон
    loquat – локва
    mango – манго
    melon – дыня
    nectarine – нектарин
    orange – апельсин
    passion fruit – маракуйя
    papaya – папайя
    peach – персик
    pear – груша
    persimmon – хурма
    pineapple – ананас
    plum – слива
    pomegranate – гранат
    pomelo – помело
    tangerine – мандарин
    quince – айв
    barberry – барбарис
    blackberry – ежевика
    black chokeberry – черноплодная рябина
    blueberry – черника
    buckthorn – облепиха
    cherry – вишня 
    cloudberry – морошка
    cowberry  – брусника
    cranberry – клюква
currant – смородина
date – инжир
dogwood – кизил
elder – бузина
fig –  инжир
grape – виноград
goji berry – ягоды годжи
gooseberry – крыжовник
raspberry – малина
ros hip – шиповник
rowan – рябина
strawberry – клубника
sweet cherry – черешня
viburnum – калина
wild strawberry – лесная земляника
watermelon – арбуз`
 



  const createArrayKey = (uglyfystring) => {
  
 
    let array = uglyfystring.split(/\r?\n\s*/g)
    const result = array.filter(array => array.length > 1)

    let resultarray = []
    result.forEach(element => {
      let el = element.split(' – ')
      resultarray.push(el)
    });
    
    return resultarray
  }
  let keyarray = createArrayKey(uglyfystring)

    export default   keyarray 

import Level1 from './Level1'
import Level2 from './Level2'

const CreateCategory = (app, mainContent, imagesCategory, state, loaderVoice, category, levelDetails) => {

  switch (levelDetails.level) {

    case 1:


      Level1(app, mainContent, imagesCategory, state, loaderVoice, category)
      break

    case 2:
      Level2(app, imagesCategory, state, category)

  }





}

export default CreateCategory
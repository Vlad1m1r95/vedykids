import setHendler from '../hendler.component'
import { Navigate, ChoiceLevel, Setting } from '../../routing/RoutersPath'




const GameMenuHendler = (elements, app, container, colContent, state) => {



  const reduсer = (e) => {
    e = event.target
    switch (e.id) {
      case 'imgPlay':

        ChoiceLevel(app, container, colContent, state)
        Navigate('ChoiceLevel')
        break

      case 'imgSetting':
        console.log(elements)
        // console.log(elements)
        Setting(container)
        Navigate('Setting')

        // alert('НАстройки')
        break

      case 'imgExit':
        window.close()
        let exit = confirm('Закончить игру и перейти в гугл?')
        if (exit) {
          window.location.href = 'https://google.com'
        }

        break

    }

  }



  elements.forEach(element => {

    setHendler(element, 'click', false, reduсer)
  })

}

export default GameMenuHendler
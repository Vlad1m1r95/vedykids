import wrapper from './../../helpers/wrapper'
import newDOM$el from './../../helpers/newDomel'
import { CreateDOMElement, CloneElement } from './../../helpers/newDomel'
import render, { renderAll } from './../../helpers/render'
import Enterimg from './../../img/social-icon/Enterthesite.png'
import vkimg from './../../img/social-icon/vk.png'
import  yandeximg from './../../img/social-icon/yandex.png'
import  googleimg from './../../img/social-icon/google.png'





const createLoginForm = (main) => {

	const divProperty = {
		id: 'container',
		classList: 'container-fluid',
	}

	const container = CreateDOMElement(divProperty)

	const row = CloneElement(container, 'row-content')
	row.className = 'row'
	const col = CloneElement(container, 'col-content')
	col.className = 'col-lg-6 offset-lg-3 Enterbutton text-center'

	const imgProperty = {
		el : 'img',
		id  : 'imgButton',
		classList: 'img-fluid',
		src : Enterimg,
		alt : 'Enter  the game'
	}

	const divProperty2 = {
		el : 'div',
		id: 'buttonEnter'
	}
	const ButtonEnter = CreateDOMElement(divProperty2)
	const imgButton = CreateDOMElement(imgProperty)

	
	const Preloader = CloneElement(container, 'preloader')
	Preloader.className = ""
	//social button
	const socialwrap = CloneElement(container, 'socialWrapper')
	socialwrap.className = 'social-wrapper'
	const vkbutton = CloneElement(imgButton, 'vkButton')
	vkbutton.src = vkimg
	vkbutton.className = 'responsiveimage'
	const googlebutton = CloneElement(imgButton, 'googleButton')
	googlebutton.src = googleimg
	googlebutton.className = 'responsiveimage'
	const yandexbutton = CloneElement(imgButton, 'yandexButton')
	yandexbutton.src = yandeximg
	yandexbutton.className = 'responsiveimage'

	
	const socialArrayImg = [vkbutton, googlebutton, yandexbutton]

	renderAll(socialArrayImg, socialwrap)
	render(imgButton , ButtonEnter)
	render(socialwrap, ButtonEnter)
	render(ButtonEnter , col)
	render(col , row)
	render(row , container)
	const allElem = [Preloader,container]
	renderAll(allElem, main)

}


export default createLoginForm
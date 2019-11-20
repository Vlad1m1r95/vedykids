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
	// render(container, main)



	// const login = {
	// 	lineloader : `<div id="lineloader" class="lineloader"> </div> `,
	// 	preloder   : newDOM$el('div' , 'preloader', []),
	// 	imgsrc     : `//ssl.gstatic.com/accounts/ui/avatar_2x.png`,
	// 	signin     : newDOM$el('button' , 'signin', 
	// 								[`btn`, `btn-lg`, `btn-primary`, `btn-block`,  `btn-signin`],
	// 								`Sign In`, 'submit'
	// 	),
	// 	rememberme : `remember-me`,
	//  forgotPass  :`Forgot the password?`,
	// //  registration: `<a id="registration" href="registration">registration </a>`
	//  registration: newDOM$el('a', 'reg', [], `registration`, )

	// }
	// 	console.log(document.getElementById('formcard'))

	// console.log(`${login.signin.outerHTML}`)


	// const preloader = `${login.preloder.outerHTML}`
	// const imgProfile = ` <img id="profile-img" class="profile-img-card" src="${login.imgsrc}" />`
	// const profileName = `<p id="profile-name" class="profile-name-card"></p>`
	// const form = `<form  id="form-signin" class="form-signin">
	// 	<span id="reauth-email" class="reauth-email"></span>
	// 	<input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
	// 	<input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
	// 	<div id="remember" class="checkbox">
	//     <label>
	//         <input type="checkbox" value="remember-me"> ${login.rememberme}
	//     </label>
	// 		</div>
	// 		${login.signin.outerHTML}
	// </form >   <a href="#" class="forgot-password">
	// ${login.forgotPass}
	// </a>
	// ${login.registration.outerHTML}`
	// const cart = `<div id="parentcard" class="parent-card"><div id="formcard" class="card card-container"></div></div>`
	// const container = `<div  id="container" class="container">  ${cart}</div>
	// `

	// main.insertAdjacentHTML('afterbegin', container)
	// const currentitem =  main.children[0].children[0].children[0]
	// wrapper(currentitem, null ,[preloader,imgProfile, profileName, form])

}


export default createLoginForm
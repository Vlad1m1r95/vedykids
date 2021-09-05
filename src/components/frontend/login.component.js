import Enterimg from './../../img/social-icon/Enterthesite.png'
import vkimg from './../../img/social-icon/vk.png'
import yandeximg from './../../img/social-icon/yandex.png'
import googleimg from './../../img/social-icon/google.png'
import loginTemplate from './../../Template/LoginForm.hbs'







const createLoginForm = (app) => {
	const LoginFormProperty = {
		vk_icon: vkimg,
		google_icon: googleimg,
		yandex_icon: yandeximg,
		fon_image: Enterimg,
		vk_alt: 'vk button',
		google_alt: 'google button',
		yandex_alt: 'yandex button',
		fon_alt: 'fon button',
	}

	app.innerHTML = loginTemplate(LoginFormProperty)

}


export default createLoginForm
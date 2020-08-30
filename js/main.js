const hamburger = document.querySelector('.hamburger');
const navigation = document.querySelector('nav ul');
const buttonNavigation = document.querySelectorAll('nav ul li a');

hamburger.addEventListener('click', function () {
	hamburger.classList.toggle('is-active');
	navigation.classList.toggle('display-nav');
});

buttonNavigation.forEach((button) => {
	button.addEventListener('click', () => {
		navigation.classList.remove('display-nav');
		hamburger.classList.remove('is-active');
	});
});

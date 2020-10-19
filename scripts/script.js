// Glider.js window constuction
window.addEventListener("load", function () {
	new Glider(document.querySelector(".glider"), {
		slidesToShow: 1,
		scrollLock: true,
		arrows: {
			prev: ".btn-prev",
			next: ".btn-next",
		},
	});
});

// When all thing will load

// window.addEventListener('load', function () {
//     alert("It's loaded!")
// });

// document.onreadystatechange = function () {
//     if (document.readyState === 'complete') {
//         alert("WHos 1?")
//     }
// }


// HEADER Section
const hero = document.querySelector("body");
const text = hero.querySelector(".main__title");
const walk = 10; // px vale for shadow


function castShadow(e) {
	const width = hero.offsetWidth;
    const height = hero.offsetHeight;
	let { offsetX: x, offsetY: y } = e;
	if (this !== e.target) {
		x =  e.pageX;
		y =  e.pageY;
	}
	const xWalk = Math.round((x / width) * walk - walk / 3);
	const yWalk = Math.round((y / height) * walk - walk / 3);
	text.style.textShadow = `
          ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.7),
          ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
          ${xWalk}px ${yWalk * -1}px 0 rgba(255, 0, 0, 0.3),
          ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 255, 255, 0.3)
        `;
}

function castShadowMobile(event) {
    var beta = Math.round(event.beta);
    var gamma = Math.round(event.gamma);
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
	let x,y;
		x =  gamma * 7;
		y =  beta * 14;
	const xWalk = Math.round((x / width) * walk - walk / 3);
	const yWalk = Math.round((y / height) * walk - walk / 3);
	text.style.textShadow = `
          ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.7),
          ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
          ${xWalk}px ${yWalk * -1}px 0 rgba(255, 0, 0, 0.3),
          ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 255, 255, 0.3)
        `;

}

//testing if user is on mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.addEventListener("deviceorientation", castShadowMobile, true);
} else{
    hero.addEventListener("mousemove", castShadow);
}


const menu = document.querySelector(".menu");
const arrow = document.querySelector(".navbar__menu__arrow");
const hamburger = document.querySelector(".navbar__menu");

function handleClickMenu(event){
	event.preventDefault();
	menu.classList.toggle("menu--hidden")
	arrow.classList.toggle("navbar__menu__arrow--rotate")

}

hamburger.addEventListener("click", handleClickMenu);


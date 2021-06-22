// Glider.js window constuction
window.addEventListener("load", function () {

	const el = document.querySelector(".glider");
	const glider = new Glider(el, {
		slidesToShow: 1,
		scrollLock: true,
		arrows: {
			prev: ".btn-prev",
			next: ".btn-next",
		},
	});


	let autoplayDelay = 5000;

	let timeout = -1;
	let hovering = false;
	function startTimeout() {
	clearTimeout(timeout);
	timeout = setTimeout(() => {
		if (!hovering)
		glider.scrollItem((glider.slide + 1) % glider.slides.length);
	}, autoplayDelay);
	}

	let animID = 0;
	const isAnimating = () => glider.animate_id !== animID;
	el.addEventListener("glider-animated", () => {
	animID = glider.animate_id;
	if (!hovering) startTimeout();
	});

	el.addEventListener("mouseover", () => {
	hovering = true;
	clearTimeout(timeout);
	});

	el.addEventListener("mouseout", () => {
	hovering = false;
	if (!isAnimating()) startTimeout();
	});

	startTimeout();
});


//  Glider autoplay implementation



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

// NAVIGATION MENU FUNCTIONALITY
const menu = document.querySelector(".menu");
const arrow = document.querySelector(".navbar__menu__arrow");
const hamburger = document.querySelector(".navbar__menu");
const closeCloud = document.querySelector(".menu__cloud-link");
let flag = true;

function handleScroll(){
	setTimeout(removeMenu, 400);
}
function handleClickClose(event){
	if(event.target != menu && event.target.parentNode !=menu && !flag){
		setTimeout(removeMenu, 400);
	}
	flag = false;
}
function removeMenu(){
	menu.classList.add("menu--hidden");
	arrow.classList.add("navbar__menu__arrow--rotate");
	window.removeEventListener("scroll", handleScroll);
	window.removeEventListener("click", handleClickClose);
	flag = true;
}

function handleClickMenu(event){
	event.preventDefault();

	menu.classList.remove("menu--hidden");
	arrow.classList.remove("navbar__menu__arrow--rotate");
	window.addEventListener("scroll", handleScroll);
	window.addEventListener("click", handleClickClose);
}

hamburger.addEventListener("click", handleClickMenu);
closeCloud.addEventListener("click", removeMenu);



// IO for animate navbar
const navbar = document.querySelector(".navbar");
const header = document.querySelector(".header");
const logo = document.querySelector(".navbar__logo");
const sectionOneOptions = {
	rootMargin: "-50% 0% 0% 0%",
};
const sectionOneObserver = new IntersectionObserver(
	(entries, sectionOneObserver) => {
		entries.forEach((entry) => {
			if (!entry.isIntersecting){
				navbar.classList.add("navbar--scrolled");
				logo.classList.add("navbar__logo--scrolled");
			}
			else {
				navbar.classList.remove("navbar--scrolled");
				logo.classList.remove("navbar__logo--scrolled");
			}
		});
	},
	sectionOneOptions
);
// For Animated Header when scroll
sectionOneObserver.observe(header);


// ACTIVE MENU SECTION
// simple function to use for callback in the intersection observer
const changeNav = (entries, observer) => {
    entries.forEach((entry) => {
        // verify the element is intersecting
        if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
			// remove old active class
            document.querySelector('.active').classList.remove('active');
            // get id of the intersecting section
            var id = entry.target.getAttribute('id');
            // find matching link & add appropriate class
            var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
        }
    });
}

// init the observer
const options = {
    threshold: 0.55
}

const observer = new IntersectionObserver(changeNav, options);

// target the elements to be observed
const sections = document.querySelectorAll('header, section');
sections.forEach((section) => {
    observer.observe(section);
});


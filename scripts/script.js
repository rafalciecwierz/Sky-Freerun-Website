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

const hero = document.querySelector("body");
const text = hero.querySelector(".main__title");
const walk = 10; // px vale for shadow
// console.log(hero);
// console.log(text);

function castShadow(e) {
	const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    // console.log("Pomiar");
    // console.table(width,height);
	let { offsetX: x, offsetY: y } = e;

	if (this !== e.target) {
		x =  e.pageX;
		y =  e.pageY;
	}
    // console.table(x,y);
	const xWalk = Math.round((x / width) * walk - walk / 3);
	const yWalk = Math.round((y / height) * walk - walk / 3);
	// console.table(xWalk, yWalk);
	text.style.textShadow = `
          ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.7),
          ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
          ${xWalk}px ${yWalk * -1}px 0 rgba(255, 0, 0, 0.3),
          ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 255, 255, 0.3)
        `;
}


function handleOrientation(event) {
    var absolute = event.absolute;
    var alpha    = event.alpha;
    var beta     = Math.round(event.beta);
    var gamma    = Math.round(event.gamma);

    // console.log(absolute, alpha, beta, gamma);
    const width = hero.offsetWidth;
    const height = hero.offsetHeight;
    // console.log("Pomiar");
    // console.table(width,height);
	let x,y;
		x =  beta * 20;
		y =  gamma * 20;
    console.table(x,y);
	const xWalk = Math.round((x / width) * walk - walk / 3);
	const yWalk = Math.round((y / height) * walk - walk / 3);
	// console.table(xWalk, yWalk);
	text.style.textShadow = `
          ${xWalk}px ${yWalk}px 0 rgba(255, 0, 0, 0.7),
          ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
          ${xWalk}px ${yWalk * -1}px 0 rgba(255, 0, 0, 0.3),
          ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 255, 255, 0.3)
        `;

}

//testing if user is on mobile
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.addEventListener("deviceorientation", handleOrientation, true);
} else{
    hero.addEventListener("mousemove", castShadow);
}



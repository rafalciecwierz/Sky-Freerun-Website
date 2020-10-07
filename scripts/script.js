window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        scrollLock: true,
        arrows: {
            prev: '.glider-prevv',
            next: '.glider-nextt'
        }
    })
})
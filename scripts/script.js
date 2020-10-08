window.addEventListener('load', function(){
    new Glider(document.querySelector('.glider'), {
        slidesToShow: 1,
        scrollLock: true,
        arrows: {
            prev: '.btn-prev',
            next: '.btn-next'
        }
    })
})
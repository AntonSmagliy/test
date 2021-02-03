//sliders --------------------------------------
$('.sideSlider-wrapper').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    asNavFor: '.mainSlider-wrapper',
    infinite: false,
    focusOnSelect: true, 
    prevArrow: '',
    nextArrow: '<a class="sidenext" > <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1L17 9" stroke="#282323" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
    responsive: [
        {
            breakpoint: 1001,
            settings: {
                vertical: false,
                verticalSwiping: false
            }
        },
        {
            breakpoint: 501,
            settings: {
                slidesToShow: 3,
                vertical: false,
                verticalSwiping: false
            }
        }
    ]
})
$('.mainSlider-wrapper').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.sideSlider-wrapper',
    infinite: false,
    arrows: false,

})

$('.similarSlider-wrapper').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<a class="simarrow simnext"> <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5H21M21 5.5L16.5 1M21 5.5L16.5 10" stroke="#282323" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
    prevArrow: '<a class="simarrow simprev"><svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 5.5H1M1 5.5L5.5 1M1 5.5L5.5 10" stroke="#282323" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2, 
                prevArrow: '<a class="simarrow simprev"> <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L1 6L6 1" stroke="#282323" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
                nextArrow: '<a class="simarrow simnext"> <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L6 6L1 1" stroke="#282323" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
            }
        }
    ]
})

$('.viewed').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: '<a class="viewedarrows viewednext"> <svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5.5H21M21 5.5L16.5 1M21 5.5L16.5 10" stroke="#282323" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
    prevArrow: '<a class="viewedarrows viewedprev"><svg width="22" height="11" viewBox="0 0 22 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 5.5H1M1 5.5L5.5 1M1 5.5L5.5 10" stroke="#282323" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
    responsive: [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 700,
            settings: {
                slidesToShow: 2,
                prevArrow: '<a class="viewedarrows viewedprev"> <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 11L1 6L6 1" stroke="#282323" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
                nextArrow: '<a class="viewedarrows viewednext"> <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 11L6 6L1 1" stroke="#282323" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>',
            }
        }
    ]
})
// burger --------------------------------------
$('.burger').click(function(){
    if( $(window).width() < 1000 ){
        $('.menu-list').toggleClass('dpfl')
        $('.menu-list').toggleClass('menu-anim')
    }
})


// gavnokod tabs --------------------------------------

function hideAllSpecs(){
    $('.specs__desc').removeClass('specs__active')
    $('.specs__char').removeClass('specs__active')
    $('.specs__arde').removeClass('specs__active')
}

$('.tab-desc').click(function(){
    hideAllSpecs();
    $('.specs__desc').addClass('specs__active');
    $('.tabs__item').removeClass('active');
    $(this).addClass('active')
})


$('.tab-char').click(function(){
    hideAllSpecs();
    $('.specs__char').addClass('specs__active');
    $('.tabs__item').removeClass('active');
    $(this).addClass('active')
})

$('.tab-adre').click(function(){
    hideAllSpecs();
    $('.specs__arde').addClass('specs__active');
    $('.tabs__item').removeClass('active');
    $(this).addClass('active')
})


//footer tabs animation --------------------------------------

$('.footer-part__title').click(function(){
    $(this).siblings().toggleClass('dpb').toggleClass('footAnimation')
})
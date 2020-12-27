'usestrict';

//ハンバーガーメニュー
function toggleNav() {
    var body = document.body;
    var hamburger = document.getElementById('js-hamburger');
    var blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function () {
        body.classList.remove('nav-open');
    });
}
toggleNav();

//TOP画面、slick-slider設定
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    slidesToShow:1,
    slidesToScroll:1,
    arrows: true,
    prevArrow:'<div class="prev"><img src="images/sp_top-slider-prevbutton.png"></div>',
    nextArrow:'<div class="next"><img src="images/sp_top-slider-nextbutton.png"></div>',
});
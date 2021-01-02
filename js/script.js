'usestrict';

//ハンバーガーメニュー
function toggleNav() {
    const body = document.body;
    const hamburger = document.getElementById('js-hamburger');
    const blackBg = document.getElementById('js-black-bg');

    hamburger.addEventListener('click', function () {
        body.classList.toggle('nav-open');
    });
    blackBg.addEventListener('click', function () {
        body.classList.remove('nav-open');
    });
}
toggleNav();

//「メニューを閉じる」押すと、ナビメニュー閉じる
function navClose() {
    const body = document.body;
    const navClose = document.getElementById('nav-close');

    navClose.addEventListener('click', function(){
        body.classList.remove('nav-open');
    });
}
navClose();

//TOP画面、slick-slider設定
$('.slider').slick({
    autoplay:true,
    autoplaySpeed:5000,
    dots:true,
    slidesToShow:1,
    slidesToScroll:1,
    arrows: true,
    centerMode: true, //前後が見えるスライダー
    centerPadding: '15%', //前後が見えるスライダー
    prevArrow:'<div class="prev"><img src="images/sp_top-slider-prevbutton.png"></div>',
    nextArrow:'<div class="next"><img src="images/sp_top-slider-nextbutton.png"></div>',
    responsive: [{
        breakpoint: 768,
             settings: {
                  centerMode: false,
        }
   }]
});
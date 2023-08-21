$('a.link_arrow').click(function () {
    let a = $('section.directions').offset().top + 'px';
    $('html, body').animate({ scrollTop: a }, 800)
});
$('ul li:nth-child(1) a ').click(function () {
    let a = $('section.directions').offset().top + 'px';
    $('html, body').animate({ scrollTop: a }, 800)
});
$('ul li:nth-child(2) a ').click(function () {
    let a = $('section.suggestions').offset().top + 'px';
    $('html, body').animate({ scrollTop: a }, 800)
});
$('ul li:nth-child(3) a ').click(function () {
    let a = $('section.video').offset().top + 'px';
    $('html, body').animate({ scrollTop: a }, 800)
});
$('ul li:nth-child(4) a ').click(function () {
    let a = $('section.gallery').offset().top + 'px';
    $('html, body').animate({ scrollTop: a }, 800)
});
$('ul li:nth-child(5) a ').click(function () {
    let a = $('section.premium-tour').offset().top + 'px';
    $('html, body').animate({ scrollTop: a }, 800)
});

$('div.suggestions_box').click(function () {
    let style = $(this).attr("style").split(' ')[1];
    let title = $(this).attr("title");
    let text = $(this).attr("text");
    let price = $(this).attr("price");

    $('div.sec-card').toggleClass('visible');
    $('body').toggleClass('overflow');
    $('div.sec-card .sec-card_title').html(title);
    $('div.sec-card .sec-card_image').css('background-image', style)
    $('div.sec-card .sec-card_text').html(text);
    $('div.sec-card .sec-card_price').html(price);
});
$('.sec-card .cross').click(function () {
    $('div.sec-card').removeClass('visible');
    $('body').removeClass('overflow');
});


$('.gallery_slider').slick({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
    prevArrow: '<a class="btn btn-L" href="#"><img src="./img/arrowL.png" /></a>',
    nextArrow: '<a class="btn btn-R" href="#"><img src="./img/arrowR.png" /></a>'
});


// var wd = $(window).width();
// console.log(wd);
// $('figure.vid video').width(wd);

// window.addEventListener('resize', function () {
//   let widthSize = window.innerWidth;
//   let videoSize = document.getElementsByTagName('video');
//   videoSize[0].style.width = widthSize + 'px';
// });


$(document).ready(function () {
  $('ul.gnb li.menu0').click(function () {
    $('video').fadeIn();
    $('img.p1').fadeOut();
    $('img.p2').fadeOut();
    $('img.p3').fadeOut();
    $('img.p4').fadeOut();
    $('img.p5').fadeOut();
    $('img.p6').fadeOut();
    $('img.p7').fadeOut();
    $('img.p8').fadeOut();
  });

  $('ul.gnb li.menu1').click(function () {
    $('video').fadeOut();
    $('img.p1').fadeIn();
    $('img.p2').fadeOut();
    $('img.p3').fadeOut();
    $('img.p4').fadeOut();
    $('img.p5').fadeOut();
    $('img.p6').fadeOut();
    $('img.p7').fadeOut();
    $('img.p8').fadeOut();
  });

  $('ul.gnb li.menu2').click(function () {
    $('video').fadeOut();
    $('img.p1').fadeOut();
    $('img.p2').fadeIn();
    $('img.p3').fadeOut();
    $('img.p4').fadeOut();
    $('img.p5').fadeOut();
    $('img.p6').fadeOut();
    $('img.p7').fadeOut();
    $('img.p8').fadeOut();
  });

  $('ul.gnb li.menu3').click(function () {
    $('video').fadeOut();
    $('img.p1').fadeOut();
    $('img.p2').fadeOut();
    $('img.p3').fadeIn();
    $('img.p4').fadeOut();
    $('img.p5').fadeOut();
    $('img.p6').fadeOut();
    $('img.p7').fadeOut();
    $('img.p8').fadeOut();
  });

  $('ul.gnb li.menu4').click(function () {
    $('video').fadeOut();
    $('img.p1').fadeOut();
    $('img.p2').fadeOut();
    $('img.p3').fadeOut();
    $('img.p4').fadeIn();
    $('img.p5').fadeOut();
    $('img.p6').fadeOut();
    $('img.p7').fadeOut();
    $('img.p8').fadeOut();
  });

  $('ul.gnb li.menu5').click(function () {
    $('video').fadeOut();
    $('img.p1').fadeOut();
    $('img.p2').fadeOut();
    $('img.p3').fadeOut();
    $('img.p4').fadeOut();
    $('img.p5').fadeIn();
    $('img.p6').fadeOut();
    $('img.p7').fadeOut();
    $('img.p8').fadeOut();
  });

  $('ul.gnb li.menu6').click(function () {
    $('video').fadeOut();
    $('img.p1').fadeOut();
    $('img.p2').fadeOut();
    $('img.p3').fadeOut();
    $('img.p4').fadeOut();
    $('img.p5').fadeOut();
    $('img.p6').fadeIn();
    $('img.p7').fadeOut();
    $('img.p8').fadeOut();
  });
  $('section.side .con p.menu8').click(function () {
    $('video').fadeOut();
    $('img.p1').fadeOut();
    $('img.p2').fadeOut();
    $('img.p3').fadeOut();
    $('img.p4').fadeOut();
    $('img.p5').fadeOut();
    $('img.p6').fadeOut();
    $('img.p7').fadeIn();
    $('img.p8').fadeOut();
  });
  $('section.side .con p.menu9').click(function () {
    $('video').fadeOut();
    $('img.p1').fadeOut();
    $('img.p2').fadeOut();
    $('img.p3').fadeOut();
    $('img.p4').fadeOut();
    $('img.p5').fadeOut();
    $('img.p6').fadeOut();
    $('img.p7').fadeOut();
    $('img.p8').fadeIn();
  });
});

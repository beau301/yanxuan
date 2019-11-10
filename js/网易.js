$("#header").load('../header.html');
$("#foot").load('../foot.html');
$("#left").load('../left.html');
$("#right").load('../right.html');
var swiper1 = new Swiper('.swiper-container1', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
for (i = 0; i < swiper1.pagination.bullets.length; i++) {
  swiper1.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}


var swiper2 = new Swiper('.swiper-container2', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
});



// $(".g-row .item").click(function () {
//   $(this).addClass("active").siblings().removeClass("active");
 

// })
$(".item-0").click(()=>{
  $(".item-0").addClass("active")
  $(".item-1").removeClass("active")
  $(".showContainer").eq(0).css({"display":"block"})
  $(".showContainer").eq(1).css({"display":"none"})
})
$(".item-1").click(()=>{
  $(".item-1").addClass("active")
  $(".item-0").removeClass("active")
  $(".showContainer").eq(0).css({"display":"none"})
  $(".showContainer").eq(1).css({"display":"block"})
})



$(".m-indexCarousel").mouseover(function () {
  $(".swiper-button-prev").css({ "display": "block" })
  $(".swiper-button-next").css({ "display": "block" })
})
$(".m-indexCarousel").mouseout(function () {
  $(".swiper-button-prev").css({ "display": "none" })
  $(".swiper-button-next").css({ "display": "none" })
})

var swiper3 = new Swiper('.swiper-container3', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
for (i = 0; i < swiper3.pagination.bullets.length; i++) {
  swiper3.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
} 


var swiper4 = new Swiper('.swiper-container4', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
for (i = 0; i < swiper4.pagination.bullets.length; i++) {
  swiper4.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
} 


var swiper5 = new Swiper('.swiper-container5', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
for (i = 0; i < swiper5.pagination.bullets.length; i++) {
  swiper5.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
} 


var swiper6 = new Swiper('.swiper-container6', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
for (i = 0; i < swiper6.pagination.bullets.length; i++) {
  swiper6.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
} 

var swiper7 = new Swiper('.swiper-container7', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
for (i = 0; i < swiper7.pagination.bullets.length; i++) {
  swiper7.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
} 


var swiper8 = new Swiper('.swiper-container8', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
for (i = 0; i < swiper8.pagination.bullets.length; i++) {
  swiper8.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
} 





var swiper9 = new Swiper('.swiper-container9', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});
for (i = 0; i < swiper9.pagination.bullets.length; i++) {
  swiper9.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
} 


var swiper10 = new Swiper('.swiper-container10', {
  loop: true,
  autoplay: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
});
for (i = 0; i < swiper10.pagination.bullets.length; i++) {
  swiper10.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}

var swiper = new Swiper('.swiper-container12', {
  loop: true,
  autoplay: true,
  pagination: '.swiper-pagination',
  slidesPerView: 3,
  paginationClickable: true,
  spaceBetween: 30,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
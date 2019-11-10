$("#header").load("../header.html")
$("#foot").load("../foot.html")

var swiper1 = new Swiper('.swiper-container1', {
    loop: true,
    autoplay: true,
    effect: 'fade',
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }

});
for (i = 0; i < swiper1.pagination.bullets.length; i++) {
    swiper1.pagination.bullets[i].onmouseover = function () {
        this.click();
    };
}
var flag = true;
$(".sideCont .sideBar").click(function () {
    if (flag == true) {
        $(".sideCont").css({ "right": "0" })
        flag = false;
    } else {
        $(".sideCont").css({ "right": -"290" })
        flag = true;
    }
})

$(".tabList-3 .tabItem").click(function(){
    $(this).addClass("active").siblings().removeClass("active")
    $(this).parent().siblings().eq($(this).index()).addClass("active").siblings().removeClass("active");
})
var swiper2 = new Swiper('.swiper-container2', {
    pagination: '.swiper-pagination',
    direction: 'vertical',
    slidesPerView: 1,
    paginationClickable: true,
    spaceBetween: 30,
    mousewheelControl: true
});
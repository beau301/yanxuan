$(function () {

    $.get("../js/nav.json", (data) => {
        $(data).each(function (index, item) {
            if (item.fenlei) {
                $(".yx-cp-m-tabNav")[0].innerHTML +=
                    `
                <li class="yx-cp-firstItem yx-cp-tabNav-item">
                    <a class="yx-cp-topLevel">${this.title}</a>
                    <div class="yx-cp-tabNav-dropdown">
                            
                    </div>
                </li>
                `


                $(this.fenlei).each(function (index, item) {
                    $(".yx-cp-tabNav-dropdown").last()[0].innerHTML +=
                        `
                        <ul class="yx-cp-cateGroup li1">
                            <li class="li1-bottom">${this.fenlei1}</li> 
                        </ul>
                    `
                    $(this.fenlei2).each(function (index, items) {
                        // console.log(items);
                        $(".yx-cp-cateGroup").last()[0].innerHTML +=
                            `
                            <li class="li1-bot">
                                <img src=${item.image} alt="">
                                <span>${items}</span>
                            </li>
                            `
                    })
                })
            } else {
                $(".yx-cp-m-tabNav")[0].innerHTML +=
                    `
                <li class="yx-cp-firstItem yx-cp-tabNav-item"><a href=""class="yx-cp-topLevel">${this.title}</a>
                    
                </li>
                `
            }
            $(".yx-cp-firstItem").eq(0).addClass("yx-cp-active")
        })
    })


})

$(".yx-cp-m-funcTab").delegate(".yx-cp-firstItem", "click", function () {
    console.log($(this).index())
    var x = $(this).index()
    var y = x - 1
    if (y >= 0 && y < 8) {
        window.open("./lift.html?" + y)
    } else if (y == -1) {
        window.open("../网易.html")
    } else if (y == 8) {
        window.open("../tuijian.html")
    } else if (y == 9) {
        window.open("../zhongchou.html")

    }

})
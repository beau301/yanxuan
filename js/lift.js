$("#header").load('../header.html');
$("#foot").load('../foot.html');
$("#left").load('../left.html');
$("#right").load('../right.html');

$(function () {
  $.get("../js/lift.json", (data) => {
    var y = parseInt(window.location.search.substr(1))
    console.log(data)
    $(data).eq(y-1).each((index, item) => {
      // console.log(index,item)
      $("#public").append(
        `
        <div class="g-bd-list">
            <div class="g-row">
                <div class="m-crumbs " id="j-yx-crumbs" style="display: block;">
                    <a href="/">首页</a>
                    <span class="w-icon-arrow arrow-right-hollow"></span>
                    <span class="z-cur">${item.title}</span>
                </div>
                <div class="js-slick m-focusSlick slick-initialized slick-slider slick-dotted slick-initialized1">
                    <div class="swiper-container swiper-container1">
                      <div class="swiper-wrapper">

                       </div>
                      <div class="swiper-pagination"></div>
                      <div class="swiper-button-prev left"></div>
                      <div class="swiper-button-next right"></div>
                    </div>
                </div>
               
             </div>
         </div> 
        
         `
      )

      


//       // console.log(item.img)
      $(item.img).each((index, item1) => {
        // console.log(item1)
        $(".swiper-wrapper").last().append(`
            <div class="swiper-slide"><img src="${item1}" alt=""></div>
             
        ` )
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
          $(".slick-initialized1").mouseover(() => {
            $(".swiper-button-prev").css("display", "block")
            $(".swiper-button-next").css("display", "block")
          })
          $(".slick-initialized1").mouseout(() => {
            $(".swiper-button-prev").css("display", "none")
            $(".swiper-button-next").css("display", "none")
          })
      })






      // console.log(item.item)
      $(item.item).each((index, item2) => {
        // console.log(item2.head)

        $(".m-content").append(
          `
              <div class="m-Level2Category">
                  <div class="hd">
                      <p class="title f-clearfix">
                         <span class="name f-left">${item2.head}</span>
                      </p>
                      <p class="desc">${item2.head1}</p>
                   </div>
                   <div class="m-itemList-level2Category m-itemList"> 
        
                   </div>
               </div>
              `

        )
        console.log(item2.li)
        $(item2.li).each((index, item3) => {

          if (item3.id == "shows") {
            $(".m-itemList").last().append(
              `
                      <div class="item">
                        <div class="hd">
                            <a href=" " title="60s臻密绒磨毛四件套" target="_blank">
                                <img class="img"
                                    src="${item3.img}"
                                    alt="60s臻密绒磨毛四件套">
                                <img class="img_hover"
                                    src="${item3.imgs}">
                                <img class="promoLogo"
                                    src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
                                <div class="promBanner promBanner-10">
                                    <div class="promTitle">
                                        <span class="title">${item3.titles}</span>
                                        <span class="subTitle" style="vertical-align:middle;">${item3.txt}</span>
                                    </div>
                                    <div class="promContent">${item3.title}</div>
                                </div>
                            </a>
                        </div>
                        <div class="db">
                            <div class="prdtTags">
                                <span class="m-itemTag">${item3.center}</span>
                            </div>
                            <h4 class="name">
                                <a href=""><span>${item3.head}</span></a>
                            </h4>
                            <p class="price">
                                <span>${item3.price} </span>
                                <span class="counterPrice">${item3.change}</span>
                            </p>
                            <div class="wenzi">
                                <hr>
                                <p class="desc">${item3.foot}</p>
                            </div>
                        </div>
                    `)
          } else {
            $(".m-itemList").last().append(
              `
                      <div class="item">
                        <div class="hd">
                            <a href=" " title="60s臻密绒磨毛四件套" target="_blank">
                                <img class="img"
                                    src="${item3.img}"
                                    alt="60s臻密绒磨毛四件套">
                                <img class="img_hover"
                                    src="${item3.imgs}">
                                <img class="promoLogo"
                                    src="https://yanxuan.nosdn.127.net/bf43c8b8b8c205b14e3ac27021e04394.png">
                                <div class="promBanner promBanner-10">
                                    <div class="promTitle">
                                        <span class="title">${item3.titles}</span>
                                        <span class="subTitle" style="vertical-align:middle;">${item3.txt}</span>
                                    </div>
                                    <div class="promContent">${item3.title}</div>
                                </div>
                            </a>
                        </div>
                        <div class="db">
                            <div class="prdtTags">
                                <span>${item3.center}</span>
                            </div>
                            <h4 class="name">
                                <a href=""><span>${item3.head}</span></a>
                            </h4>
                            <p class="price">
                                <span>${item3.price} </span>
                                <span class="counterPrice">${item3.change}</span>
                            </p>
                            <div class="wenzi">
                                <hr>
                                <p class="desc">${item3.foot}</p>
                            </div>
                        </div>
                    `)
          }



        })

      })

    })
  })

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
  $(".slick-initialized1").mouseover(() => {
    $(".swiper-button-prev").css("display", "block")
    $(".swiper-button-next").css("display", "block")
  })
  $(".slick-initialized1").mouseout(() => {
    $(".swiper-button-prev").css("display", "none")
    $(".swiper-button-next").css("display", "none")
  })

})

















  
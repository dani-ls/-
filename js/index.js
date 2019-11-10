var swiper = new Swiper('.swiper', {
  spaceBetween: 30,
  effect: 'fade',
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // observer: true,
  // observeParents: true,
});
for (i = 0; i < swiper.pagination.bullets.length; i++) {
  swiper.pagination.bullets[i].onmouseover = function () {
    this.click();
  };
}
// 新品首发
$.get('../json/index.json', function (str) {
  $(str.new).each(function (index, item) {
    $(` <div class="swiper-slide Slide1">
          <div class="hd">
          <img src=${item.img} alt="" class="img">
          <img src="../img/slogo.png" alt="" class="slogo">
          <div class="prom" style="background: url(${item.promurl});">
              <div class="promTitle" style="background: url(${item.promTitleurl});">
                  <div class="nle">
                      <div class="uptitle">
                      ${item.uptitle}
                      </div>
                      <div class="subtitle">
                      ${item.subtitle}
                      </div>
                  </div>
              </div>
              <div class="nri">
                      <div class="content">
                      ${item.content}
                      </div>
                  </div>
          </div>
      </div>
      <div class="bd">
          <div class="prdtTags">
              <span class="tagword" bg=${item.tagword}></span>
          </div>
          <h4>${item.h4title}</h4>
          <p class="nprice">
              <span class="red">￥${item.red}</span>
              <del class="gray" style="display: none;">￥${item.gray}</del>
          </p>
      </div>
      </div>`).appendTo($('.swiper1 .swiper-wrapper'))
    var arr = str.new
    $('.swiper1').delegate('.Slide1', 'mouseover', function () {
      $(this).find('.img').attr('src', `${arr[$(this).index()].hoverimg}`)
    })
    $('.swiper1').delegate('.Slide1', 'mouseout', function () {
      $(this).find('.img').attr('src', `${arr[$(this).index()].img}`)
    })
  })
  var swiper1 = new Swiper('.swiper1', {
    slidesPerView: 4,
    spaceBetween: 30,
    slidesPerGroup: 4,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.next',
      prevEl: '.prev',
    },
  })
});
// 人气推荐
$.get('../json/index.json', function (str) {
  $(str.people[0]).each(function (index, item) {
    var data1 = item.list
    $.each(data1, function (i) {
      $(`
        <div class="pOne">
          <div class="hd" style="border-bottom: 1px solid #F4F0EA;">
          <img src="${data1[i].img}" alt="" class="img" style="width: 180px;height: 180px;">
          <img src="../img/slogo.png" alt="" class="slogo">
          <div class="prom" style="background: url(https://yanxuan.nosdn.127.net/5e5ba7f9c3805cc8085368ed41aaff65.png);">
          <div class="promTitle" style="background: url(https://yanxuan.nosdn.127.net/ced6f7cfbd566e260ea67ec486cb9b60.png);">
                  <div class="nle">
                      <div class="uptitle">
                      ${data1[i].title}
                      </div>
                      <div class="subtitle">
                      ${data1[i].txt}
                      </div>
                  </div>
              </div>
              <div class="nri">
                  <div class="content">
                  ${data1[i].txts}
                  </div>
              </div>
          </div>
          </div>
           <div class="bd">
          <div class="prdtTags">
              <span class="tagword"></span>
          </div>
          <h4> ${data1[i].tit}</h4>
          <p class="nprice">
              <span class="red">￥${data1[i].price}</span>
              <span class="gray" style="display: none;">￥${data1[i].price}</span>
          </p>
         </div>
         </div>
      `).appendTo($('.bianji'))
      if (data1[i].txts == "消失") {
        $('.people .prom').last().css('display', 'none')
      }
    })
    $(str.people[1]).each(function (index, item) {
      var data1 = item.list
      $.each(data1, function (i) {
        $(`
          <div class="pOne">
            <div class="hd" style="border-bottom: 1px solid #F4F0EA;">
            <img src="${data1[i].img}" alt="" class="img" style="width: 180px;height: 180px;">
           <img src="../img/slogo.png" alt="" class="slogo">
           <div class="prom" style="background: url(https://yanxuan.nosdn.127.net/5e5ba7f9c3805cc8085368ed41aaff65.png);">
              <div class="promTitle" style="background: url(https://yanxuan.nosdn.127.net/ced6f7cfbd566e260ea67ec486cb9b60.png);">
                  <div class="nle">
                      <div class="uptitle">
                      ${data1[i].title}
                      </div>
                      <div class="subtitle">
                      ${data1[i].txt}
                      </div>
                  </div>
              </div>
              <div class="nri">
                  <div class="content">
                  ${data1[i].txts}
                  </div>
              </div>
          </div>
          </div>
           <div class="bd">
          <div class="prdtTags">
              <span class="tagword"></span>
          </div>
          <h4> ${data1[i].tit}</h4>
          <p class="nprice">
              <span class="red">￥${data1[i].price}</span>
              <span class="gray" style="display: none;">￥${data1[i].price}</span>
          </p>
         </div>
         </div>
        `).appendTo($('.hot'))
        var txt = data1[i].txts
        if (data1[i].txts == "消失") {
          $('.prom').last().css('display', 'none')
        }
      })
    })
  })
})
$('.people .sma').click(function () {
  $(this).addClass('active').siblings().removeClass('active')
  $('.people .mBottom>div').eq($(this).index() - 1).removeClass('hide').siblings().addClass('hide')
})
//福利社
var swiper2 = new Swiper('.swiper2', {
  spaceBetween: 30,
  effect: 'fade',
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  observer: true,
  observeParents: true,
});
//居家生活及下面的
var swiper3 = new Swiper('.swiper3', {
  spaceBetween: 30,
  effect: 'fade',
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableOnInteraction: false,
  },
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  observer: true,
  observeParents: true,
});
//动态创建插入
$.get('../json/similar.json', function (str) {
  $.each(str, function (i) {
    $(`
      <div class="life">
        <div class="pinpai" style="margin-top: 60px;">
           <div class="mTitle ">
              <div class="tleft">
                <h3 class="name">${str[i].title}</h3>
               </div>
               <div class="tcenter">
               <ul class="subCateList">
               </ul>
                  <div class="tright">
                    <span>查看更多 ></span>
                  </div>
               </div>
             </div>
             <div class="mBottom">
              <div class="liTop">
                <div class="swiper-container swiper4">
                  <div class="swiper-wrapper siWrap">
                  
                  </div>
                  <div class="swiper-pagination swiper-pagination-white small"></div>
                  <div class="swiper-button-next swiper-button-white nextBom">
                  </div>
                  <div class="swiper-button-prev swiper-button-white prevBom">
                  </div>
                </div>
              </div>
              <div class="liBom">
            </div>
            </div>
            </div>
        </div>
    `).appendTo('.similar')
   
    var str1 = str[i].txt
    $.each(str1, function (j) {
      $(`   <li>
             <b style="margin: 0 13px;">/</b>
             <span>${str1[j]}</span>
            </li>
      `).appendTo($('.subCateList')[i])
    })
    var str2 = str[i].img
    $.each(str2, function (j) {
      $(`
       <div class="swiper-slide"
       style="background-image:url(${str2[j]})">
        </div>
       `).appendTo($('.siWrap')[i])
    })
    var str3 = str[i].list
    $.each(str3, function (j) {
      $(`
       <div class="list">
              <div class="hd">
                  <img src=" ${str3[j].img}" alt="" class="img">
                  <img src="${str3[j].img1}" alt="" class="imgs">                  
                  <img src="../img/slogo.png" alt="" class="slogo">
                  <div class="prom" style="background: url(../img/d03b.png);">
                      <div class="promTitle" style="background: url(../img/879ed.png);">
                          <div class="nle">
                              <div class="uptitle">
                              ${str3[j].txt}
                              </div>
                              <div class="subtitle">
                              ${str3[j].tit}
                              </div>
                          </div>
                      </div>
                      <div class="nri">
                          <div class="content">
                          ${str3[j].txts}
                          </div>
                      </div>
                  </div>
              </div>
              <div class="bd">
                  <div class="prdtTags">
                      <span class="tagword"></span>
                  </div>
                  <h4>${str3[j].cen}</h4>
                  <p class="nprice">
                      <span class="red">${str3[j].price}</span>
                      <span class="gray" style="display: none;">${str3[j].price1}</span>
                  </p>
              </div>
          </div>
       `).appendTo($('.liBom')[i])
       var txt = str3[j].txts
       if (txt == "") {
         $('.similar .prom').last().css('display', 'none')
       }
    })
  })
  var line = null;
  $('.similar').delegate('.list', 'mouseover', function () {
    $(this).find('.img').css("display","none")
    $(this).find('.imgs').css("display","block")

  })
  $('.similar').delegate('.list', 'mouseout', function () {
   
    $(this).find('.img').css("display","block")
    $(this).find('.imgs').css("display","none")
  })
  var swiper4 = new Swiper('.swiper4', {
    spaceBetween: 30,
    effect: 'fade',
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
  });
})

$(window).scroll(function () {
  if ($(window).scrollTop() > 596) {
    $(".yx-cp-fixedtool-scrollToFixed").addClass("fixedActive")
    $(".yx-fixedtoolGoTop").addClass("active")
    $(".m-indexSideBar").addClass("fixed")
  } else {
    $(".yx-cp-fixedtool-scrollToFixed").removeClass("fixedActive")
    $(".yx-fixedtoolGoTop").removeClass("active")
    $(".m-indexSideBar").removeClass("fixed")
  }

})
$(".yx-cp-icon-yxclose").click(function () {
  $(".yx-subscribeDialog").css("display", "none")
})

$(".yx-fixedtoolGoTop").click(function () {
  $('html , body').animate({ scrollTop: 0 });
})

// 大家都在说
$.get('../json/index.json', function (str) {
  $(str.speek).each(function (index, item) {
    $(`
      <div class="swiper-slide active-slider lastSlide"
      style="background: #fff; position: relative;width: 100%;">
      <div class="speekone">
      <div class="imgP">
          <img src=${item.img}
              alt=${item.title}>
      </div>
      <div class="bgCommen">
          <div class="conComm">
              <div class="bdTop">
                  <span>${item.people}</span>
                  <span>${item.time}</span>
              </div>
              <div class="bdMiddle">
                  <span title="" class="pNmae">${item.title}</span>
                  <span class="pPrice">
                      <span>${item.price}</span>
                  </span>
              </div>
              <div class="bdBom">
                  <p>${item.content}</p>
              </div>
          </div>
      </div>
    </div>
  </div>
      `).appendTo($('.wraplast'))
  })
  var mySwiper = new Swiper('#swiper-container2', {
    watchSlidesProgress: true,
    autoplay: {
      delay: 2000,
      stopOnLastSlide: false,
      disableOnInteraction: false,
    },
    loop: true,
    watchSlidesVisibility: true,
    slidesPerView: 3
  })
})

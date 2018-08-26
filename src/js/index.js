jQuery($ => {
   var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      effect: 'fade',
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

   //商品数据请求
   $.ajax({
      url: '../api/index.php',
      type: 'get',
      success: function(res){
        console.log(res);
        let data = JSON.parse(res);
        let content = data.map(function(item){
            return `<li id='jiupin'>
                <img src='${item.goodsImg}' />
                <div class='item-msg'>
                  <span>${item.discribe}</span>
                  <span>${item.newPrice}元</span>
                </div>
              </li>
            `;
        }).join('');
            $('.drinkTab').append(content);
      },
   });









});
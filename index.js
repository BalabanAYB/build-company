var mySwiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
})

document.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('.job__text_item').forEach(function(tabsBtn){
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path

      document.querySelectorAll('.tabs-content').forEach(function(tabsContent){
        tabsContent.classList.remove('tabs-content-active')
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('tabs-content-active')
    })
  })
})

$("#navToggle").click(function() {
  $(this).toggleClass("active");
  $(".overlay").toggleClass("open");
  // this line ▼ prevents content scroll-behind
  $("body").toggleClass("locked");
});
$('.overlay').click(function() {
  $(this).removeClass('open');
  $('.navBurger').removeClass('active');
});




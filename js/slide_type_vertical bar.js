
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
      loop: true,
    effect: "fade",
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  const btn_name = document.querySelectorAll('.swiper-pagination-bullet');
  let ie1 = `<div class="text_btn">INFRA</div>`
  let ie2 = `<div class="text_btn">AREA</div>`
  let ie3 = `<div class="text_btn">TRAFFIC</div>`
  let ie4 = `<div class="text_btn">DEMAND</div>`

  btn_name[0].innerHTML = ie1;
  btn_name[1].innerHTML = ie2;
  btn_name[2].innerHTML = ie3;
  btn_name[3].innerHTML = ie4;


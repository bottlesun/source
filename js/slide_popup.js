
/*슬라이드팝업*/
const slide_name = document.querySelector('.slide_btn_wrap');
slide_name.addEventListener('click' , function(){
  document.querySelector('.slide_popup_size').classList.toggle('popupaction');
  document.querySelector('.slide_arrow').classList.toggle('arrowaction');
});

const close_name1 = document.querySelector('.img_btn1');
close_name1.addEventListener('click',function(){
 document.querySelector('.img1').classList.toggle('display_none');
});

const close_name2 = document.querySelector('.img_btn2');
close_name2.addEventListener('click',function(){
 document.querySelector('.img2').classList.toggle('display_none');
});

const close_name3 = document.querySelector('.img_btn3');
close_name3.addEventListener('click',function(){
 document.querySelector('.img3').classList.toggle('display_none');
});
const close_name4 = document.querySelector('.img_btn4');
close_name4.addEventListener('click',function(){
 document.querySelector('.img4').classList.toggle('display_none');
});
/*슬라이드팝업 end*/

    const this_list = document.querySelectorAll('.tabArea .tab li a');
    const this_li = document.querySelectorAll('.tabArea .tab li');
    const this_tabBox = document.querySelectorAll('.tabArea .tabBox');

    this_list.forEach((v,i) => {
        v.addEventListener('click' , e => {
            e.preventDefault();
            console.log(e.currentTarget.parentElement)

            this_li.forEach((v2,i2) => {
                v2.classList.remove('on');
            });

           this_tabBox.forEach((v3,i3,a3) => {
                v3.classList.remove('on');
            });

            let arr = Array.from(this_tabBox)

            arr[i].classList.add('on');
            e.currentTarget.parentElement.classList.add('on');

        }); 
    });


    

/*
$(document).ready(function () {
    $(".tabArea .tab li a").on("click", function () { // 해당 요소를 클릭하는 내 자신의 index 번호를 가져온다. [0], [1]
        const num = $(".tabArea .tab li a").index($(this));
        // 기존에 적용되어 있는 on class 삭제
        $(".tabArea .tab li").removeClass("on");
        $(".tabArea .tabBox").removeClass("on");
        // 다음 요소 클릭시 on class 추가
        $('.tabArea .tab li:eq(' + num + ')').addClass("on");
        $('.tabArea .tabBox:eq(' + num + ')').addClass("on");
    });
});*/

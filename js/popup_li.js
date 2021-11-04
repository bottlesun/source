
    // 쿠키 가져오기
    let getCookie = function (cname) {
        let name = cname + "=";
        let ca = document.cookie.split(';');
        for(let i=0; i<ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1);
            if (c.indexOf(name) != -1) return c.substring(name.length,c.length);
        }
        return "";
    }

    // 24시간 기준 쿠키 설정하기  
    let setCookie = function (cname, cvalue, exdays) {
        let todayDate = new Date();
        todayDate.setTime(todayDate.getTime() + (exdays*24*60*60*1000));    
        let expires = "expires=" + todayDate.toUTCString(); // UTC기준의 시간에 exdays인자로 받은 값에 의해서 cookie가 설정 됩니다.
        document.cookie = cname + "=" + cvalue + "; " + expires;
    }

    let couponClose1 = function(){
        if($("input[name='chkbox']").is(":checked") == true){
            setCookie("custom_close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
        }
        $(".pop1").hide(500);
    }

    let couponClose2 = function(){
        if($("input[name='chkbox']").is(":checked") == true){
            setCookie("custom_close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
        }
        $(".pop2").hide(500);
    }

    let couponClose3 = function(){
        if($("input[name='chkbox']").is(":checked") == true){
            setCookie("custom_close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
        }
        $(".pop3").hide(500);
    }

    let couponClose4 = function(){
        if($("input[name='chkbox']").is(":checked") == true){
            setCookie("custom_close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
        }
        $(".pop4").hide(500);
    }
    
    
    let couponClose5 = function(){
        if($("input[name='chkbox']").is(":checked") == true){
            setCookie("custom_close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
        }
        $(".pop5").hide(500);
    }
    
    let couponClose6 = function(){
        if($("input[name='chkbox']").is(":checked") == true){
            setCookie("custom_close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
        }
        $(".pop6").hide(500);
    }
    
    let couponClose7 = function(){
        if($("input[name='chkbox']").is(":checked") == true){
            setCookie("custom_close","Y",1);   //기간( ex. 1은 하루, 7은 일주일)
        }
        $(".pop7").hide(500);
    }
    
    $(document).ready(function(){
        

        var cookiedata1 = document.cookie;
        var cookiedata2 = document.cookie;
        var cookiedata3 = document.cookie;
        var cookiedata4 = document.cookie;
        var cookiedata5 = document.cookie;
        var cookiedata6 = document.cookie;
        var cookiedata7 = document.cookie;


        if(cookiedata1.indexOf("custom_close=Y")<0){
            $(".pop1").show();
        }else{
            $(".pop1").hide();
        }
        if(cookiedata2.indexOf("custom_close=Y")<0){
            $(".pop2").show();
        }else{
            $(".pop2").hide();
        }
        if(cookiedata3.indexOf("custom_close=Y")<0){
            $(".pop3").show();
        }else{
            $(".pop3").hide();
        }
        if(cookiedata4.indexOf("custom_close=Y")<0){
            $(".pop4").show();
        }else{
            $(".pop4").hide();
        }
        if(cookiedata5.indexOf("custom_close=Y")<0){
            $(".pop5").show();
        }else{
            $(".pop5").hide();
        }
        if(cookiedata6.indexOf("custom_close=Y")<0){
            $(".pop6").show();
        }else{
            $(".pop6").hide();
        }
        if(cookiedata7.indexOf("custom_close=Y")<0){
            $(".pop7").show();
        }else{
            $(".pop7").hide();
        }


        $("#close_wrap1").click(function(){
            couponClose1();
        });

        $("#close_wrap2").click(function(){
            couponClose2();
        });

        $("#close_wrap3").click(function(){
            couponClose3();
        });

        $("#close_wrap4").click(function(){
            couponClose4();
        });

        $("#close_wrap5").click(function(){
            couponClose5();
        });

        $("#close_wrap6").click(function(){
            couponClose6();
        });

        $("#close_wrap7").click(function(){
            couponClose7();
        });


    });

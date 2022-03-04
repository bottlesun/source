
        const popupBtn = document.querySelector('.popup_btn a');
        const popupWrap = document.querySelector('.popup_wrap');

        function ClickFade() {
            popupWrap.classList.toggle('fadeOutAction');
            setTimeout(() => {
                popupWrap.style.display = "none";
            }, 1100);
        }
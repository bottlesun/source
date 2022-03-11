const popupBg = document.querySelector('.popup_bg');
const popupWrap = document.querySelector('.popup_wrap');

const m_popupBtn = document.querySelectorAll('.popup_btn');

m_popupBtn.forEach((v,i) => {
    const popupList = document.querySelector('.popupmenu_'+[i]);

    m_popupBtn[i].addEventListener('click',(e)=> {
        e.preventDefault();
        popupList.style.display = "none";
    });

});

function ClickFade() {
    popupWrap.classList.add('fadeOutAction');
    setTimeout(() => {
        popupWrap.style.display = "none";
    }, 1000);
}

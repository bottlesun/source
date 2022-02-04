/* 클릭버튼 */
const popup_layout = document.querySelector('.popup_layout');

const popup_src = document.querySelector('.video_item div iframe')

let action_layout = popup_layout.style;

window.onload = action_layout.opacity = 1

popup_layout.addEventListener('click', function(){
  action_layout.opacity = 0;
  popup_src.src="#" // src 주소 강제 변경
});



/* 유튜브 */

var player;

function onYouTubeIframeAPIReady(){

  player = new YT.Player('player',{

    width:'100%',

    videoId:'jJaNRxUShwc',

    playerVars:{'autoplay':1,'playsinline':1},

    events:{ 'onReady':onPlayerReady }

  });

}

function onPlayerReady(e){
 e.preventDefault()
 
  e.target.mute();

  e.target.playVideo();

}

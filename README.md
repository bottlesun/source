## 개인 소스파일 정리

-------------------------------------------------------------------------------
### 2021-11-22 정리

 01.slide.html - 슬라이드 메인페이지 (swiper) <br>
 02. tabmenu_css.html - css로만 이루어진 탭메뉴 (높이 설정이 고정 값이어야 하는 문제) <br>
 03. tabmenu_js.html - js를 추가하여 만들어진 탭메뉴 (높이 설정 부분이 가변적으로 이뤄지도록 적용 됨 CSS로만 이뤄진 탭메뉴 업그레이드 버전) <br>
 04. video_popup.html - iframe을 통해 비디오를 불러오기 위해 만든 팝업창. <br>
 05. popup.li.html - 요청으로 인해 만든 일반 팝업 닫기버튼 클릭 시 사라지면 그 자리 옆에 있던 팝업이 왼쪽으로 계속 이동되게 만들었다. <br>
 06. slide_scale.html - 슬라이드 메인페이지 (이미지 scale 버전) <br>
 07. slide_popup.html - 페이지 왼쪽에 붙어서 나타나는 슬라이드 형 팝업페이지 <br>
 08.floatbar.html - 페이지 오른쪽 하단에 붙어서 있는 배너형 팝업페이지 <br>

### 2021-11-29 정리

 09.slide_type_vertical bar.html - 세션형 슬라이드 타입 (버튼세로형) <br>
 10.slide_type_horizontal bar.html - 세션 슬라이드 타입 (버튼가로형) <br>
 11.tabmenu_cross.html - 이미지랑 글이 겹쳐있는 디자인이 들어간 탭메뉴 <br>

### 2021-11-29 정리

 09.slide_type_vertical bar.html - 세션형 슬라이드 타입 (버튼세로형) <br>
 10.slide_type_horizontal bar.html - 세션 슬라이드 타입 (버튼가로형) <br>
 11.tabmenu_cross.html - 이미지랑 글이 겹쳐있는 디자인이 들어간 탭메뉴 <br>

### 2022-01-17 정리 (리뉴얼)

 폴더로 정리 01.slider , 02.tabmenu , 03.popup
 페이징 리뉴얼 이미지 변경 등 제이쿼리 -> 일부코드 바닐라 JS로 변경

#### 01.slider
01. slide.html - 슬라이드형 메인페이지 (페이드인)
02. slide.scale.html - 슬라이드형 메인페이지 (스케일효과)

#### 02.tabmenu
01. tabmenu_css.html - 탭메뉴 CSS 버전 -> 고정된 height 값으로 진행해야함.
02. tabmenu_js.html - 탭메뉴 JS 버전 -> height 값을 자동으로 조절 함.

#### 03.popup
01. video_popup_vimeo.html - 비메오 버전 iframe 비디오 팝업
02. video_popup_youtube.html - 유튜브 버전 비디오 팝업
03. popup_li_jquery.html - li태그로 만들어진 일반 팝업 쿠키사용 등 Jquery 사용
04. slide_popup.html - 슬라이드형태로 만들어진 팝업
05. floatbar.html - 사이드 플로팅 바
06. button_hover_leftSlide.html - 버튼 호버시 왼쪽으로 길어지는 버튼 (no js) - 22.01.29 추가

#### 삭제 목록
 ##### ~~09.slide_type_vertical bar.html - 세션형 슬라이드 타입 (버튼세로형)~~
 ##### ~~10.slide_type_horizontal bar.html - 세션 슬라이드 타입 (버튼가로형)~~
 ##### ~~11.tabmenu_cross.html - 이미지랑 글이 겹쳐있는 디자인이 들어간 탭메뉴~~ 

-------------------------------------------------------------------------------

해당 소스파일은 구글링 및 개인 작업 or 요청사항에 의해 제작 된 것으로 원작자나 라이브러리를 사용
제이쿼리 소스나 작업된 코드 파일이 아님을 명시해 드립니다.

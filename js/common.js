$(function(){
  // 1. 변수 선언
  // const gnb = "#dolce-gnb"; //메가메뉴. 풀다운세로&가로는 빼면 됨
  const body = "body";
  let speed = 300;
  let viewportW, viewportH;
  const mainMenu = ".depth1";
  const subMenu = ".depth2-wrap";
  const btnLang = ".btn-lang";
  const langList = ".lang-list";
  const btnSitemap = ".btn-sitemap";
  const btnClose = ".btn-close"
  const sitemap = ".mo-gnb-sitemap";
  const smMainMenu = ".mo-depth1 > a";
  const smSubMenu = ".mo-depth2";
  const blankAnchor = "a[href='#']";

  // 반응형 구현
  rwd();
  $(window).resize(function(){ //창크기가 조절될때마다 실행되는 함수
    rwd();
  });

  // 2. 실행될 스크립트 작성
  // GNB 타겟(메인메뉴), 이벤트, 함수
  $(mainMenu).mouseenter(function(){
    $(this).find(subMenu).stop().slideDown(300);
  });
  $(mainMenu).mouseleave(function(){
    $(this).find(subMenu).stop().slideUp(300);
  });

  // 메가메뉴 --내가 할 건 아니라서 삭제해도 되는데 나중에 보기 위해 놔둠
  // $(gnb).mouseenter(function(){
  //   $(this).find(subMenu).stop().slideDown(300);
  //   $(this).addClass("sub-on");
  // });
  // $(gnb).mouseleave(function(){
  //   $(this).find(subMenu).stop().slideup(300);
  //   $(this).removeClass("sub-on");
  // });

  // 언어선택 구현
  $(btnLang).click(function(){
    $(langList).stop().slideToggle(speed);
    // $(this).next().stop().slideToggle(speed);  나 다음 형제 찾아라. 트랩어싱 next는 다음 형제 , 이전 형제는 previous(?단어는 잘 모름)
  });

  // 모바일 GNB, 사이트맵 자바스크립트는 단위 잘 안씀. ms기준이라 0.5초가 500으로 표현됨
  $(btnSitemap).click(function(){
    $(body).addClass("fixed");
    $(sitemap).addClass("on");
  });
  $(btnClose).click(function(){
    $(body).removeClass("fixed");
    $(sitemap).removeClass("on");
  });



  // 모바일 메뉴 펼치기/접기
  $(smMainMenu).click(function(e) {
    if($(body).hasClass("mo")) { //모바일 해상도에서만 실행
      e.preventDefault(); //<a>의 링크 기능 실행 막기
      $(this).parent().siblings().find(smSubMenu).stop().slideUp(300); //앵커의 부모로 나와야 뎁스1이 나와서 부모가 먼저 나왔다.
      $(this).next().stop().slideToggle(300); //stop은 중복 실행 막기 위해서
    }
  }); 

  // 임시링크 실행 막기
  $(blankAnchor).click(function(e) {
    e.preventDefault();
  });


  // 사용자 함수
  function rwd() {
    viewportW = window.innerWidth;
    viewportH = window.innerHeight;
    // console.log(viewportW, viewportH);
    if(viewportW < 768){
      $(body).removeClass("tb pc").addClass("mo");
    } else if(viewportW >= 768 && viewportW < 1280 ){
      $(body).removeClass("mo pc").addClass("tb");
    } else {
      $(body).removeClass("mo tb").addClass("pc");
    }
    $(smSubMenu).attr("style","");
  }

});
$(function () {
  // GNB
  const $window = $(window);
  const $header = $('#header');
  const $menu = $('.gnb > li');
  const $submenu = $('.submenu-wrap');
  const $banner = $('.banner-slide');
  const $btnMenu = $('.btn-menu');
  const duration = 300;

  // 모바일
  const $btnMmenu = $('.btn-m-menu');
  const $mSubmenu = $('.m-submenu-wrap');
  const $mGnb = $('.m-gnb');
  const $dim = $('.dim');
  const $btnClose = $('.btn-close');
  const $mGnbMenu = $('.m-gnb > li');
  const $mGnbSubmenu = $('.m-gnb-sub ');

  // 모바일용 메뉴를 클릭했을 때
  $mGnbMenu.on('click', function () {
    $(this).toggleClass('on');
    $(this).siblings().removeClass('on');

    $(this).find($mGnbSubmenu).stop().slideToggle(duration);
    $(this).siblings().find($mGnbSubmenu).stop().slideUp(duration);
  });

  $btnMmenu.on('click', function () {
    $dim.fadeIn(duration);
    $mSubmenu.addClass('active');
  });

  $btnClose.on('click', function () {
    $dim.fadeOut(duration);
    $mSubmenu.removeClass('active');

    // 모바일 용 서브메뉴 초기화
    $mGnbMenu.removeClass('on');
    $mGnbSubmenu.stop().slideUp(duration);
  });

  // 마우스가 메뉴에 들어오면(mouseenter)
  $menu.on('mouseenter', function () {
    const menuIdx = $(this).index();
    $menu.removeClass('on').eq(menuIdx).addClass('on');
    $submenu.find('li').removeClass('on').eq(menuIdx).addClass('on');
    console.log(menuIdx);

    openMenu();
  });

  // 마우스가 메뉴에 나가면(mouseleave)
  $header.on('mouseleave', function () {
    $menu.removeClass('on');
    $submenu.find('li').removeClass('on');
    closeMenu();
  });

  // 메뉴 버튼을 눌렀을 때
  $btnMenu.on('click', function () {
    openMenu();
  });

  // 메뉴의 동작을 함수로 정의
  function openMenu() {
    $header.addClass('active');
    $submenu.stop().fadeIn(duration);
    $banner.stop().fadeIn(duration);
  }

  function closeMenu() {
    $header.removeClass('active');
    $submenu.stop().fadeOut(duration);
    $banner.stop().fadeOut(duration);
  }

  // 얼마나 스크롤 되었는지 값을 구해서 저장
  let scrollTop = $window.scrollTop();
  // 비주얼 영역의 세로크기 저장
  const visualHeight = $('.visual').outerHeight();

  setWhiteBackground();

  function setWhiteBackground() {
    // 두 값을 비교해서(스크롤값이 비주얼 영역의 세로보다 크다면 = 비주얼 영역을 지난다.)
    if (scrollTop >= visualHeight) {
      $header.addClass('w-bg');
    } else {
      $header.removeClass('w-bg');
    }
  }

  // 스크롤 이벤트
  $window.on('scroll', function () {
    // 얼마나 스크롤 되었는지 값을 구해서 저장
    scrollTop = $(this).scrollTop();
    setWhiteBackground();
  });

  // 언어 선택
  $('.btn-lang').on('click', function () {
    $('.lang-select').stop().slideToggle(duration);
  });

  // family site
  $('.family-site select').on('change', function () {
    const linkValue = $(this).val();
    console.log(linkValue);
    window.open(linkValue);
  });
});

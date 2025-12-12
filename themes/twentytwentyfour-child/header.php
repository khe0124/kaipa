<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header bg-white shadow-sm sticky top-0 z-50">
  <div class="container mx-auto px-4 md:px-6 py-3 md:py-4">
    <div class="flex items-center justify-between">
      <?php 
      $custom_logo_id = get_theme_mod('custom_logo');
      if ($custom_logo_id) : 
        $logo = wp_get_attachment_image($custom_logo_id, 'full', false, array(
          'class' => 'h-8 md:h-10 w-auto',
          'alt' => get_bloginfo('name')
        ));
      ?>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center" rel="home">
          <?php echo $logo; ?>
        </a>
      <?php else : ?>
        <a href="<?php echo esc_url(home_url('/')); ?>" class="text-lg md:text-xl font-bold" rel="home"><?php bloginfo('name'); ?></a>
      <?php endif; ?>
      <nav class="hidden md:flex items-center gap-4 lg:gap-6">
        <a href="<?php echo esc_url(home_url('/about')); ?>" class="text-sm lg:text-base text-gray-700 hover:text-main-500 transition-colors py-2">진흥원은</a>
        <a href="<?php echo esc_url(home_url('/experts')); ?>" class="text-sm lg:text-base text-gray-700 hover:text-main-500 transition-colors py-2">전문가 소개</a>
        
        <!-- 주요사업 드롭다운 -->
        <div class="relative group">
          <button class="text-sm lg:text-base text-gray-700 hover:text-main-500 transition-colors flex items-center gap-1 py-2">
            주요사업
            <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="absolute top-full left-0 mt-2 w-[200px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
            <div class="py-2 flex flex-col gap-0">
              <a href="<?php echo esc_url(home_url('/education')); ?>" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors">AI 교육</a>
              <a href="<?php echo esc_url(home_url('/networking')); ?>" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors">AI 인사네트워킹</a>
              <a href="<?php echo esc_url(home_url('/training')); ?>" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors col-span-2">AI 전문가 양성</a>
            </div>
          </div>
        </div>
        
        <a href="<?php echo esc_url(home_url('/cases')); ?>" class="text-sm lg:text-base text-gray-700 hover:text-main-500 transition-colors py-2">성공사례</a>
        
        <!-- 진흥원 소식 드롭다운 -->
        <div class="relative group">
          <button class="text-sm lg:text-base text-gray-700 hover:text-main-500 transition-colors flex items-center gap-1 py-2">
            진흥원 소식
            <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
          <div class="absolute top-full left-0 mt-2 w-[200px] bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border border-gray-100">
            <div class="py-2 flex flex-col gap-0">
              <a href="<?php echo esc_url(home_url('/press')); ?>" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors">보도자료</a>
              <a href="<?php echo esc_url(home_url('/blog')); ?>" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors">블로그</a>
              <a href="<?php echo esc_url(home_url('/notice')); ?>" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors col-span-2">공지사항</a>
            </div>
          </div>
        </div>
        
        <a href="<?php echo esc_url(home_url('/contact')); ?>" class="text-sm lg:text-base text-gray-700 hover:text-main-500 transition-colors py-2">문의하기</a>
      </nav>
      
      <!-- 모바일 메뉴 버튼 -->
      <button class="md:hidden p-2 -mr-2 text-gray-700 hover:text-main-500 transition-colors touch-manipulation" id="mobile-menu-btn" aria-label="메뉴 열기">
        <svg class="w-6 h-6 hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
        <svg class="w-6 h-6 close-icon hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
  </div>
  
  <!-- 모바일 메뉴 오버레이 -->
  <div class="fixed inset-0 bg-black/50 z-40 hidden transition-opacity duration-300" id="mobile-overlay"></div>
  
  <!-- 모바일 메뉴 -->
  <nav class="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-50 transform translate-x-full transition-transform duration-300 ease-in-out md:hidden" id="mobile-menu">
    <div class="flex flex-col h-full">
      <!-- 모바일 메뉴 헤더 -->
      <div class="flex items-center justify-between p-4 border-b border-gray-200">
        <?php 
        $custom_logo_id = get_theme_mod('custom_logo');
        if ($custom_logo_id) : 
          $logo = wp_get_attachment_image($custom_logo_id, 'full', false, array(
            'class' => 'h-8 w-auto',
            'alt' => get_bloginfo('name')
          ));
        ?>
          <a href="<?php echo esc_url(home_url('/')); ?>" class="flex items-center" rel="home">
            <?php echo $logo; ?>
          </a>
        <?php else : ?>
          <a href="<?php echo esc_url(home_url('/')); ?>" class="text-lg font-bold" rel="home"><?php bloginfo('name'); ?></a>
        <?php endif; ?>
        <button class="p-2 text-gray-700 hover:text-main-500 transition-colors touch-manipulation" id="mobile-menu-close" aria-label="메뉴 닫기">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <!-- 모바일 메뉴 컨텐츠 -->
      <div class="flex-1 overflow-y-auto py-4">
        <div class="flex flex-col">
          <a href="<?php echo esc_url(home_url('/about')); ?>" class="px-6 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors touch-manipulation border-b border-gray-100">진흥원은</a>
          <a href="<?php echo esc_url(home_url('/experts')); ?>" class="px-6 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors touch-manipulation border-b border-gray-100">전문가 소개</a>
          
          <!-- 주요사업 서브메뉴 -->
          <div class="border-b border-gray-100">
            <button class="w-full px-6 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors text-left flex items-center justify-between touch-manipulation" id="mobile-submenu-1-btn">
              <span>주요사업</span>
              <svg class="w-5 h-5 transition-transform duration-200 submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="hidden bg-gray-50" id="mobile-submenu-1">
              <a href="<?php echo esc_url(home_url('/education')); ?>" class="block px-8 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-main-500 transition-colors touch-manipulation">AI 교육</a>
              <a href="<?php echo esc_url(home_url('/networking')); ?>" class="block px-8 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-main-500 transition-colors touch-manipulation">AI 인사네트워킹</a>
              <a href="<?php echo esc_url(home_url('/training')); ?>" class="block px-8 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-main-500 transition-colors touch-manipulation">AI 전문가 양성</a>
            </div>
          </div>
          
          <a href="<?php echo esc_url(home_url('/cases')); ?>" class="px-6 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors touch-manipulation border-b border-gray-100">성공사례</a>
          
          <!-- 진흥원 소식 서브메뉴 -->
          <div class="border-b border-gray-100">
            <button class="w-full px-6 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors text-left flex items-center justify-between touch-manipulation" id="mobile-submenu-2-btn">
              <span>진흥원 소식</span>
              <svg class="w-5 h-5 transition-transform duration-200 submenu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            <div class="hidden bg-gray-50" id="mobile-submenu-2">
              <a href="<?php echo esc_url(home_url('/press')); ?>" class="block px-8 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-main-500 transition-colors touch-manipulation">보도자료</a>
              <a href="<?php echo esc_url(home_url('/blog')); ?>" class="block px-8 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-main-500 transition-colors touch-manipulation">블로그</a>
              <a href="<?php echo esc_url(home_url('/notice')); ?>" class="block px-8 py-3 text-sm text-gray-600 hover:bg-gray-100 hover:text-main-500 transition-colors touch-manipulation">공지사항</a>
            </div>
          </div>
          
          <a href="<?php echo esc_url(home_url('/contact')); ?>" class="px-6 py-3 text-base text-gray-700 hover:bg-gray-50 hover:text-main-500 transition-colors touch-manipulation border-b border-gray-100">문의하기</a>
        </div>
      </div>
    </div>
  </nav>
</header>

<script>
  // 모바일 메뉴 관리
  document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenuClose = document.getElementById('mobile-menu-close');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileOverlay = document.getElementById('mobile-overlay');
    const hamburgerIcon = mobileMenuBtn?.querySelector('.hamburger-icon');
    const closeIcon = mobileMenuBtn?.querySelector('.close-icon');
    const mobileSubmenu1Btn = document.getElementById('mobile-submenu-1-btn');
    const mobileSubmenu1 = document.getElementById('mobile-submenu-1');
    const mobileSubmenu2Btn = document.getElementById('mobile-submenu-2-btn');
    const mobileSubmenu2 = document.getElementById('mobile-submenu-2');
    const body = document.body;
    
    // 메뉴 열기
    function openMenu() {
      if (mobileMenu && mobileOverlay) {
        mobileMenu.classList.remove('translate-x-full');
        mobileOverlay.classList.remove('hidden');
        body.style.overflow = 'hidden'; // 스크롤 방지
        if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
        if (closeIcon) closeIcon.classList.remove('hidden');
      }
    }
    
    // 메뉴 닫기
    function closeMenu() {
      if (mobileMenu && mobileOverlay) {
        mobileMenu.classList.add('translate-x-full');
        mobileOverlay.classList.add('hidden');
        body.style.overflow = ''; // 스크롤 복원
        if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
        if (closeIcon) closeIcon.classList.add('hidden');
      }
    }
    
    // 메뉴 버튼 클릭
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        if (mobileMenu?.classList.contains('translate-x-full')) {
          openMenu();
        } else {
          closeMenu();
        }
      });
    }
    
    // 닫기 버튼 클릭
    if (mobileMenuClose) {
      mobileMenuClose.addEventListener('click', closeMenu);
    }
    
    // 오버레이 클릭 시 닫기
    if (mobileOverlay) {
      mobileOverlay.addEventListener('click', closeMenu);
    }
    
    // ESC 키로 닫기
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('translate-x-full')) {
        closeMenu();
      }
    });
    
    // 서브메뉴 토글
    if (mobileSubmenu1Btn && mobileSubmenu1) {
      mobileSubmenu1Btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const isHidden = mobileSubmenu1.classList.contains('hidden');
        const icon = mobileSubmenu1Btn.querySelector('.submenu-icon');
        
        if (isHidden) {
          mobileSubmenu1.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
          mobileSubmenu1.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
        }
      });
    }
    
    if (mobileSubmenu2Btn && mobileSubmenu2) {
      mobileSubmenu2Btn.addEventListener('click', function(e) {
        e.stopPropagation();
        const isHidden = mobileSubmenu2.classList.contains('hidden');
        const icon = mobileSubmenu2Btn.querySelector('.submenu-icon');
        
        if (isHidden) {
          mobileSubmenu2.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        } else {
          mobileSubmenu2.classList.add('hidden');
          if (icon) icon.style.transform = 'rotate(0deg)';
        }
      });
    }
    
    // 모바일 메뉴 링크 클릭 시 메뉴 닫기 (선택사항)
    const mobileMenuLinks = mobileMenu?.querySelectorAll('a');
    if (mobileMenuLinks) {
      mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
          // 서브메뉴 링크는 즉시 닫지 않고, 메인 메뉴 링크만 닫기
          if (!this.closest('[id^="mobile-submenu"]')) {
            closeMenu();
          }
        });
      });
    }
  });
</script>
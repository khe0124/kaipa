<!doctype html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo('charset'); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<header class="site-header">
  <div class="container mx-auto p-4 grid grid-cols-[1fr_400px] items-center justify-between">
    <a href="<?php echo esc_url(home_url('/')); ?>" class="text-xl font-bold">사이트 로고</a>
    <nav class="flex items-center gap-4">
      <?php
      // 필요 시 WP 메뉴 출력
      wp_nav_menu(['theme_location' => 'primary']);
      
      ?>
    </nav>
  </div>
</header>
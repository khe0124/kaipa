<?php
/*
Template Name: Home Page
*/

get_header(); 

?>
<div id="home"></div>
<div class="container mx-auto p-4"> 
    <?php the_content(); ?>
</div>
<div class="flex flex-col items-center justify-center p-4 py-16">
  <h2 class="text-4xl font-bold text-center mb-4">지금 바로 문의해보세요.</h2>
<p class="text-gray-600 text-base font-light whitespace-pre-wrap">지금 바로 문의해보세요.</p>
<a href="<?php echo esc_url(home_url('/contact')); ?>" class="btn btn-primary px-4 py-2 rounded-full text-white bg-main-500 w-[200px] text-center mt-4 mb-8">문의하기</a>
</div>
<?php
get_footer();
?>

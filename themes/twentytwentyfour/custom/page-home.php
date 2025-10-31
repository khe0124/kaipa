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
<div class="flex flex-col items-center justify-center">
  <h1>Home</h1>
  <p>Home description</p>
</div>
<?php
get_footer();
?>

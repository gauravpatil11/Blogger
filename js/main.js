$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // click event on toggle menu
    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })

    // owl carousel for blog
    // $('.owl-carousel').owlCarousel();

    $('.move-up span').click(function(){
        $('html,body').animate({
            scrollTop:0
        },1000);
    })

    //AOS instance
    AOS.init();


});
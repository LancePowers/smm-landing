$(document).ready(function(){
  console.log('slick')

  var item_length = $('.ss > div').length - 1;
  var slider = $('.ss').slick({
    speed: 700,
    autoplay:true,
    autoplaySpeed: 3000,
    infinite: false,
    pauseOnHover: false
  });

  // On before slide change
  slider.on('afterChange', function(event, slick, currentSlide, nextSlide){

     //check the length of total items in .slide container
   //if that number is the same with the number of the last slider
   //Then pause the slider
   if( item_length === slider.slick('slickCurrentSlide') ){
    slider.slickPause();
    //  slider.slickSetOption("autoplay",false,false)
   };
  });

});

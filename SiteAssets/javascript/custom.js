function openNav() {
    document.getElementById("myNav").style.width = "30%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }

  $(document).ready(function() {
 
    $(".about-carousel").owlCarousel({
   
        navigation : false, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        autoPlay : 3000,
        singleItem:true,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
     
    $(".services-carousel").owlCarousel({
 

      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      autoPlay : 3000,
 
      items : 3, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false

});

$(document).ready(function() {
 
  $(".sponsors-carousel").owlCarousel({
 
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      pagination : false,
      autoPlay : 3000,
 
      items : 5, 
      itemsDesktop : false,
      itemsDesktopSmall : false,
      itemsTablet: false,
      itemsMobile : false
 
  });
 
});

   
  });

  $('.count').each(function () {
    $(this).prop('Counter').animate({
        Counter: $(this).text()
    }, {
        duration: 4000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

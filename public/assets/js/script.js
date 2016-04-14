 $(document).ready(function () {
   $('.nav li').click(function(e) {

       $('.active').removeClass('active');

       var $this = $(this);
       if (!$this.hasClass('active')) {
           $this.addClass('active');
       }
       //e.preventDefault();
   });
});

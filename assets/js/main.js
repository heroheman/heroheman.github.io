// $(document).ready(function(){
// });
(function($) {
    $(function() {
        $('.meta').hide();
        $('#toggleNav').on('click', function(){
            $('.meta').fadeToggle();    
            console.log("test")
        })
    });
})(jQuery);

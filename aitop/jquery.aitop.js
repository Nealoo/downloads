(function($){
    $.fn.aiTop = function(options) {
        return this.each(function() {       
           $(window).scroll(function() {       
                if($(window).scrollTop() >= 100){
                    $('.go-top').fadeIn(300); 
                }else{    
                    $('.go-top').fadeOut(300);    
                }
            });
            $(this).click(function(){
            $('html,body').animate({scrollTop: '0px'}, 800);});
                       
        });// this.each(func..
    };// fn.ailkTab
})(jQuery);
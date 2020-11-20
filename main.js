jQuery(document).ready(function(){
    "uses trict";
    $('#slider-carousel').carouFredSel({
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:1000,
            pauseOnHover:true

        },
        auto:true,
        items:{
            visible:{
                min:1,
                max:1
            },
            height:"variable"
        },
        pagination:{
            container:".sliderpager",
            pageAnchorBuilder:false
        }
    });

    
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        if(top>=130){
            $('header').addClass('secondary');

        }
        else
            if($("header").hasClass('secondary')){
                $("header").removeClass('secondary');
            }
    });

});
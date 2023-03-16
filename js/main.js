$(document).ready(function(){


/* modal de carga */
   
    
    $(".btn-menu").on("click",function(){
        
        
        if($(this).hasClass("cerrado") ){
            $(this).removeClass("cerrado").addClass("abierto");
            $(" nav .btn-menu div:first-child").addClass("e-btn__first");
            $(" nav .btn-menu div:nth-child(2)").addClass("e-btn__second");
            $(" nav .btn-menu div:last-child").addClass("e-btn__last");
            $(" nav .menu").addClass("e_menu");
            $(" nav .menu .m-menu").addClass("e-m_menu");
        }else if($(this).hasClass("abierto")){
            $(this).removeClass("abierto").addClass("cerrado");
            $(" nav .menu").removeClass("e_menu");
            $(" nav .menu .m-menu").removeClass("e-m_menu");
            $(" nav .btn-menu div:first-child").removeClass("e-btn__first");
            $(" nav .btn-menu div:nth-child(2)").removeClass("e-btn__second");
            $(" nav .btn-menu div:last-child").removeClass("e-btn__last");
        }
        
    });

});
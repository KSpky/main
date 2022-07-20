

$(function(){
    var PHtml = $("html");
    var page = 1;
    var sideM = $("aside");
    var mpage = 1;
    /*mHtml.animate({scrollTop : 0},100);*/
    $.fn.pcwidth = function(){
        $(window).on("wheel", function(scr_event) {
            if(PHtml.is(":animated")) return;
            if(scr_event.originalEvent.deltaY > 0) {
                if(page == 5) return;
                page++;
            } else if(scr_event.originalEvent.deltaY < 0) {
                if(page == 1) return;
                page--;
            }
            var posTop = (page-1) * $(window).height();
            PHtml.animate({scrollTop : posTop},1000);
            sideM.animate({top:posTop},1000);
            if(page != 1){
                $("article").removeClass("header_animation");
            }
            else if(page == 1){
                $("article").addClass("header_animation");
            }
            if(page != 3){
                $("span").removeClass("skillani1 skillani2 skillani3");
            }
            else if(page == 3){
                for(var skilla = 1; skilla < 9; skilla++){
                    if(skilla == 1 || skilla == 2){
                        $(".skill"+skilla+"> div > span").addClass("skillani1");
                    }
                    else if(skilla == 3 || skilla == 4 || skilla == 6 || skilla == 7){
                        $(".skill"+skilla+"> div > span").addClass("skillani2");
                    }
                    else{
                        $(".skill"+skilla+"> div > span").addClass("skillani3");
                    }
                }
            }
            if(page == 4){
               $(".aboutme").addClass("aboutme_animation");
            }
            else if(page != 4){
                $(".aboutme").removeClass("aboutme_animation");
            }
            if(page == 5){
                $(".contact_text").addClass("footer_animation");
             }
             else if(page != 5){
                $(".contact_text").removeClass("footer_animation");
             }
        })
    
        $(".sidemenu > li").on({
            mouseenter: function(){
                var li_num = $(this).index();
                $(".sidemenu > li").eq(li_num).css({"transform":"rotate(90deg) translate(0,-20%)"});
                if(li_num == 0){
                    $(".sidemenu > li:eq("+li_num+") > a").css({"color":"brown"})
                }
                else if(li_num == 1){
                    $(".sidemenu > li:eq("+li_num+") > a").css({"color":"chocolate"})
                }
                else if(li_num == 2){
                    $(".sidemenu > li:eq("+li_num+") > a").css({"color":"orange"})
                }
                else if(li_num == 3){
                    $(".sidemenu > li:eq("+li_num+") > a").css({"color":"skyblue"})
                }
                else if(li_num == 4){
                    $(".sidemenu > li:eq("+li_num+") > a").css({"color":"brown"})
                }
            },
            mouseleave: function(){
                li_num = $(this).index();
                $(".sidemenu > li").eq(li_num).css({"transform":"rotate(90deg)"});
                $(".sidemenu > li:eq("+li_num+") > a").css({"color":"black"})
            },
            click: function(){
                var li_num = $(this).index();
                var sideMani = (li_num) * $(window).height();
                var a_text = $(".sidemenu > li:eq("+li_num+")> a").text();
                sideM.animate({top:sideMani},1000);
                if(a_text == "Main"){
                    page = 1;
                }
                else if(a_text == "Profile"){
                    page = 2;
                }
                else if(a_text == "Skill"){
                    page = 3;
                }
                else if(a_text == "About Me"){
                    page = 4;
                }
                else if(a_text == "End"){
                    page = 5;
                }
                if(page != 1){
                    $("article").removeClass("header_animation");
                    $(".whiteboard > article").css({"opacity":"0"});
                }
                else if(page == 1){
                    $("article").addClass("header_animation");
                    $(".whiteboard > article").css({"opacity":""});
                }
                if(page != 3){
                    $("span").removeClass("skillani1 skillani2 skillani3");
                }
                else if(page == 3){
                    for(var skilla = 1; skilla < 9; skilla++){
                        if(skilla == 1 || skilla == 2){
                            $(".skill"+skilla+"> div > span").addClass("skillani1");
                        }
                        else if(skilla == 3 || skilla == 4 || skilla == 6 || skilla == 7){
                            $(".skill"+skilla+"> div > span").addClass("skillani2");
                        }
                        else{
                            $(".skill"+skilla+"> div > span").addClass("skillani3");
                        }
                    }
                }
                if(page == 4){
                $(".aboutme").addClass("aboutme_animation");
                }
                else if(page != 4){
                    $(".aboutme").removeClass("aboutme_animation");
                }
                if(page == 5){
                    $(".contact_text").addClass("footer_animation");
                }
                else if(page != 5){
                    $(".contact_text").removeClass("footer_animation");
                }
            }
        })
    }

    
        $.fn.mobilewidth = function(){
        $("body").css({"overflow":"scroll"});
        $("aside").css({"display":"none"});
        $(".aboutme").css({"opacity":"1"});
        $(".contact_text").css({"opacity":"1"});
    }


    if(window.innerWidth >= 1000){
        $.fn.pcwidth();
    }
    else if(window.innerWidth > 360 && window.innerWidth < 1000){
        $.fn.mobilewidth();
    }
    $(window).resize(function(){
        if(window.innerWidth >= 1000){
            location.reload();
        }   
        if(window.innerWidth > 360 && window.innerWidth < 1000){
            location.reload();
        }
    })

})


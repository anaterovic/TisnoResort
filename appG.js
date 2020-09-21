$(function(){

    //on click
    $('.gallery div img').click(function(){
        // console.log($('.gallery').css('filter'));
    if($('.gallery').css('-webkit-filter')=="brightness(1)"){
        // console.log($(this).attr('src'));
            $('.gallery').css({
                '-webkit-filter':'brightness(50%)',
            })
            var src = 'url('+$(this).attr('src')+')';
            $('.image-display').css({
                'display':'flex',
                'background-image':src,
                '-webkit-filter':'brightness(100%)'
            })
            $('header').css({
                '-webkit-filter':'brightness(100%)'
            })
    } else{
            $('.gallery').css({
                "-webkit-filter":"brightness(100%)",
            })
            $('.image-display').css({
                'display':'none'
            })
            
    }
    })


    //scrolling
    var lastScrollTop = 0;
    $(window).scroll(function(){
        const menuItems = document.querySelectorAll('.menu-item');
    var st = $(this).scrollTop();
    if (st > lastScrollTop){
       // downscroll code
       menuItems.forEach((link,index)=>{
        link.style.display = "none";
        })
        $('.logo-menu-resort-small').hide("fast");
        $('.background').slideUp(300);
        $('.logo-menu-resort-big').show("fast");
    } else {
      // upscroll code
      $('.background').slideDown(300);
            $('.logo-menu-resort-big').hide("fast")
            $('.logo-menu-resort-small').show("fast");
            // logoPicSmall.style.display = "flex";
            menuItems.forEach((link,index)=>{
                link.style.display= "inline-flex";
                link.style.animation = `titleAnimation 0.5s ease forwards`;
                // ${index/5+0.3}s `;
            });
    }
    lastScrollTop = st;
    });

    //arrow click
    $('.arrow-back').click(function(){
        var src = ($('.image-display').css('background-image')).toString();
        var list = src.split('/');
        var a = list[6].split('.');
        var num = parseInt(a[0])-1;
        if(num>0){
            var final = 'url('+ list[4] + '/' + list[5] + '/' + num.toString() + '.jpeg'+')';
            $('.image-display').css({
                'background-image': final
            })
        }
    })
    $('.arrow-front').click(function(){
        var src = ($('.image-display').css('background-image')).toString();
        var list = src.split('/');
        var a = list[6].split('.');
        var num = parseInt(a[0])+1;
        if (num < 25){
            var final = 'url('+ list[4] + '/' + list[5] + '/' + num.toString() + '.jpeg'+')';
            $('.image-display').css({
                'background-image': final
            })
        }
    })

    //exit
    $('.exit').click(function(){
        $('.gallery').css({
            "-webkit-filter":"brightness(100%)",
        })
        $('.image-display').css({
            'display':'none'
        })
    })

})

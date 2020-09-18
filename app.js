$(function(){
    const logoHover = () => {
        const logoPicBig = document.querySelector('.logo-menu-resort-big');
        const logoPicSmall = document.querySelector('.logo-menu-resort-small');
        const menuItems = document.querySelectorAll('.menu-item');
        const menu = document.querySelector('.navigation');
        const bg = document.querySelector('.background');
        const bk2 = document.querySelector('.logo-menu-booking');
        const bk = document.querySelectorAll('.slideshow li span');

        menu.addEventListener("mouseover", ()=>{
            console.log("Tu sam.")
            $('.background').slideDown(300);
            $('.logo-menu-resort-big').hide("fast")
            logoPicSmall.style.display = "flex";
            menuItems.forEach((link,index)=>{
                link.style.display= "inline-flex";
                link.style.animation = `titleAnimation 0.5s ease forwards`;
                // ${index/5+0.3}s `;
            });
            bk.forEach((pic,index)=>{
                pic.style.filter = "brightness(50%)";
            })
        });
        
        menu.addEventListener("mouseleave", ()=>{
            console.log("Idem.");
            menuItems.forEach((link,index)=>{
                link.style.display = "none";
            })
            $('.logo-menu-resort-small').hide("fast")
            $('.background').slideUp(300);
            $('.logo-menu-resort-big').show("fast");
            bk.forEach((pic,index)=>{
                pic.style.filter = "brightness(100%)";
            })
         })
    }
    
    logoHover();
});

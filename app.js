const logoHover = () => {
    const logoPic = document.querySelector('.logo-menu');
    const menuItems = document.querySelectorAll('.menu-item');
    const menu = document.querySelector('div.menu');

    menu.addEventListener("mouseover", ()=>{
        console.log("Tu sam.")
        menuItems.forEach((link,index)=>{
            link.style.display = "block";
        })
        logoPic.src = "images/logo-new-bolder.png";  
        logoPic.style.width = "100px";
        logoPic.style.height = "50px";
    })
    
    menu.addEventListener("mouseout", ()=>{
        console.log("Idem.")
        menuItems.forEach((link,index)=>{
            link.style.display = "none";
        })
        logoPic.src = "images/logo-new-long.png";
        logoPic.style.width = "240px";
        logoPic.style.height = "28px";
    })

}

logoHover();
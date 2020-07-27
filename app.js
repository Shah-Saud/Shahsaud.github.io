const hamburger = document.querySelector('.nav .nav-bar .nav-list .hamburger');
const mb_menu = document.querySelector('.nav .nav-bar .nav-list ul');
const nav = document.querySelector('.nav.container');
const anch_tag = document.querySelector('.nav .nav-bar .nav-list ul li a');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mb_menu.classList.toggle('active');

});

document.addEventListener('scroll', ()=>{
    let scr_pos = window.scrollY;
    if (scr_pos > 160){
        nav.style.backgroundColor = "#29323c";
    }else{
        nav.style.backgroundColor = "transparent";
    }

});

/*anch_tag.forEach((item) => {
    item.addEventListener('click', ()=>{
        hamburger.classList.toggle('active');
        mb_menu.classList.toggle('active');

    });
});*/
function mclick(){
    hamburger.classList.toggle('active');
    mb_menu.classList.toggle('active');
}
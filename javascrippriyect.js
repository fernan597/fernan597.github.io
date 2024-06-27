document.addEventListener('DOMContentLoaded', function() {
var header = document.getElementsByClassName('header');
console.log(header);
        window.addEventListener('scroll', ()=>{
            var scroll = window.scrollY
            if(scroll>10){
                header[0].style.backgroundColor='#121212'
            }else{
                header[0].style.backgroundColor='transparent'
            }
        })

        
            const divv = document.querySelectorAll('div[id]');
            const menuLinks = document.querySelectorAll('.menu  li a');
        
            function changeActiveLink() {
                let index = divv.length;
        
                while(--index && window.scrollY + 100 < divv[index].offsetTop) {}
        
                menuLinks.forEach((link) => link.classList.remove('active'));
                menuLinks[index].classList.add('active');
            }
        
            changeActiveLink();
            window.addEventListener('scroll', changeActiveLink);
        });
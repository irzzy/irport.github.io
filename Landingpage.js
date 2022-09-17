const Bulan = document.querySelector('.moon')

const Bintang = document.querySelector('.stars')

const GD = document.querySelector('.MF')

const GB = document.querySelector('.MB')

const Tombol = document.querySelector('.button')

const Texts = document.querySelector('.text')

const Kepala = document.querySelector('header')

window.addEventListener('scroll' , function() {
   
    const value = window.scrollY;
    
    Bintang.style.left = value * 0.25 + 'px';
    
    Bulan.style.top = value * 1.05 + 'px';
    
    GB.style.top = value * 0.5 + 'px';
    
    GD.style.top = value * 0 + 'px';
    
    Texts.style.marginRight = value * 4 + 'px';
    
    Texts.style.marginTop = value *  1.5 + 'px';
    
    Tombol.style.marginTop = value * 1.5 + 'px';

    Kepala.style.top = value * 0.5 + 'px';

    

})







const heart = document.querySelector('.heart');
const heartContainer = document.querySelector('.heart-container');
const content = document.querySelector('.content');

if (!heart || !heartContainer || !content) {
    console.error('Elementos do coração não encontrados: verifique classes/HTML');
} else heart.addEventListener('click', () => {

    // Se o GSAP não carregou (CDN offline/bloqueado), evita quebra e pelo menos mostra o conteúdo.
    if (!window.gsap) {
        console.error('GSAP não carregou (verifique a rede/CDN).');
        if (heart) heart.style.opacity = '0';
        if (heartContainer) heartContainer.style.opacity = '0';
        if (content) content.style.opacity = '1';
        return;
    }

    gsap.to('.heart',{
        scale:8,
        opacity:0,
        duration:1,
        ease:"power3.out"

    });

    gsap.to(heartContainer,{

        opacity:0,
        duration:1

    });

    gsap.to(content,{

        opacity:1,
        duration:2,
        delay:.7

    });

});

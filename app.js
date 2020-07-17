function scrollAppear()
{
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition =window.innerHeight/6;

    if(introPosition < screenPosition)
    {
        introText.classList('intro-appear');
    }
}

window.addEventListener('scroll');
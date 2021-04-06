const btn1 = document.querySelector('#Prev');
const btn2 = document.querySelector('#Next');

const proyectos = document.querySelector('.proyectos');
const slides = proyectos.getElementsByTagName('section');

let i = 0;

/*siguiente*/
function nextSlide(){
    slides[i].classList.remove('active');
    i = (i + 1) % slides.length;
    slides[i].classList.add('active');
}

Next.addEventListener('click', () =>{
    this.nextSlide();
});


/*atras*/
function prevSlide(){
    slides[i].classList.remove('active');
    i = (i - 1 + slides.length) % slides.length;
    slides[i].classList.add('active');
}

Prev.addEventListener('click', () =>{
    this.prevSlide();
});
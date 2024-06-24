//_____________animation Fade In et Slide Up des SECTIONS
let listSections = document.querySelectorAll('section');
console.log(listSections);

const observerSection = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const sectionAnim = entry.target;

        if (entry.isIntersecting) {
        if (sectionAnim !== listSections[0]) {
            sectionAnim.classList.add('fadeSlideUp');
        }
        } else {
        sectionAnim.classList.remove('fadeSlideUp');
        }
    });
});

listSections.forEach(element => {
    observerSection.observe(element);
});

// ___________________accélération FLOWERS
document.addEventListener('DOMContentLoaded', () =>{
    const maxDuration = 20;
    const minDuration = 5;

    //accélération au scroll de l'élément  du document ayant la setProperty définie
    window.addEventListener("scroll", () => {
        document.documentElement.style.setProperty('--rotateTime', `${minDuration}s` )
    })
    //remise à vitesse courante
    window.addEventListener("scrollend", () => {
        document.documentElement.style.setProperty('--rotateTime', `${maxDuration}s` )
    })
})

//________________ création de span sur titles h2
let listH2 = document.querySelectorAll('h2')

for (let i=0; i<listH2.length; i++) {
    const spanElement = document.createElement('span');
    spanElement.textContent = listH2[i].textContent;
    listH2[i].textContent='';
    listH2[i].appendChild(spanElement);
}

let listSpanH2 = document.querySelectorAll('h2 span');
console.log('liste des span H2',listSpanH2);

 //____________animation Slide Up des span de titles h2
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const titleAnim = entry.target;

    if (entry.isIntersecting) {
      titleAnim.classList.add('slideUp');
      return;
    } else{
      titleAnim.classList.remove('slideUp');
    }
  });
});

listSpanH2.forEach(element => {
  observer.observe(element);
});
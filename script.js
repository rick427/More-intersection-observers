//const sectionOne = document.querySelector('.section1');
const sections = document.querySelectorAll('section') 

const options = {
    root: null,
    threshold: 0,
    rootMargin: "-150px"
};

const observer = new IntersectionObserver((entries, observer) => {
 entries.forEach(entry => {
     if(entry.isIntersecting){
        console.log(entry);
        entry.target.classList.toggle('inverse')
     }
 })
}, options)

 sections.forEach(section => {
     observer.observe(section);
 })
//observer.observe(sectionOne);
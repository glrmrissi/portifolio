const sections = {
    home: {elements: document.querySelectorAll("#home"), nav: document.querySelector("#homeNav") },
    aboutme: {elements : document.querySelectorAll("#sobremim"), nav: document.querySelector("#sobremimNav")},
    skills: {elements : document.querySelectorAll("#skills"), nav: document.querySelector("#skillsNav")},
    projects:{ elements : document.querySelectorAll("#projetos") , nav: document.querySelector("#projetosNav")}, 
}

let observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        Object.values(sections).forEach(({elements, nav}) => {
            if ([...elements].includes(entry.target)) {
                nav.classList.toggle("act", entry.isIntersecting);
            }
        })
    });
}, { threshold: 0.2 });

const home = document.querySelectorAll("#home");

function observerNewBoxes() {
    Object.values(sections).forEach(({ elements }) => {
        elements.forEach(box => observer.observe(box))
    })
}

let mutationObserver = new MutationObserver(observerNewBoxes);

mutationObserver.observe(document.body , { childList: true, subtree: true });

observerNewBoxes();
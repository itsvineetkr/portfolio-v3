const homepage = document.querySelector('.homepage');
const about = document.querySelector('.about');
const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');
const nav = document.querySelector('nav');
const name = document.querySelector('nav .name');

const aboutRect = about.getBoundingClientRect();
const projectsRect = projects.getBoundingClientRect();
const contactRect = contact.getBoundingClientRect();
const aboutSpan = document.querySelector('.about p span');

const p = 0.4
const c = 20
const h = window.innerHeight

const x_about = aboutRect.top + window.scrollY
const y_about = aboutRect.bottom + window.scrollY

const x_projects = projectsRect.top + window.scrollY
const y_projects = projectsRect.bottom + window.scrollY

const x_contact = contactRect.top + window.scrollY
const y_contact = contactRect.bottom + window.scrollY

const theme = document.querySelectorAll('.theme');

function fade(element, percent, blur, x, y){
    const p = percent
    const c = blur
    const h = window.innerHeight
    let s = window.scrollY;
    if (s<(y+x)/2){
        // FADE IN ends after p percent of window height scrolled
        t = -((s-(x-h)-p*h)*c)/(p*h)
    }
    else{
        // FADE OUT starts after p percent of window height left
        t = ((s-y+p*h)*c)/(p*h)
    }
    t = t > c ? c : t < 0 ? 0 : t;
    element.style.filter = `blur(${t}px)`;
}


window.addEventListener('scroll', () => {
    // if (window.scrollY > 0 && window.scrollY < 600) {
    //     homepage.style.filter = `blur(${window.scrollY / 150 * 2}px)`;
    // } 

    if (window.scrollY > 100){
        nav.style.opacity = ((window.scrollY-100)/100 * 12.5)+"%";
        
    }else{
        nav.style.opacity = 0;
    }

    fade(homepage, 0.5, c, 0, h)
    fade(about, 0.5, c, x_about, y_about)
    fade(projects, 0.4, c, x_projects, y_projects)
    // fade(contact, 0.5, c, x_contact, y_contact)
    
    let start, end

    start = x_about - h/2
    end = y_about - 3*h/4

    b = ((window.scrollY - start)*100)/(end-start)
    b = b > 100 ? 100 : b < 0 ? 0 : b;
    aboutSpan.style.backgroundSize = b+"%"+ " 100%";
});


theme.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        if (button.innerHTML == "light"){
            theme.forEach(button => {
                button.innerHTML = "dark";    
            });
            document.documentElement.style.setProperty('--background-color', '#181a1b');
            document.documentElement.style.setProperty('--text-color', 'white');
            document.documentElement.style.setProperty('--link-color', 'white');
            document.documentElement.style.setProperty('--border-color', '#776e62');
            document.documentElement.style.setProperty('--about-color', 'hsla(0, 0%, 100%, 0.274)');
            document.documentElement.style.setProperty('--dots-color', 'rgba(255, 255, 255, 0.09)');

            document.documentElement.style.setProperty('--exp-job-desc', '#b0b0b0');
            document.documentElement.style.setProperty('--exp-job-title', '#efefef');
            document.documentElement.style.setProperty('--exp-company', '#bcc4f3');
            document.documentElement.style.setProperty('--exp-timeline-bg', '#555');
            document.documentElement.style.setProperty('--exp-timeline-color', '#ffffff');


        } else {
            theme.forEach(button => {
                button.innerHTML = "light";    
            });
            document.documentElement.style.setProperty('--background-color', 'white');
            document.documentElement.style.setProperty('--text-color', 'black');
            document.documentElement.style.setProperty('--link-color', 'black');
            document.documentElement.style.setProperty('--border-color', 'black');
            document.documentElement.style.setProperty('--about-color', 'hsla(0, 0%, 0%, 0.274)');
            document.documentElement.style.setProperty('--dots-color', 'rgba(0, 0, 0, 0.1)');

            

            document.documentElement.style.setProperty('--exp-job-desc', '#555');
            document.documentElement.style.setProperty('--exp-job-title', '#333');
            document.documentElement.style.setProperty('--exp-company', '#474b62');
            document.documentElement.style.setProperty('--exp-timeline-bg', '#333');
            document.documentElement.style.setProperty('--exp-timeline-color', 'white');
        }
    });
});

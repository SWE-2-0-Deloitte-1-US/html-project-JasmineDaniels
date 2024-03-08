// let magician = document.querySelector('#magic-link');
// let magicianImageSet = document.querySelector('#magic');

// magician.addEventListener('mouseover', function() {
//     magicianImageSet.classList.toggle('none');
// })

let projectLinks = document.querySelectorAll('.project-link');
let projects = document.querySelectorAll('.image-box');
let lastEl;

console.log("Project Links : ", projectLinks)
console.log("Projects : ", projects)

projectLinks.forEach((link) => {
    link.addEventListener('mouseover', function(){
        if(lastEl != null){
            lastEl.classList.remove('active');
        }
        
        for(let i = 0; i < projects.length; i++){
            if(projects[i].getAttribute('name') == link.getAttribute('id')){
                //projects[i].classList.remove('none');
                // add an active class that reveals
                projects[i].classList.toggle('active');
                lastEl = projects[i];
            } 
        }
    })
})



